export type Route = {
  label: string;
  path: string;
};

export type Achievement = {
  title: string;
  description: string;
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

export type Highlight = {
  title: {
    ptOne: string;
    ptTwo: string;
  };
  description: string;
};

export type Member = {
  name: string;
  title: string;
  image: string;
  bio: string;
  socials: Social[];
};

export type Social = {
  name: string;
  url: string;
};

export type Membership = {
  title: string;
  description: string[];
  image: string;
};

export type Benefit = {
  subtitle: string;
  title: string;
  description: string;
  image: string;
};
