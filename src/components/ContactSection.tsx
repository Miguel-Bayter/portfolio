import { useState } from 'react';
import type { ContentLocale } from '../types';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons';

type IconKey = 'github' | 'linkedin' | 'mail';
const CHANNEL_ICONS: Record<IconKey, React.ComponentType<{ className?: string }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon,
};

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  message: string;
  company: string;
}

interface ContactSectionProps {
  t: ContentLocale;
  isVisible: boolean;
}

export default function ContactSection({ t, isVisible }: ContactSectionProps) {
  const [showForm, setShowForm] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [feedback, setFeedback] = useState('');
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '', company: '' });

  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isSending = formStatus === 'loading';
  const formSubject = 'Portfolio Contact';
  const channelCardBaseClass = 'contact-channel-card flex flex-col items-start gap-3 rounded-sm border px-4 py-5 text-left transition-all duration-150';

  if (!isVisible) return null;

  function resetFormState() {
    setFormStatus('idle');
    setFeedback('');
  }

  function updateField(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formStatus !== 'idle') resetFormState();
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      _subject: formSubject,
      _gotcha: formData.company.trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setFormStatus('error');
      setFeedback(t.contact.form.required);
      return;
    }

    if (!emailPattern.test(payload.email)) {
      setFormStatus('error');
      setFeedback(t.contact.form.invalidEmail);
      return;
    }

    if (!formEndpoint) {
      setFormStatus('error');
      setFeedback(t.contact.form.error);
      return;
    }

    setFormStatus('loading');
    setFeedback('');

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Contact request failed');
      }

      setFormStatus('success');
      setFeedback(t.contact.form.sent);
      setFormData({ name: '', email: '', message: '', company: '' });
      setShowForm(false);
    } catch {
      setFormStatus('error');
      setFeedback(t.contact.form.error);
    }
  }

  const inputClass =
    'w-full bg-surface-3 border border-line/20 rounded-xs px-4 py-2.5 text-ink text-[0.88rem] font-sans placeholder:text-ink-4 focus:outline-none focus:border-signal-cyan/50 transition-colors duration-150';
  const labelClass = 'block mb-1.5 text-ink-3 text-[0.72rem] font-mono tracking-[0.08em] uppercase';

  return (
    <section className="border border-line/20 rounded-md p-5 md:p-6 animate-panel-in bg-surface-2/75 section-rhythm-light">
      <header className="pb-5 mb-5 border-b border-line/10">
        <h2 className="section-title-emphasis m-0 text-[1.15rem] font-semibold tracking-[-0.01em] text-ink">{t.contact.title}</h2>
        <p className="mt-2 mb-0 text-ink-2 text-[0.88rem] leading-[1.55]">{t.contact.subtitle}</p>
      </header>

      <article className="contact-highlight-card border border-signal-mint/30 rounded-sm bg-signal-mint/10 p-4 md:p-5">
        <p className="m-0 text-signal-mint text-[0.7rem] font-mono tracking-[0.08em] uppercase">{t.contact.hiringKicker}</p>
        <h3 className="mt-2 mb-0 text-ink text-[1.05rem] font-semibold tracking-[-0.01em]">{t.contact.hiringTitle}</h3>
        <p className="mt-2 mb-0 text-ink-2 text-[0.86rem] leading-[1.55]">{t.contact.hiringSubtitle}</p>
      </article>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        {t.contact.channels.map((channel) => {
          const Icon = CHANNEL_ICONS[channel.icon as IconKey];

          if (channel.type === 'form') {
            return (
              <button
                key={channel.label}
                type="button"
                onClick={() => {
                  setShowForm((prev) => !prev);
                  resetFormState();
                }}
                className={`${channelCardBaseClass} w-full cursor-pointer ${
                  showForm
                    ? 'border-signal-mint/50 bg-signal-mint/10 text-ink'
                    : 'border-line/20 bg-surface-4 text-ink hover:border-signal-mint hover:bg-surface-5 hover:-translate-y-0.5'
                }`}
              >
                <Icon className="w-5 h-5 text-signal-mint" />
                <span className="text-[0.92rem] font-medium leading-[1.3]">{channel.label}</span>
              </button>
            );
          }

          return (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.external ? '_blank' : undefined}
              rel={channel.external ? 'noreferrer' : undefined}
              className={`${channelCardBaseClass} border-line/20 bg-surface-4 text-ink no-underline hover:border-signal-mint hover:bg-surface-5 hover:-translate-y-0.5`}
            >
              <Icon className="w-5 h-5 text-signal-mint" />
              <span className="text-[0.92rem] font-medium leading-[1.3]">{channel.label}</span>
            </a>
          );
        })}
      </div>

      {showForm && formStatus !== 'success' && (
        <form onSubmit={handleSubmit} className="mt-5 pt-5 border-t border-line/10 animate-panel-in grid gap-4" noValidate>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={(event) => updateField('company', event.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className={labelClass}>{t.contact.form.name}</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(event) => updateField('name', event.target.value)}
                placeholder={t.contact.form.namePlaceholder}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className={labelClass}>{t.contact.form.email}</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(event) => updateField('email', event.target.value)}
                placeholder={t.contact.form.emailPlaceholder}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className={labelClass}>{t.contact.form.message}</label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={(event) => updateField('message', event.target.value)}
              placeholder={t.contact.form.messagePlaceholder}
              className={`${inputClass} resize-none`}
            />
          </div>

          {formStatus === 'error' && feedback && (
            <p className="m-0 text-signal-coral text-[0.82rem] leading-[1.5]">{feedback}</p>
          )}

          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                resetFormState();
              }}
              className="border border-line/20 bg-transparent text-ink-2 font-mono text-[0.78rem] tracking-[0.06em] uppercase px-5 py-2 rounded-xs cursor-pointer hover:border-line/40 hover:text-ink transition-all duration-150"
            >
              {t.contact.form.cancel}
            </button>
            <button
              type="submit"
              disabled={isSending}
              className="border border-signal-mint/50 bg-signal-mint/10 text-signal-mint font-mono text-[0.78rem] tracking-[0.06em] uppercase px-5 py-2 rounded-xs cursor-pointer hover:bg-signal-mint/20 transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSending ? t.contact.form.sending : t.contact.form.submit}
            </button>
          </div>
        </form>
      )}

      {formStatus === 'success' && (
        <div className="mt-5 pt-5 border-t border-line/10 animate-panel-in flex items-center gap-3">
          <span className="text-signal-mint text-[1.1rem] font-mono">+</span>
          <p className="m-0 text-ink-2 text-[0.88rem] leading-[1.5]">{feedback || t.contact.form.sent}</p>
        </div>
      )}
    </section>
  );
}
