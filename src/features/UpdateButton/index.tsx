import { FC } from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import {
  INewsListAction,
  INewstoriesList,
  fetchNewstories,
} from "entities/NewsList";
import { RootState } from "app/store";
import { Button } from "@vkontakte/vkui";

const UpdateButton: FC = () => {
  const dispatch: ThunkDispatch<
    RootState,
    void,
    INewsListAction | INewstoriesList
  > = useDispatch();
  const handleUpdate = () => {
    dispatch(fetchNewstories());
  };
  return <Button onClick={handleUpdate}>Обновить</Button>;
};

export { UpdateButton };
