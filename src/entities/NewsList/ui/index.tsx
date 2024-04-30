import { FC, memo, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { RootState } from "app/store";
import { parseDate } from "../lib";
import { IStory } from "shared/interfaces";
import { NewsCard } from "shared/ui";

interface INewsList {
  handleNavigateToDetail: (index: number) => void;
}

const NewsList: FC<PropsWithChildren<INewsList>> = memo(
  ({ handleNavigateToDetail }) => {
    const data: any[] = useSelector(
      (state: RootState) => state.NEWS_LIST.newsList
    );

    const isLoaded: boolean = useSelector(
      (state: RootState) => state.NEWS_LIST.isLoadedNewsList
    );

    if (!isLoaded) return "Загрузка...";

    return (
      isLoaded && (
        <>
          {data.map((item: IStory, index: number) => {
            return (
              <NewsCard
                index={index + 1}
                onClick={() => handleNavigateToDetail(item.id)}
                title={item.title}
                time={parseDate(item.time)}
                score={item.score}
                by={item.by}
                key={item.id}></NewsCard>
            );
          })}
        </>
      )
    );
  },
  (prev, next) => prev.handleNavigateToDetail === next.handleNavigateToDetail
);

export { NewsList };
