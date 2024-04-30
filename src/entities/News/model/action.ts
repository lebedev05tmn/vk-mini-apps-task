import { createAction } from "@reduxjs/toolkit";
import { IStory } from "shared/interfaces";

export const ActionType = {
  FILL_NEWS_ITEM: "NEWS/FILL_NEWSTORIES_ID",
  RESET_STATUS: "NEWS/RESET_STATUS",
};

export const fillNewsItem = createAction<IStory>(ActionType.FILL_NEWS_ITEM);
export const resetStatus = createAction(ActionType.RESET_STATUS);
