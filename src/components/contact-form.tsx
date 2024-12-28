'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import ArrowIcon from './ui/icons/arrow';

type FormData = {
  access_key: string;
  subject: string;
  from_name: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = async (formData: FormData) => {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData, null, 2),
    })
      .then(async (response) => {
        const result = await response.json();
        if (result.success) {
          setIsSuccess(true);
          reset();
          setMessage('Poruka je uspešno poslata');
        } else {
          setIsSuccess(false);
          setMessage('Došlo je do greške');
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage('Došlo je do greške');
      });
  };

  const inputClasses =
    'w-full bg-transparent border rounded-[32px] h-14 flex items-center px-6 outline-none text-sm uppercase font-medium text-cf-text placeholder:text-cf-text';

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='hidden'
        value='d6e71984-e7f1-466c-875e-041c2f0ac562'
        {...register('access_key')}
      />
      <input
        type='hidden'
        value='Kontakt forma sa thundertopteam.rs'
        {...register('subject')}
      />

      <div className='relative'>
        <input
          id='name'
          className={`${
            errors.name ? 'border-red-500' : 'border-white'
          } ${inputClasses}`}
          type='text'
          placeholder='Ime i prezime'
          {...register('name', {
            required: { value: true, message: 'Obavezno polje' },
            maxLength: { value: 50, message: 'Maksimalno 50 karaktera' },
          })}
          autoComplete='name'
        />
        {errors.name && (
          <p className='text-xs absolute left-2 -bottom-5 text-red-500'>
            {errors.name.message}
          </p>
        )}
      </div>
      <div className='mt-4 sm:mt-6 relative'>
        <input
          id='email'
          className={`${
            errors.email ? 'border-red-500' : 'border-white'
          } ${inputClasses}`}
          type='email'
          placeholder='Email'
          {...register('email', {
            required: { value: true, message: 'Obavezno polje' },
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Email adresa nije validna',
            },
          })}
          autoComplete='email'
        />
        {errors.email && (
          <p className='text-xs absolute left-2 -bottom-5 text-red-500'>
            {errors.email.message}
          </p>
        )}
      </div>
      <div className='mt-4 sm:mt-6 relative'>
        <input
          id='phone'
          className={`${
            errors.phone ? 'border-red-500' : 'border-white'
          } ${inputClasses}`}
          type='tel'
          placeholder='Telefon'
          {...register('phone', {
            required: { value: true, message: 'Obavezno polje' },
            validate: {
              pattern: (value) =>
                /^[+\d\s\-()]+$/.test(value) || 'Broj telefona nije ispravan',
              minLength: (value) =>
                value.length >= 6 || 'Broj telefona je prekratak',
              maxLength: (value) =>
                value.length <= 20 || 'Broj telefona je predugačak',
            },
          })}
          autoComplete='tel'
        />
        {errors.phone && (
          <p className='text-xs absolute left-2 -bottom-5 text-red-500'>
            {errors.phone.message}
          </p>
        )}
      </div>

      <div className='mt-4 sm:mt-6 relative'>
        <textarea
          id='message'
          className={`${
            errors.message ? 'border-red-500' : 'border-white'
          } ${inputClasses} py-6 h-auto !rounded-3xl resize-none`}
          placeholder='Poruka'
          rows={8}
          {...register('message', {
            required: { value: true, message: 'Obavezno polje' },
            minLength: { value: 10, message: 'Minimalno 10 karaktera' },
            maxLength: { value: 1000, message: 'Maksimalno 1000 karaktera' },
          })}
        />
        {errors.message && (
          <p className='text-xs absolute left-2 -bottom-5 text-red-500'>
            {errors.message.message}
          </p>
        )}
        {message && (
          <p className={isSuccess ? 'text-green-500' : 'text-red-500'}>
            {message}
          </p>
        )}
      </div>

      <button
        className={cn(
          buttonVariants({ variant: 'dark' }),
          'mt-4 sm:mt-6 sm:ml-auto w-full sm:w-fit flex opacity-50'
        )}
        type='submit'
      >
        <ArrowIcon color='#fff' />
        <span>Pošaljite poruku</span>
      </button>
    </form>
  );
};

export default ContactForm;
