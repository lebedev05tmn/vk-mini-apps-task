import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "app/store";
import { parseDate } from "../lib";
import { IStory } from "shared/interfaces";
import { NewsCard } from "shared/ui";

const NewsList: FC = () => {
  const data: any[] = useSelector(
    (state: RootState) => state.NEWS_LIST.newsList
  );

  const isLoaded: boolean = useSelector(
    (state: RootState) => state.NEWS_LIST.isLoadedNewsList
  );

  if (!isLoaded) return <div>Загрузка...</div>;

  return (
    isLoaded && (
      <>
        {data.map((item: IStory) => {
          return (
            <NewsCard
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
};

export { NewsList };
