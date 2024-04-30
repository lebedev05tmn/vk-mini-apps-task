import { FC, PropsWithChildren } from "react";
import { INewsCard } from "shared/interfaces";
import { Card, Paragraph, Title } from "@vkontakte/vkui";
import styles from "./NewsCard.module.scss";

const NewsCard: FC<PropsWithChildren<INewsCard>> = ({
  title,
  score,
  by,
  time,
  onClick,
  index,
}) => {
  return (
    <Card className={styles.Card} onClick={() => onClick()}>
      <Title>
        <span className={styles.TitleIndex}>{index}.</span>
        {title}
      </Title>

      <Paragraph>Рейтинг: {score}</Paragraph>
      <Paragraph>Ник автора: {by}</Paragraph>
      <Paragraph>Дата публикации: {time}</Paragraph>
    </Card>
  );
};

export { NewsCard };
