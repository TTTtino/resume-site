export interface ContactFormPayload {
  name: string
  email: string
  subject: string
  message: string
  /** Formspree honeypot — must stay empty for legitimate users */
  _gotcha?: string
}

export class ContactSubmitError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'ContactSubmitError'
    this.status = status
  }
}

const getFormspreeEndpoint = () => {
  const formId = import.meta.env.VITE_FORMSPREE_FORM_ID

  if (!formId) {
    throw new ContactSubmitError(
      'Contact form is not configured. Set VITE_FORMSPREE_FORM_ID.',
      500,
    )
  }

  return `https://formspree.io/f/${formId}`
}

export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<void> {
  const response = await fetch(getFormspreeEndpoint(), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
      _gotcha: payload._gotcha ?? '',
    }),
  })

  if (response.ok) {
    return
  }

  let message = 'Something went wrong while sending your message. Please try again.'

  try {
    const data = (await response.json()) as {
      error?: string
      errors?: Array<{ message?: string }>
    }
    message =
      data.error ??
      data.errors?.map((entry) => entry.message).filter(Boolean).join(' ') ??
      message
  } catch {
    // Keep the default message when the error body is not JSON.
  }

  throw new ContactSubmitError(message, response.status)
}
