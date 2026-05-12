import { useState } from 'react';
import type { ContentLocale, Language } from '../types';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

interface ContactSectionProps {
  t: ContentLocale;
  language: Language;
}

export function ContactSection({ t, language }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showForm, setShowForm] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t.contact.form.required;
    if (!formData.email.trim()) newErrors.email = t.contact.form.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = t.contact.form.invalidEmail;
    if (!formData.message.trim()) newErrors.message = t.contact.form.required;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    try {
      const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`,
        }),
      });
      if (response.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => null);
        console.error('Formspree error:', response.status, errorData);
        setStatus('error');
      }
    } catch (err) {
      console.error('Formspree submission failed:', err);
      setStatus('error');
    }
  };

  const contact = t.contact;

  return (
    <div className="bg-base-100 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
            {t.nav.contact}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-base-content/60 lg:text-lg">
            {contact.subtitle}
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          {/* Action Buttons */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {/* LinkedIn */}
            <a
              href={contact.channels.find((c) => c.icon === 'linkedin')?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg w-full gap-3 rounded-xl bg-primary text-primary-content shadow-md hover:shadow-lg transition-all duration-300 sm:w-auto"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href={contact.channels.find((c) => c.icon === 'github')?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg w-full gap-3 rounded-xl bg-neutral text-neutral-content shadow-md hover:shadow-lg transition-all duration-300 sm:w-auto"
            >
              <FaGithub size={20} />
              GitHub
            </a>

            {/* Send Message Toggle */}
            <button
              onClick={() => setShowForm(!showForm)}
              className={`btn btn-lg w-full gap-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 sm:w-auto ${
                showForm
                  ? 'btn-outline btn-primary'
                  : 'btn-primary'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {showForm
                ? (language === 'en' ? 'Close Form' : 'Cerrar Formulario')
                : (language === 'en' ? 'Send Message' : 'Enviar Mensaje')}
            </button>
          </div>

          {/* Expandable Contact Form */}
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              showForm ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body p-6 md:p-8 lg:p-10">
                  {/* Form Header */}
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-content shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold lg:text-2xl">
                        {language === 'en' ? 'Send a Message' : 'Enviar Mensaje'}
                      </h3>
                      <p className="text-sm text-base-content/60">
                        {language === 'en' ? 'I\'ll respond within 24 hours' : 'Responderé en 24 horas'}
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-semibold">{contact.form.name}</span>
                        </label>
                        <input
                          type="text"
                          className={`input input-bordered w-full rounded-lg ${errors.name ? 'input-error' : ''}`}
                          placeholder={contact.form.namePlaceholder}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        {errors.name && (
                          <label className="label">
                            <span className="label-text-alt text-error">{errors.name}</span>
                          </label>
                        )}
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-semibold">{contact.form.email}</span>
                        </label>
                        <input
                          type="email"
                          className={`input input-bordered w-full rounded-lg ${errors.email ? 'input-error' : ''}`}
                          placeholder={contact.form.emailPlaceholder}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        {errors.email && (
                          <label className="label">
                            <span className="label-text-alt text-error">{errors.email}</span>
                          </label>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">{contact.form.message}</span>
                      </label>
                      <textarea
                        className={`textarea textarea-bordered h-40 w-full rounded-lg resize-none ${errors.message ? 'textarea-error' : ''}`}
                        placeholder={contact.form.messagePlaceholder}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                      {errors.message && (
                        <label className="label">
                          <span className="label-text-alt text-error">{errors.message}</span>
                        </label>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? (
                        <>
                          <span className="loading loading-spinner loading-sm" />
                          {contact.form.sending}
                        </>
                      ) : status === 'sent' ? (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {contact.form.sent}
                        </>
                      ) : (
                        contact.form.submit
                      )}
                    </button>

                    {/* Status Messages */}
                    {status === 'sent' && (
                      <button
                        type="button"
                        className="btn btn-ghost btn-md w-full rounded-lg"
                        onClick={() => {
                          setStatus('idle');
                          setErrors({});
                        }}
                      >
                        {contact.form.cancel}
                      </button>
                    )}

                    {status === 'error' && (
                      <div role="alert" className="alert alert-error rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-6 8h.01M9 12h.01M15 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium">{contact.form.error}</span>
                      </div>
                    )}
                    {status === 'sent' && (
                      <div role="alert" className="alert alert-success rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium">{contact.form.sent}</span>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
