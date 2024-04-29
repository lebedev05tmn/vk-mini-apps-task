import { createAction } from "@reduxjs/toolkit";
import { IStory } from "shared/interfaces";

export const ActionType = {
  FILL_NEWSTORIES_ID: "NEWS_LIST/FILL_NEWSTORIES_ID",
  FILL_NEWS_LIST: "NEWS_LIST/FILL_NEWS_LIST",
};

export const fillNewstoriesId = createAction<number[]>(
  ActionType.FILL_NEWSTORIES_ID
);
export const fillNewsList = createAction<IStory[]>(ActionType.FILL_NEWS_LIST);
