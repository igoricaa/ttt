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
