'use server';

import { FormFields } from '@/lib/types';

function validateForm(data: FormFields) {
  const errors: Partial<Record<keyof FormFields, string>> = {};

  if (!data.name || data.name.length < 2 || data.name.length > 50) {
    errors.name = 'Name must be between 2 and 50 characters';
  }

  if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = 'Invalid email address';
  }

  if (!data.message || data.message.length < 10 || data.message.length > 1000) {
    errors.message = 'Message must be between 10 and 1000 characters';
  }

  return errors;
}

const verifyRecaptcha = async (token: string) => {
  const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;

  const recaptchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${token}`,
    { method: 'POST' }
  );

  const recaptchaData = await recaptchaResponse.json();

  return recaptchaData.success;
};

export async function sendEmailResend(formData: FormFields): Promise<{
  success: boolean;
  errors: Partial<Record<keyof FormFields, string>> | null;
}> {
  const data: FormFields = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
    recaptcha_token: formData.recaptcha_token,
  };

  const errors = validateForm(data);

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
    };
  }

  const recaptchaSuccess = await verifyRecaptcha(data.recaptcha_token);
  if (!recaptchaSuccess) {
    return {
      success: false,
      errors: { recaptcha_token: 'Invalid reCAPTCHA' },
    };
  }

  try {
    const response = await fetch(`${process.env.SITE_URL}/api/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();

    if (!result.success) {
      return {
        success: false,
        errors: result.error,
      };
    }

    return {
      success: result.success,
      errors: result.error || null,
    };
  } catch (error: any) {
    return {
      success: false,
      errors: error,
    };
  }
}

export async function sendEmailNodemailer(formData: FormFields): Promise<{
  success: boolean;
  errors: Partial<Record<keyof FormFields, string>> | null;
}> {
  const data: FormFields = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
    recaptcha_token: formData.recaptcha_token,
  };

  const errors = validateForm(data);

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
    };
  }

  const recaptchaSuccess = await verifyRecaptcha(data.recaptcha_token);
  if (!recaptchaSuccess) {
    return {
      success: false,
      errors: { recaptcha_token: 'Invalid reCAPTCHA' },
    };
  }

  try {
    const response = await fetch(`${process.env.SITE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();

    if (!result.success) {
      return {
        success: false,
        errors: result,
      };
    }

    return {
      success: result.success,
      errors: null,
    };
  } catch (error: any) {
    return {
      success: false,
      errors: error,
    };
  }
}
