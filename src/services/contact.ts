import emailjs from '@emailjs/browser'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  try {
    await emailjs.send(
      'service_2yot2yu',
      'template_j22snye',
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: 'Beringia Marine Team', // This will be used in the email template
      },
      // You'll need to add your public key here
      process.env.VITE_EMAILJS_PUBLIC_KEY
    )
  } catch (error) {
    console.error('Failed to send email:', error)
    throw new Error('Failed to send message. Please try again later.')
  }
} 