import { useState, FormEvent } from 'react'

type ValidationRules = {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
}

type ValidationConfig<T> = {
  [K in keyof T]?: ValidationRules
}

interface UseFormReturn<T> {
  formData: T
  errors: Partial<Record<keyof T, string>>
  isSubmitting: boolean
  handleChange: (field: keyof T, value: string) => void
  handleSubmit: (
    onSubmit: (data: T) => Promise<void> | void,
    e?: FormEvent
  ) => void
  resetForm: () => void
}

export const useForm = <T extends Record<string, string>>(
  initialState: T,
  validationConfig: ValidationConfig<T>
): UseFormReturn<T> => {
  const [formData, setFormData] = useState<T>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateField = (name: keyof T, value: string): string | null => {
    const rules = validationConfig[name]
    if (!rules) return null

    if (rules.required && !value) {
      return 'This field is required'
    }

    if (rules.minLength && value.length < rules.minLength) {
      return `Must be at least ${rules.minLength} characters`
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return `Must be no more than ${rules.maxLength} characters`
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return 'Invalid format'
    }

    return null
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof T, string>> = {}
    let isValid = true

    Object.keys(formData).forEach((key) => {
      const error = validateField(key as keyof T, formData[key as keyof T])
      if (error) {
        newErrors[key as keyof T] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (field: keyof T, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when field is modified
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }

    // Validate field on change if there's a validation config
    if (validationConfig[field]) {
      const error = validateField(field, value)
      setErrors(prev => ({ ...prev, [field]: error || undefined }))
    }
  }

  const handleSubmit = async (
    onSubmit: (data: T) => Promise<void> | void,
    e?: FormEvent
  ) => {
    if (e) {
      e.preventDefault()
    }

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    try {
      await onSubmit(formData)
      setFormData(initialState) // Reset form after successful submission
    } catch (error) {
      console.error('Form submission error:', error)
      throw error // Re-throw to be caught by error boundary
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData(initialState)
    setErrors({})
    setIsSubmitting(false)
  }

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm
  }
} 