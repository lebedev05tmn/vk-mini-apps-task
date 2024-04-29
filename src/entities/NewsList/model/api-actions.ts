import { api } from "../api";
import { Dispatch } from "@reduxjs/toolkit";
import { fillNewsList, fillNewstoriesId } from "./action";
import { INewsListAction, INewstoriesList } from "./news-list-reducer";
import { AxiosResponse } from "axios";
import { IStory } from "shared/interfaces";

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

export const fetchNewsList =
  () => async (dispatch: Dispatch<INewsListAction>, getState: any) => {
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
    } catch (error) {
      throw error;
    }
  };
