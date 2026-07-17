import { useMutation } from '@tanstack/react-query'
import { ContactFormPayload, submitContactForm } from '../api/contact'

export const useSubmitContact = () =>
  useMutation({
    mutationKey: ['contact', 'submit'],
    mutationFn: (payload: ContactFormPayload) => submitContactForm(payload),
  })
