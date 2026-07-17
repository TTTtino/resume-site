import axios, { isAxiosError } from 'axios'

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

const getErrorMessage = (data: FormspreeErrorBody | undefined) => {
  const fallback =
    'Something went wrong while sending your message. Please try again.'
  const fieldErrors = data?.errors
    ?.map((entry) => entry.message)
    .filter((value): value is string => Boolean(value))

  return data?.error ?? (fieldErrors?.length ? fieldErrors.join(' ') : fallback)
}

export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<void> {
  try {
    await axios.post(
      getFormspreeEndpoint(),
      {
        name: payload.name,
        email: payload.email,
        _replyto: payload.email,
        subject: payload.subject,
        message: payload.message,
        _gotcha: payload._gotcha ?? '',
      },
      {
        headers: {
          Accept: 'application/json',
        },
      },
    )
  } catch (error) {
    if (isAxiosError<FormspreeErrorBody>(error)) {
      throw new ContactSubmitError(
        getErrorMessage(error.response?.data),
        error.response?.status ?? 500,
      )
    }

    throw new ContactSubmitError(
      'Something went wrong while sending your message. Please try again.',
      500,
    )
  }
}
