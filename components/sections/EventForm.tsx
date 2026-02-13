'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle } from 'lucide-react';
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormData>();

  const onSubmit = (data: EventFormData) => {
    console.log('Event form submitted:', data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <AnimatedSection className="text-center py-12">
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="font-[family-name:var(--font-heading)] text-2xl text-primary mb-2">
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="text-primary/60">
          Wir melden uns schnellstmöglich bei Ihnen zurück.
        </p>
      </AnimatedSection>
    );
  }

  const inputStyles =
    'w-full px-4 py-3 bg-background border border-primary/20 rounded-sm font-[family-name:var(--font-body)] text-primary placeholder:text-primary/30 focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight transition-colors';
  const errorStyles = 'text-red-500 text-xs mt-1 font-[family-name:var(--font-accent)]';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            {...register('phone')}
            type="tel"
            placeholder="Telefon"
            className={inputStyles}
          />
        </div>
        <div>
          <select
            {...register('eventType', { required: 'Bitte wählen Sie eine Eventart' })}
            className={inputStyles}
            defaultValue=""
          >
            <option value="" disabled>
              Art des Events *
            </option>
            <option value="hochzeit">Hochzeit</option>
            <option value="firmenevent">Firmenevent</option>
            <option value="privatfeier">Privatfeier</option>
            <option value="sonstiges">Sonstiges</option>
          </select>
          {errors.eventType && <p className={errorStyles}>{errors.eventType.message}</p>}
        </div>
        <div>
          <input
            {...register('date')}
            type="date"
            placeholder="Gewünschtes Datum"
            className={inputStyles}
          />
        </div>
        <div>
          <input
            {...register('guests')}
            type="number"
            placeholder="Anzahl Personen"
            min="1"
            className={inputStyles}
          />
        </div>
      </div>
      <div>
        <textarea
          {...register('message')}
          placeholder="Ihre Nachricht"
          rows={5}
          className={`${inputStyles} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 px-8 py-3.5 bg-highlight text-primary font-[family-name:var(--font-accent)] text-sm tracking-wider uppercase rounded-sm hover:bg-accent hover:shadow-lg transition-all duration-300"
      >
        <Send size={16} />
        Unverbindlich anfragen
      </button>
    </form>
  );
}
