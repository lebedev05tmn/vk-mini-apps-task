import { FC, useEffect } from "react";
import { NewsList, fetchNewstories, fetchNewsList } from "entities/NewsList";
import { useSelector, useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { QUERY_INTEVAL, AppRoute } from "shared/config";
import { INewstoriesList, INewsListAction } from "shared/interfaces";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

const NewsListWithState: FC = () => {
  type IState = {
    NEWS_LIST: {
      newstoriesList: number[];
    };
  };
  const dispatch: ThunkDispatch<
    IState,
    void,
    INewsListAction | INewstoriesList
  > = useDispatch();
  const newstories: number[] = useSelector(
    (state: IState) => state.NEWS_LIST.newstoriesList
  );
  useEffect(() => {
    if (newstories.length === 0) dispatch(fetchNewstories());
  }, [dispatch, newstories]);

  useEffect(() => {
    if (newstories.length) dispatch(fetchNewsList());
  }, [dispatch, newstories]);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchNewstories());
    }, QUERY_INTEVAL);

    return () => clearInterval(interval);
  }, [dispatch]);

  const routeNavigator = useRouteNavigator();

  return (
    <NewsList
      handleNavigateToDetail={(id: number) =>
        routeNavigator.push(AppRoute.DETAILS + id)
      }
    />
  );
};

export { NewsListWithState };
