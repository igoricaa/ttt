'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import ArrowIcon from './ui/icons/arrow';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('contactUs.contactForm');

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
          setMessage(t('success'));
        } else {
          setIsSuccess(false);
          setMessage(t('error'));
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage(t('error'));
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
          placeholder={t('name')}
          {...register('name', {
            required: { value: true, message: t('required') },
            maxLength: { value: 50, message: t('maxLength50') },
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
          placeholder={t('email')}
          {...register('email', {
            required: { value: true, message: t('required') },
            pattern: {
              value: /^\S+@\S+$/i,
              message: t('invalidEmail'),
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
          placeholder={t('phone')}
          {...register('phone', {
            required: { value: true, message: t('required') },
            validate: {
              pattern: (value) =>
                /^[+\d\s\-()]+$/.test(value) || t('invalidPhone'),
              minLength: (value) => value.length >= 6 || t('minLength'),
              maxLength: (value) => value.length <= 20 || t('maxLength20'),
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
          placeholder={t('message')}
          rows={8}
          {...register('message', {
            required: { value: true, message: t('required') },
            minLength: { value: 10, message: t('minLength') },
            maxLength: { value: 1000, message: t('maxLength1000') },
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
        <span>{t('submit')}</span>
      </button>
    </form>
  );
};

export default ContactForm;
