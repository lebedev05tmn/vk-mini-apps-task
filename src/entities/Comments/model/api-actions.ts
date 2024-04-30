import { Dispatch } from "@reduxjs/toolkit";
import { api } from "../api";
import { IComment } from "shared/interfaces";
import { AxiosResponse } from "axios";
import { fillComments } from "./action";

export interface IAction {
  type: string;
  payload: IComment[];
}

export const fetchComments =
  () => async (dispatch: Dispatch<IAction>, getState: any) => {
    const newsListPromises: Promise<AxiosResponse<IComment>>[] =
      getState().NEWS.newsItem.kids.map((item: IComment) =>
        api.get(`item/${item}.json`)
      );
    const newsListResponses: AxiosResponse<IComment>[] = await Promise.all(
      newsListPromises
    );

    const newsListData: IComment[] = newsListResponses.map(
      (response: AxiosResponse<IComment>) => response.data
    );
    dispatch(fillComments(newsListData));
    localStorage.setItem("newsComments", JSON.stringify(newsListData));
  };
