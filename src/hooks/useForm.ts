import { useState, FormEvent } from 'react'

type ValidationRule = {
  required?: boolean
  pattern?: RegExp
  minLength?: number
  maxLength?: number
  custom?: (value: string) => boolean
}

type ValidationRules<T> = {
  [K in keyof T]?: ValidationRule
}

interface ValidationErrors {
  [key: string]: string
}

export const useForm = <T extends { [key: string]: string }>(
  initialState: T,
  validationRules?: ValidationRules<T>
) => {
  const [formData, setFormData] = useState<T>(initialState)
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateField = (name: keyof T, value: string): string => {
    if (!validationRules?.[name]) return ''

    const rules = validationRules[name]
    
    if (rules?.required && !value) {
      return 'This field is required'
    }
    
    if (rules?.pattern && !rules.pattern.test(value)) {
      return 'Invalid format'
    }
    
    if (rules?.minLength && value.length < rules.minLength) {
      return `Minimum length is ${rules.minLength} characters`
    }
    
    if (rules?.maxLength && value.length > rules.maxLength) {
      return `Maximum length is ${rules.maxLength} characters`
    }
    
    if (rules?.custom && !rules.custom(value)) {
      return 'Invalid value'
    }

    return ''
  }

  const handleChange = (name: keyof T, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (validationRules) {
      const error = validateField(name, value)
      setErrors(prev => ({
        ...prev,
        [name]: error
      }))
    }
  }

  const validateForm = (): boolean => {
    if (!validationRules) return true

    const newErrors: ValidationErrors = {}
    let isValid = true

    Object.keys(formData).forEach(key => {
      const error = validateField(key as keyof T, formData[key])
      if (error) {
        newErrors[key] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
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