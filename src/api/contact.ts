export interface ContactFormPayload {
  name: string
  email: string
  subject: string
  message: string
  /** Formspree honeypot — must stay empty for legitimate users */
  _gotcha?: string
}

interface FormspreeErrorBody {
  error?: string
  errors?: Array<{
    code?: string
    field?: string
    message?: string
  }>
}

export class ContactSubmitError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'ContactSubmitError'
    this.status = status
  }
}

/** Public Formspree form ID — safe to ship in the client bundle */
export const FORMSPREE_FORM_ID =
  import.meta.env.VITE_FORMSPREE_FORM_ID?.trim() || 'mdaqevdq'

const getFormspreeEndpoint = () => `https://formspree.io/f/${FORMSPREE_FORM_ID}`

export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<void> {
  // React + Vite AJAX submit (same contract as Formspree's React/AJAX guides)
  const response = await fetch(getFormspreeEndpoint(), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      _replyto: payload.email,
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
    const data = (await response.json()) as FormspreeErrorBody
    const fieldErrors = data.errors
      ?.map((entry) => entry.message)
      .filter((value): value is string => Boolean(value))

    message = data.error ?? (fieldErrors?.length ? fieldErrors.join(' ') : message)
  } catch {
    // Keep the default message when the error body is not JSON.
  }

  throw new ContactSubmitError(message, response.status)
}
