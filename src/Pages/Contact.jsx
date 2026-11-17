import React, { useState } from 'react'
import Container from '../components/Container'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Sparkles,
  MessageSquare,
  Clock,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

/**
 * Reusable Contact Information Card Component
 */
const ContactInfoCard = ({
  icon: Icon,
  title,
  value,
  subValue,
  link,
  copyValue,
  bgColor,
  isCopied,
  onCopy,
}) => {
  const isExternal = link && link.startsWith('http')

  return (
    <div className="group relative flex items-start gap-4 rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md sm:p-5">
      {/* Icon Badge */}
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${bgColor} shadow-sm transition-transform duration-300 group-hover:scale-105`}
      >
        <Icon className="h-6 w-6" />
      </div>

      {/* Details */}
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
          {title}
        </p>

        <div className="mt-1">
          {link ? (
            <a
              href={link}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-1.5 break-words text-base font-semibold text-slate-800 transition-colors hover:text-blue-600"
            >
              <span>{value}</span>
              {isExternal && <ExternalLink className="h-3.5 w-3.5 text-slate-400" />}
            </a>
          ) : (
            <span className="break-words text-base font-semibold text-slate-800">
              {value}
            </span>
          )}
        </div>

        {subValue && (
          <p className="mt-0.5 text-xs text-slate-500">{subValue}</p>
        )}
      </div>

      {/* Copy Button */}
      {copyValue && (
        <button
          type="button"
          onClick={() => onCopy(copyValue)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
          title={`Copy ${title}`}
          aria-label={`Copy ${title}`}
        >
          {isCopied ? (
            <Check className="h-4 w-4 text-emerald-600" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      )}
    </div>
  )
}

/**
 * Reusable Social Link Button Component
 */
const SocialLinkButton = ({ name, icon: Icon, url, hoverStyles }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${hoverStyles}`}
  >
    <Icon className="text-lg" />
    <span>{name}</span>
  </a>
)

/**
 * Main Contact Page Component
 */
