import { FC, useEffect } from "react";
import {
  NewsList,
  INewsListAction,
  INewstoriesList,
  fetchNewstories,
  fetchNewsList,
} from "entities/NewsList";
import { useSelector, useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "app/store";
import { QUERY_INTEVAL } from "shared/config";
import { Group } from "@vkontakte/vkui";
import {} from "entities/NewsList/model";

const NewsListWithState: FC = () => {
  const dispatch: ThunkDispatch<
    RootState,
    void,
    INewsListAction | INewstoriesList
  > = useDispatch();
  const newstories: any[] = useSelector(
    (state: RootState) => state.NEWS_LIST.newstoriesList
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
  }, []);
  return (
    <Group>
      <NewsList />
    </Group>
  );
};

export { NewsListWithState };
