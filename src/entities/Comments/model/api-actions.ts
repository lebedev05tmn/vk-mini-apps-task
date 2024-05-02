import { api } from "../api";
import { Dispatch } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { IComment } from "shared/interfaces";
import { fillComments, fillSubComments } from "./action";

export interface IActionComment {
  type: string;
  payload: IComment[];
}

export const fetchComments =
  (kids: number[], isSub: boolean) =>
  async (dispatch: Dispatch<IActionComment>) => {
    const newsListPromises: Promise<AxiosResponse<IComment>>[] = kids.map(
      (item: number) => api.get(`item/${item}.json`)
    );
    const newsListResponses: AxiosResponse<IComment>[] = await Promise.all(
      newsListPromises
    );

    const newsListData: IComment[] = newsListResponses.map(
      (response: AxiosResponse<IComment>) => response.data
    );
    isSub
      ? dispatch(fillSubComments(newsListData))
      : dispatch(fillComments(newsListData));
  };
