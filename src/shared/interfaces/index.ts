export interface ILayout {
  isMain?: boolean;
}

export interface IStory {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export interface INewsCard {
  title: string;
  score: number;
  by: string;
  time: string;
}
