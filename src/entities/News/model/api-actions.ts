import { Dispatch } from "@reduxjs/toolkit";
import { api } from "../api";
import { IStory } from "shared/interfaces";
import { AxiosResponse } from "axios";
import { fillNewsItem } from "./action";

export interface IAction {
  type: string;
  payload: IStory;
}

export const fetchNewsItem = (id: string) => (dispatch: Dispatch<IAction>) => {
  api.get(`item/${id}.json`).then((response: AxiosResponse<IStory>) => {
    localStorage.setItem("newsItem", JSON.stringify(response.data));
    dispatch(fillNewsItem(response.data));
  });
};
