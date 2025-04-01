import emailjs from '@emailjs/browser'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface EmailJSError {
  status?: number
  text?: string
  message?: string
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  try {
    console.log('EmailJS Config:', {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.slice(0, 5) + '...' // Only log first 5 chars for security
    })

    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: 'Beringia Marine Team', // This will be used in the email template
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

    console.log('EmailJS Response:', response)
  } catch (error) {
    const emailError = error as EmailJSError
    console.error('EmailJS Error Details:', {
      error,
      status: emailError.status,
      text: emailError.text,
      message: emailError.message
    })
    throw new Error('Failed to send message. Please try again later.')
  }
} 