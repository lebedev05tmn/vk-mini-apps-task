/*import { Dispatch } from "@reduxjs/toolkit";
import { api } from "../api";
import { IStory } from "shared/interfaces";
import { AxiosResponse } from "axios";

export interface IAction {
  type: string;
  payload: IStory;
}

export const fetchNewsItem = (id: string) => (dispatch: Dispatch<IAction>) => {
  api.get(`item/${id}.json`).then((response: AxiosResponse<IStory>) => {
    dispatch(fillNewsItem(response.data));
  });
};
*/
