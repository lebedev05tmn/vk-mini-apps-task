import { IStory } from "shared/interfaces";
import { ActionType } from "./action";
import { NEWS_COUNT } from "shared/config";

interface IState {
  newstoriesList: number[];
  isLoadedNewstoriesList: boolean;
  newsList: IStory[];
  isLoadedNewsList: boolean;
  isLoadedNewsItem: boolean;
}

export const initialState: IState = {
  newstoriesList: [],
  isLoadedNewstoriesList: false,
  newsList: [],
  isLoadedNewsList: false,
  isLoadedNewsItem: false,
};

export interface INewsListAction {
  type: string;
  payload: IStory[];
}

export interface INewstoriesList {
  type: string;
  payload: number[];
}

const newsListReducer = (
  state = initialState,
  action: INewsListAction | INewstoriesList
) => {
  switch (action.type) {
    case ActionType.FILL_NEWSTORIES_ID:
      return {
        ...state,
        newstoriesList: [
          ...new Set([...state.newstoriesList, ...action.payload]),
        ].slice(0, NEWS_COUNT),
        isLoadedNewstoriesList: true,
      };
    case ActionType.FILL_NEWS_LIST:
      return {
        ...state,
        newsList: [...action.payload, state.newsList].slice(0, NEWS_COUNT),
        isLoadedNewsList: true,
      };
    default:
      return state;
  }
};

export { newsListReducer };
