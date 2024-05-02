import { IStory, INewsListAction, INewstoriesList } from "shared/interfaces";
import { ActionType } from "./action";
import { NEWS_COUNT } from "shared/config";

export interface IState {
  newstoriesList: number[];
  newsList: IStory[];
  isLoadedNewsList: boolean;
}

export const initialState: IState = {
  newstoriesList: [],
  newsList: JSON.parse(localStorage.getItem("newsList") || "[]"),
  isLoadedNewsList: false,
};

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
        isLoadedNewsList: false,
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
