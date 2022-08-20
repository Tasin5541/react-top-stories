export type StoryMultimedia = {
  url: string;
  height: number;
  width: number;
  type: string;
};

export type Story = {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  byline: string;
  updated_date: string;
  multimedia: StoryMultimedia[];
};
