import { ActionType } from "./action";
import { IStory } from "shared/interfaces";

interface IState {
  newsItem: IStory;
  isLoadedNews: boolean;
}

export const initialState: IState = {
  newsItem: JSON.parse(localStorage.getItem("newsItem") || "{}"),
  isLoadedNews: false,
};

const newsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionType.FILL_NEWS_ITEM:
      return {
        ...state,
        newsItem: action.payload,
        isLoadedNews: true,
      };
    case ActionType.RESET_STATUS:
      return {
        ...state,
        isLoadedNews: false,
      };
    default:
      return state;
  }
};

export { newsReducer };
