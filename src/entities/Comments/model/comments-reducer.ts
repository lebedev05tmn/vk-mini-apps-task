import { IComment } from "shared/interfaces";
import { ActionType } from "./action";

export interface IState {
  comments: IComment[];
  isLoadedComments: boolean;
  subComments: IComment[];
  isLoadedSubComments: boolean;
}

export const initialState: IState = {
  comments: [],
  isLoadedComments: false,
  subComments: [],
  isLoadedSubComments: false,
};

interface IAction {
  type: string;
  payload: IComment[];
}

const commentsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ActionType.FILL_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isLoadedComments: true,
      };
    case ActionType.FILL_SUB_COMMENTS:
      return {
        ...state,
        subComments: action.payload,
        isLoadedSubComments: true,
      };
    case ActionType.RESET_SUB_COMMENTS_STATUS:
      return {
        ...state,
        isLoadedSubComments: false,
      };
    case ActionType.RESET_STATUS:
      return {
        ...state,
        isLoadedSubComments: false,
        isLoadedComments: false,
      };
    default:
      return state;
  }
};

export { commentsReducer };
