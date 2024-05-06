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
    default:
      return state;
  }
};

export { newsReducer };
