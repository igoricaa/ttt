import { OAuth2Client } from 'google-auth-library';
import nodemailer from 'nodemailer';
import { rateLimit } from '@/lib/rate-limit';

const EMAIL_CLIENT_ID = process.env.EMAIL_CLIENT_ID;
const EMAIL_CLIENT_SECRET = process.env.EMAIL_CLIENT_SECRET;
const EMAIL_REDIRECT_URI = process.env.EMAIL_REDIRECT_URI;
const EMAIL_REFRESH_TOKEN = process.env.EMAIL_REFRESH_TOKEN;
const MY_EMAIL = 'admin@thundertopteam.com';

const oAuth2Client = new OAuth2Client(
  EMAIL_CLIENT_ID,
  EMAIL_CLIENT_SECRET,
  EMAIL_REDIRECT_URI
);

oAuth2Client.setCredentials({
  refresh_token: EMAIL_REFRESH_TOKEN,
});

async function getAccessToken() {
  try {
    const accessTokenResponse = await oAuth2Client.getAccessToken();
    return accessTokenResponse.token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error;
  }
}

async function sendEmail(
  name: string,
  email: string,
  phone: string,
  message: string
) {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    throw new Error('Failed to get access token');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: MY_EMAIL,
      clientId: EMAIL_CLIENT_ID,
      clientSecret: EMAIL_CLIENT_SECRET,
      refreshToken: EMAIL_REFRESH_TOKEN,
      accessToken: accessToken,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });

  const mailOptions = {
    from: 'kontakt@thundertopteam.com',
    to: MY_EMAIL,
    subject: 'Kontakt sa thundertopteam.com',
    text: `
      Ime: ${name}
      Email: ${email}
      Telefon: ${phone}
      Poruka: ${message}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500,
});

export async function POST(req: any): Promise<Response> {
  try {
    limiter.check(req, 3);

    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message || !email.includes('@')) {
      return Response.json({ error: 'Invalid form data' }, { status: 400 });
    }

    const result = await sendEmail(name, email, phone, message);

    if (!result || !result.response.includes('2.0.0 OK')) {
      return Response.json({
        success: false,
        result: result || 'Unknown error',
      });
    }

    return Response.json({ success: true, result });
  } catch (error: any) {
    if (error.statusCode && error.statusCode === 429) {
      return Response.json({ error: 'Too many requests' }, { status: 429 });
    }
    return Response.json({ error });
  }
}
