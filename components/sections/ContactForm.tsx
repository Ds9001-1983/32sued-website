'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, RotateCcw } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    console.log('Contact form submitted:', data);
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="font-[family-name:var(--font-heading)] text-2xl text-cream mb-2">Nachricht gesendet!</h3>
        <p className="text-gray mb-6">Vielen Dank für Ihre Nachricht. Wir melden uns schnellstmöglich bei Ihnen.</p>
        <button
          onClick={() => { setIsSubmitted(false); reset(); }}
          className="btn-gold-outline inline-flex items-center gap-2 text-sm"
        >
          <RotateCcw size={14} />
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  const inputStyles = 'w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-cream placeholder:text-gray-dark focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-colors';
  const labelStyles = 'block text-sm text-gray mb-1.5';
  const errorStyles = 'text-red text-xs mt-1';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className={labelStyles}>Name *</label>
        <input id="contact-name" {...register('name', { required: 'Bitte geben Sie Ihren Namen ein' })} placeholder="Ihr vollständiger Name" className={inputStyles} />
        {errors.name && <p className={errorStyles}>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="contact-email" className={labelStyles}>E-Mail *</label>
        <input id="contact-email" {...register('email', { required: 'Bitte geben Sie Ihre E-Mail ein', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Bitte geben Sie eine gültige E-Mail ein' } })} type="email" placeholder="ihre@email.de" className={inputStyles} />
        {errors.email && <p className={errorStyles}>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="contact-subject" className={labelStyles}>Betreff *</label>
        <input id="contact-subject" {...register('subject', { required: 'Bitte geben Sie einen Betreff ein' })} placeholder="Worum geht es?" className={inputStyles} />
        {errors.subject && <p className={errorStyles}>{errors.subject.message}</p>}
      </div>
      <div>
        <label htmlFor="contact-message" className={labelStyles}>Nachricht *</label>
        <textarea id="contact-message" {...register('message', { required: 'Bitte geben Sie eine Nachricht ein' })} placeholder="Ihre Nachricht an uns..." rows={5} className={`${inputStyles} resize-none`} />
        {errors.message && <p className={errorStyles}>{errors.message.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting} className="btn-gold inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
            Wird gesendet...
          </>
        ) : (
          <>
            <Send size={16} />
            Nachricht senden
          </>
        )}
      </button>
    </form>
  );
}
