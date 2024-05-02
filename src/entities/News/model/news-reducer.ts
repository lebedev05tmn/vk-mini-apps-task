import { ActionType } from "./action";
import { IStory } from "shared/interfaces";
export interface IState {
  newsItem: IStory;
  isLoadedNews: boolean;
}

export const initialState: IState = {
  newsItem: JSON.parse(localStorage.getItem("newsItem") || "{}"),
  isLoadedNews: false,
};

interface IAction {
  type: string;
  payload: IStory;
}

const newsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ActionType.FILL_NEWS_ITEM:
      return {
        ...state,
        newsItem: action.payload,
        isLoadedNews: true,
      };
    case ActionType.FILL_COMMENTS:
      return {
        ...state,
        newsComments: action.payload,
        isLoadedComments: true,
      };
    case ActionType.FILL_SUB_COMMENTS:
      return {
        ...state,
        newsSubComments: action.payload,
        isLoadedSubComments: true,
      };
    case ActionType.RESET_STATUS:
      return {
        ...state,
        isLoadedNews: false,
        isLoadedComments: false,
      };
    default:
      return state;
  }
};

export { newsReducer };