const Contact = () => {
  // Form Input States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  // Feedback & UI States
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copiedItem, setCopiedItem] = useState('')

  // Contact Information Data
  const contactList = [
    {
      id: 'email',
      icon: Mail,
      title: 'Email Address',
      value: 'mdsohelrana.dev7@gmail.com',
      link: 'mailto:hello@example.com',
      copyValue: 'hello@example.com',
      bgColor: 'bg-blue-50 text-blue-600',
    },
    {
      id: 'phone',
      icon: Phone,
      title: 'Phone Number',
      value: '+8801309497761',
      subValue: 'Available for 24 hour ',
      link: 'tel:+8801XXXXXXXXX',
      copyValue: '+880 1XXXXXXXXX',
      bgColor: 'bg-emerald-50 text-emerald-600',
    },
    {
      id: 'location',
      icon: MapPin,
      title: 'Location',
      value: 'Dhaka, Bangladesh',
      subValue: 'Available for Remote Worldwide',
      link: 'https://maps.google.com/?q=Dhaka,Bangladesh',
      bgColor: 'bg-purple-50 text-purple-600',
    },
  ]

  // Social Links Data
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/mdsohelranadev7',
      hoverStyles: 'hover:bg-slate-900 hover:text-white hover:border-slate-900',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com',
      hoverStyles: 'hover:bg-blue-600 hover:text-white hover:border-blue-600',
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://facebook.com',
      hoverStyles: 'hover:bg-blue-700 hover:text-white hover:border-blue-700',
    },
  ]

  // Handle Copy to Clipboard
  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopiedItem(id)
    setTimeout(() => {
      setCopiedItem('')
    }, 2000)
  }

  // Handle Form Input Change with Error Removal
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Automatically remove error when the user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  // Form Validation Logic
  const validateForm = () => {
    const newErrors = {}
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    // Validate Full Name
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.'
    }

    // Validate Email Address
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address (e.g. name@domain.com).'
    }

    // Validate Subject
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.'
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.'
    }

    // Validate Message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please write at least 10 characters for your message.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
      setErrors({})
    }, 1200)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-blue-50/40 py-16 sm:py-24">
      {/* Background Decorative Blur Gradients */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-125 w-125 rounded-full bg-sky-100/30 blur-3xl" />

      <Container className="relative px-4 sm:px-6 lg:px-8">

        {/* ================= 1. HERO SECTION ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/90 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-700 uppercase shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Get In Touch</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Let's{' '}
            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Work Together
            </span>
          </h1>

          <p className="mt-4 text-base text-slate-600 sm:text-lg lg:text-xl">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </div>

        {/* ================= MAIN TWO-COLUMN LAYOUT ================= */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-10">

          {/* ================= 2. CONTACT INFORMATION SECTION ================= */}
          <div className="space-y-6 lg:col-span-5">
            {/* Section Heading */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Contact Information
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Feel free to reach out directly through any of the channels below, or submit the contact form. I look forward to collaborating with you!
              </p>
            </div>

            {/* Information Cards */}
            <div className="space-y-4">
              {contactList.map((item) => (
                <ContactInfoCard
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  value={item.value}
                  subValue={item.subValue}
                  link={item.link}
                  copyValue={item.copyValue}
                  bgColor={item.bgColor}
                  isCopied={copiedItem === item.id}
                  onCopy={(text) => handleCopy(text, item.id)}
                />
              ))}
            </div>

            {/* Work Availability Badge Card */}
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-indigo-50/50 p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  Open for Freelance Projects & Full-time Roles
                </span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-600">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>Quick turnaround — typical reply within 24 hours</span>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-sm backdrop-blur-sm">
              <h3 className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Find Me On Social Media
              </h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <SocialLinkButton
                    key={social.name}
                    name={social.name}
                    icon={social.icon}
                    url={social.url}
                    hoverStyles={social.hoverStyles}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ================= 3. CONTACT FORM SECTION ================= */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8 lg:p-10">

              {/* Form Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>Send a Message</span>
                </div>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                  Got an Idea? Send Me a Note
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  I'd love to hear about your ideas, questions, or project proposals.
                </p>
              </div>

              {/* SUCCESS MESSAGE ALERT */}
              {isSubmitted && (
                <div className="mb-8 rounded-2xl border border-emerald-200 bg-emerald-50/90 p-6 text-emerald-900 shadow-sm transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-emerald-900">
                        Message Sent Successfully!
                      </h4>
                      <p className="mt-1 text-sm text-emerald-700">
                        Thank you for reaching out! Your message has been sent successfully. I will review it and reply as soon as possible.
                      </p>
                      <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 underline underline-offset-4 hover:text-emerald-950"
                      >
                        <span>Send another message</span>
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* FORM FIELDS */}
              <form onSubmit={handleSubmit} noValidate className="space-y-6">

                {/* Full Name & Email Fields Row */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                  {/* Full Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        disabled={isSubmitting}
                        className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-all duration-200 outline-none ${errors.name
                            ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10'
                            : 'border-slate-200 bg-slate-50/50 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10'
                          }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-500">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        disabled={isSubmitting}
                        className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-all duration-200 outline-none ${errors.email
                            ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10'
                            : 'border-slate-200 bg-slate-50/50 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10'
                          }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-500">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Inquiry / Hiring / Collaboration"
                      disabled={isSubmitting}
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-all duration-200 outline-none ${errors.subject
                          ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10'
                          : 'border-slate-200 bg-slate-50/50 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10'
                        }`}
                    />
                  </div>
                  {errors.subject && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-500">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message (Textarea) Field */}
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <span className="text-xs text-slate-400">
                      {formData.message.length} characters
                    </span>
                  </div>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hi Sohel, I'm reaching out regarding..."
                      disabled={isSubmitting}
                      className={`w-full resize-y rounded-xl border px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-all duration-200 outline-none ${errors.message
                          ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10'
                          : 'border-slate-200 bg-slate-50/50 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10'
                        }`}
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-500">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Send Message Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-600 hover:shadow-xl hover:shadow-blue-500/35 focus:ring-4 focus:ring-blue-500/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-48"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Contact
