'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="font-[family-name:var(--font-heading)] text-2xl text-primary mb-2">
          Nachricht gesendet!
        </h3>
        <p className="text-primary/60">
          Vielen Dank für Ihre Nachricht. Wir melden uns schnellstmöglich bei Ihnen.
        </p>
      </div>
    );
  }

  const inputStyles =
    'w-full px-4 py-3 bg-white border border-primary/20 rounded-sm font-[family-name:var(--font-body)] text-primary placeholder:text-primary/30 focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight transition-colors';
  const errorStyles = 'text-red-500 text-xs mt-1 font-[family-name:var(--font-accent)]';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <input
          {...register('name', { required: 'Bitte geben Sie Ihren Namen ein' })}
          placeholder="Name *"
          className={inputStyles}
        />
        {errors.name && <p className={errorStyles}>{errors.name.message}</p>}
      </div>
      <div>
        <input
          {...register('email', {
            required: 'Bitte geben Sie Ihre E-Mail ein',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Bitte geben Sie eine gültige E-Mail ein',
            },
          })}
          type="email"
          placeholder="E-Mail *"
          className={inputStyles}
        />
        {errors.email && <p className={errorStyles}>{errors.email.message}</p>}
      </div>
      <div>
        <input
          {...register('subject', { required: 'Bitte geben Sie einen Betreff ein' })}
          placeholder="Betreff *"
          className={inputStyles}
        />
        {errors.subject && <p className={errorStyles}>{errors.subject.message}</p>}
      </div>
      <div>
        <textarea
          {...register('message', { required: 'Bitte geben Sie eine Nachricht ein' })}
          placeholder="Ihre Nachricht *"
          rows={5}
          className={`${inputStyles} resize-none`}
        />
        {errors.message && <p className={errorStyles}>{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 px-8 py-3.5 bg-highlight text-primary font-[family-name:var(--font-accent)] text-sm tracking-wider uppercase rounded-sm hover:bg-accent hover:shadow-lg transition-all duration-300"
      >
        <Send size={16} />
        Nachricht senden
      </button>
    </form>
  );
}
