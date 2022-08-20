import { Story } from "./Story";

export type StoryResponse = {
  status: string;
  num_results: number;
  section: string;
  results: Story[];
};
