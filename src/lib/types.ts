export type Route = {
  slug: string;
  path: string;
};

export type Achievement = {
  slug: string;
  image: string;
};

export type Event = {
  title: string;
  date: {
    day: string;
    month: string;
  };
  location: string;
  time: string;
};

export type Member = {
  slug: string;
  name: string;
  title?: string;
  image: string;
  bio?: string;
  socials?: Social[];
};

export type Social = {
  name: string;
  url: string;
};

export type Benefit = {
  slug: string;
  subtitle?: string;
  title?: string;
  description?: string;
  image: string;
};

export type Program = {
  slug: string;
  title?: string;
  description?: string;
  images: {
    alt: string;
    desktop: string;
    mobile?: string;
  };
};

export type FormFields = {
  name: string;
  email: string;
  phone: string;
  message: string;
  recaptcha_token: string;
};
