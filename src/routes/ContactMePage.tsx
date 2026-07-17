import { FormEvent, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { RiLinkedinBoxFill } from 'react-icons/ri'
import Page from '@components/page'
import { FORMSPREE_FORM_ID } from '../api/contact'
import { useSubmitContact } from '../hooks/useSubmitContact'
import { easeOutSoft } from '@lib/motion'

interface ContactFormState {
  name: string
  email: string
  subject: string
  message: string
  company: string
}

const initialFormState: ContactFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  company: '',
}

const fieldClassName =
  'rounded-lg border border-secondary-400/40 bg-dark-slate-50/80 px-3 py-2.5 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-400/40 disabled:opacity-60'

const ContactMePage = () => {
  const formId = useId()
  const [form, setForm] = useState<ContactFormState>(initialFormState)
  const [validationError, setValidationError] = useState<string | null>(null)
  const submitContact = useSubmitContact()
  const reduceMotion = useReducedMotion()

  const updateField =
    (field: keyof ContactFormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }))
      if (validationError) setValidationError(null)
      if (submitContact.isError) submitContact.reset()
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const name = form.name.trim()
    const email = form.email.trim()
    const subject = form.subject.trim()
    const message = form.message.trim()

    if (!name || !email || !message) {
      setValidationError('Please fill in your name, email, and message.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setValidationError('Please enter a valid email address.')
      return
    }

    if (message.length < 20) {
      setValidationError(
        'Please write a slightly longer message (at least 20 characters).',
      )
      return
    }

    setValidationError(null)

    submitContact.mutate(
      {
        name,
        email,
        subject: subject || 'Portfolio contact',
        message,
        _gotcha: form.company,
      },
      {
        onSuccess: () => {
          setForm(initialFormState)
        },
      },
    )
  }

  const isSubmitting = submitContact.isPending
  const showSuccess = submitContact.isSuccess
  const errorMessage =
    validationError ??
    (submitContact.isError
      ? submitContact.error instanceof Error
        ? submitContact.error.message
        : 'Something went wrong while sending your message. Please try again.'
      : null)

  return (
    <Page
      title="Contact Me"
      description="Send a message to Tino Tom through the portfolio contact form."
    >
      <div className="mx-auto max-w-xl py-2">
        <p className="section-kicker">Get in touch</p>
        <h1 className="page-title mb-3">Contact</h1>
        <p className="mb-8 text-lg font-light text-slate-300">
          Send a message and I’ll get back to you by email. Your details stay
          private — nothing sensitive is shown on this page.
        </p>

        <AnimatePresence mode="wait">
          {showSuccess ? (
            <motion.div
              key="success"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={easeOutSoft}
              className="mb-6 rounded-xl border border-primary-400/40 bg-secondary-900/40 p-5"
              role="status"
            >
              <p className="font-semibold text-primary-200">Message sent.</p>
              <p className="mt-1 font-light text-slate-200">
                Thanks for reaching out — I’ll reply as soon as I can.
              </p>
              <button
                type="button"
                className="mt-4 text-sm font-semibold text-primary-300 underline underline-offset-4 hover:text-primary-200"
                onClick={() => submitContact.reset()}
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              className="flex flex-col gap-5"
              onSubmit={handleSubmit}
              noValidate
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={easeOutSoft}
            >
              <div className="flex flex-col gap-2">
                <label htmlFor={`${formId}-name`} className="font-semibold">
                  Name
                </label>
                <input
                  id={`${formId}-name`}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={updateField('name')}
                  disabled={isSubmitting}
                  className={fieldClassName}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor={`${formId}-email`} className="font-semibold">
                  Email
                </label>
                <input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={updateField('email')}
                  disabled={isSubmitting}
                  className={fieldClassName}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor={`${formId}-subject`} className="font-semibold">
                  Subject{' '}
                  <span className="font-normal text-slate-400">(optional)</span>
                </label>
                <input
                  id={`${formId}-subject`}
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={updateField('subject')}
                  disabled={isSubmitting}
                  className={fieldClassName}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor={`${formId}-message`} className="font-semibold">
                  Message
                </label>
                <textarea
                  id={`${formId}-message`}
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={updateField('message')}
                  disabled={isSubmitting}
                  className={`resize-y ${fieldClassName}`}
                />
              </div>

              <div
                className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor={`${formId}-company`}>Company</label>
                <input
                  id={`${formId}-company`}
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={updateField('company')}
                />
              </div>

              {errorMessage && (
                <motion.p
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm font-semibold text-red-300"
                  role="alert"
                >
                  {errorMessage}
                </motion.p>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !FORMSPREE_FORM_ID}
                className="rounded-lg bg-secondary-500 px-5 py-3 font-semibold text-white transition hover:bg-secondary-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Sending…' : 'Send message'}
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        <div className="mt-10 border-t border-secondary-400/30 pt-6">
          <p className="mb-3 font-light text-slate-300">Prefer LinkedIn?</p>
          <a
            href="https://www.linkedin.com/in/tino-tom/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-primary-300 underline-offset-4 hover:underline"
          >
            <RiLinkedinBoxFill className="h-5 w-5" />
            linkedin.com/in/tino-tom
          </a>
          <div className="mt-4">
            <Link
              to="/"
              className="text-sm font-semibold text-slate-400 underline-offset-4 hover:text-slate-200 hover:underline"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default ContactMePage
