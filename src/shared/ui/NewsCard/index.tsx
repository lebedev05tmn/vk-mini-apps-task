import { FC, PropsWithChildren } from "react";
import { INewsCard } from "shared/interfaces";
import { Card } from "@vkontakte/vkui";

const NewsCard: FC<PropsWithChildren<INewsCard>> = ({
  title,
  score,
  by,
  time,
}) => {
  return (
    <Card>
      <p>{title}</p>
      <p>{score}</p>
      <p>{by}</p>
      <p>{time}</p>
    </Card>
  );
};

export { NewsCard };
