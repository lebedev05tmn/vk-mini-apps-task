import { createAction } from "@reduxjs/toolkit";
import { IComment } from "shared/interfaces";

export const ActionType = {
  FILL_COMMENTS: "COMMENTS/FILL_NEWSTORIES_ID",
  FILL_SUB_COMMENTS: "COMMENTS/FILL_SUB_COMMENTS",
  RESET_SUB_COMMENTS_STATUS: "COMMENTS/RESET_SUB_COMMENTS_STATUS",
  RESET_STATUS: "COMMENTS/RESET_STATUS",
};

export const fillComments = createAction<IComment[]>(ActionType.FILL_COMMENTS);
export const fillSubComments = createAction<IComment[]>(
  ActionType.FILL_SUB_COMMENTS
);
export const resetSubComment = createAction(
  ActionType.RESET_SUB_COMMENTS_STATUS
);
export const resetStatus = createAction(ActionType.RESET_STATUS);
