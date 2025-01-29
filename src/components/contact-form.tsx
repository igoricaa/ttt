'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import ArrowIcon from './ui/icons/arrow';
import { useTranslations } from 'next-intl';
import { sendEmail } from '@/lib/actions';
import { FormFields } from '@/lib/types';
import Script from 'next/script';

declare const grecaptcha: any;
const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const ContactForm = () => {
  const t = useTranslations('contactUs.contactForm');
  const [captchaToken, setCaptchaToken] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>();

  const processForm = async (formData: FormFields) => {
    const result = await sendEmail(formData);

    if (result.success) {
      setIsSuccess(true);
      reset();
      setMessage(t('success'));
    } else {
      setIsSuccess(false);
      setMessage(t('error'));
    }
  };

  const inputClasses =
    'w-full bg-transparent border rounded-[32px] h-14 flex items-center px-6 outline-none text-sm uppercase font-medium text-cf-text placeholder:text-cf-text';

  return (
    <>
      <form onSubmit={handleSubmit(processForm)}>
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

        <input
          type='hidden'
          id='recaptchaResponse'
          name='recaptchaResponse'
          value={captchaToken}
        />

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
      <Script
        id='recaptcha-load'
        strategy='lazyOnload'
        src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
        onLoad={() => {
          grecaptcha.ready(function () {
            grecaptcha
              .execute(recaptchaSiteKey, {
                action: 'contact',
              })
              .then(function (token: string) {
                setCaptchaToken(token);
              });
          });
        }}
      />
    </>
  );
};

export default ContactForm;
