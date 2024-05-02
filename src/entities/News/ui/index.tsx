import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { parseDate } from "entities/NewsList";
import { NewsDetails } from "shared/ui";
import { IAction, fetchNewsItem } from "../model/api-actions";
import { ThunkDispatch } from "redux-thunk";
import { IState } from "../model/news-reducer";
import { RootState } from "app/store";

const NewsInfo: FC<{ id: string | undefined }> = ({ id }) => {
  const dispatch: ThunkDispatch<IState, void, IAction> = useDispatch();
  const data: any = useSelector((state: RootState) => state.NEWS.newsItem);
  const isLoadedNews: boolean = useSelector(
    (state: RootState) => state.NEWS.isLoadedNews
  );

  useEffect(() => {
    id && dispatch(fetchNewsItem(id));
  }, [dispatch, id]);

  return (
    <>
      {isLoadedNews && (
        <NewsDetails
          by={data.by}
          title={data.title}
          url={data.url}
          descendants={data.descendants}
          time={parseDate(data.time)}
        />
      )}
    </>
  );
};

export { NewsInfo };
