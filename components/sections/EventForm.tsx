'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, RotateCcw } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

interface EventFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  guests: string;
  message: string;
}

export default function EventForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<EventFormData>();

  const onSubmit = async (data: EventFormData) => {
    setIsSubmitting(true);
    console.log('Event form submitted:', data);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const today = new Date().toISOString().split('T')[0];

  if (isSubmitted) {
    return (
      <AnimatedSection className="text-center py-12">
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="font-[family-name:var(--font-heading)] text-2xl text-cream mb-2">Vielen Dank für Ihre Anfrage!</h3>
        <p className="text-gray mb-6">Wir melden uns schnellstmöglich bei Ihnen zurück.</p>
        <button
          onClick={() => { setIsSubmitted(false); reset(); }}
          className="btn-gold-outline inline-flex items-center gap-2 text-sm"
        >
          <RotateCcw size={14} />
          Weitere Anfrage senden
        </button>
      </AnimatedSection>
    );
  }

  const inputStyles = 'w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-cream placeholder:text-gray-dark focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-colors';
  const labelStyles = 'block text-sm text-gray mb-1.5';
  const errorStyles = 'text-red text-xs mt-1';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="event-name" className={labelStyles}>Name *</label>
          <input id="event-name" {...register('name', { required: 'Bitte geben Sie Ihren Namen ein' })} placeholder="Ihr vollständiger Name" className={inputStyles} />
          {errors.name && <p className={errorStyles}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="event-email" className={labelStyles}>E-Mail *</label>
          <input id="event-email" {...register('email', { required: 'Bitte geben Sie Ihre E-Mail ein', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Bitte geben Sie eine gültige E-Mail ein' } })} type="email" placeholder="ihre@email.de" className={inputStyles} />
          {errors.email && <p className={errorStyles}>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="event-phone" className={labelStyles}>Telefon</label>
          <input id="event-phone" {...register('phone')} type="tel" placeholder="Für Rückfragen" className={inputStyles} />
        </div>
        <div>
          <label htmlFor="event-type" className={labelStyles}>Art des Events *</label>
          <select id="event-type" {...register('eventType', { required: 'Bitte wählen Sie eine Eventart' })} className={inputStyles} defaultValue="">
            <option value="" disabled>Bitte wählen</option>
            <option value="hochzeit">Hochzeit</option>
            <option value="firmenevent">Firmenevent</option>
            <option value="privatfeier">Privatfeier</option>
            <option value="sonstiges">Sonstiges</option>
          </select>
          {errors.eventType && <p className={errorStyles}>{errors.eventType.message}</p>}
        </div>
        <div>
          <label htmlFor="event-date" className={labelStyles}>Gewünschtes Datum</label>
          <input id="event-date" {...register('date')} type="date" min={today} className={inputStyles} />
        </div>
        <div>
          <label htmlFor="event-guests" className={labelStyles}>Anzahl Personen</label>
          <input id="event-guests" {...register('guests')} type="number" placeholder="ca. Gästeanzahl" min="1" className={inputStyles} />
        </div>
      </div>
      <div>
        <label htmlFor="event-message" className={labelStyles}>Ihre Nachricht</label>
        <textarea id="event-message" {...register('message')} placeholder="Schildern Sie uns Ihre Wünsche und Vorstellungen..." rows={5} className={`${inputStyles} resize-none`} />
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
            Unverbindlich anfragen
          </>
        )}
      </button>
    </form>
  );
}
