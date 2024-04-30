import { createAction } from "@reduxjs/toolkit";
import { IComment } from "shared/interfaces";

export const ActionType = {
  FILL_COMMENTS: "COMMENTS/FILL_NEWSTORIES_ID",
  RESET_STATUS: "COMMENTS/RESET_STATUS",
};

export const fillComments = createAction<IComment[]>(ActionType.FILL_COMMENTS);
export const resetStatus = createAction(ActionType.RESET_STATUS);
