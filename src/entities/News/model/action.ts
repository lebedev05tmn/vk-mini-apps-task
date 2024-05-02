import { createAction } from "@reduxjs/toolkit";
import { IStory, IComment } from "shared/interfaces";

export const ActionType = {
  FILL_NEWS_ITEM: "NEWS/FILL_NEWSTORIES_ID",
  FILL_COMMENTS: "NEWS/FILL_NEWSTORIES_ID",
  FILL_SUB_COMMENTS: "NEWS/FILL_SUB_COMMENTS",
  RESET_STATUS: "NEWS/RESET_STATUS",
};

export const fillNewsItem = createAction<IStory>(ActionType.FILL_NEWS_ITEM);
export const fillComments = createAction<IComment[]>(ActionType.FILL_COMMENTS);
export const fillSubComments = createAction<IComment[]>(
  ActionType.FILL_SUB_COMMENTS
);
export const resetStatus = createAction(ActionType.RESET_STATUS);
