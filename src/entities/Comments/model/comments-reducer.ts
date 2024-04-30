import { ActionType } from "./action";
import { IStory } from "shared/interfaces";

interface IState {
  newsComments: IStory;
  isLoadedComments: boolean;
}

export const initialState: IState = {
  newsComments: JSON.parse(localStorage.getItem("newsComments") || "[]"),
  isLoadedComments: false,
};

const commentsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionType.FILL_COMMENTS:
      return {
        ...state,
        newsComments: [...action.payload, state.newsComments],
        isLoadedComments: true,
      };
    case ActionType.RESET_STATUS:
      return {
        ...state,
        isLoadedComments: false,
      };
    default:
      return state;
  }
};

export { commentsReducer };
