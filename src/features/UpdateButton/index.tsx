import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { fetchNewstories } from "entities/NewsList";
import { INewsListAction, INewstoriesList } from "shared/interfaces";
import { RootState } from "app/store";
import { Button } from "@vkontakte/vkui";

const UpdateButton: FC = () => {
  const dispatch: ThunkDispatch<
    RootState,
    void,
    INewsListAction | INewstoriesList
  > = useDispatch();

  const newsList = useSelector((state: RootState) => state.NEWS_LIST.newsList);
  const isLoaded = useSelector(
    (state: RootState) => state.NEWS_LIST.isLoadedNewsList
  );

  const handleUpdate = () => {
    dispatch(fetchNewstories());
  };

  return (
    newsList.length > 0 &&
    isLoaded && (
      <Button onClick={handleUpdate} style={{ width: "95%" }}>
        Обновить
      </Button>
    )
  );
};

export { UpdateButton };
