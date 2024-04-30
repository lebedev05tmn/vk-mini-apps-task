import { api } from "../api";
import { Dispatch } from "@reduxjs/toolkit";
import { fillNewsList, fillNewstoriesId } from "./action";
import { AxiosResponse } from "axios";
import { IStory, INewsListAction, INewstoriesList } from "shared/interfaces";

export const fetchNewstories =
  () => async (dispatch: Dispatch<INewstoriesList>) => {
    try {
      const newstoriesResponse: AxiosResponse<number[]> = await api.get(
        `newstories.json`
      );
      const newstoriesData: number[] = newstoriesResponse.data;
      dispatch(fillNewstoriesId(newstoriesData));
    } catch (error) {
      throw error;
    }
  };

type IGetState = () => {
  NEWS_LIST: {
    newstoriesList: number[];
  };
};

export const fetchNewsList =
  () => async (dispatch: Dispatch<INewsListAction>, getState: IGetState) => {
    try {
      const newsListPromises: Promise<AxiosResponse<IStory>>[] =
        getState().NEWS_LIST.newstoriesList.map((item: number) =>
          api.get(`item/${item}.json`)
        );

      const newsListResponses: AxiosResponse<IStory>[] = await Promise.all(
        newsListPromises
      );

      const newsListData: IStory[] = newsListResponses.map(
        (response: AxiosResponse<IStory>) => response.data
      );
      dispatch(fillNewsList(newsListData));
      localStorage.setItem("newsList", JSON.stringify(newsListData));
    } catch (error) {
      throw error;
    }
  };
