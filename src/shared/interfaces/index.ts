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
  index: number;
  onClick: () => void;
}

export interface INewsListAction {
  type: string;
  payload: IStory[];
}

export interface INewstoriesList {
  type: string;
  payload: number[];
}

export interface INewsDetails {
  by: string;
  time: string;
  title: string;
  url: string;
  descendants: number;
}

export interface IComment {
  id: number;
  text: string;
  kids?: number[];
  deleted?: boolean;
  by: string;
  time: number;
}
