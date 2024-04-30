import { FC, PropsWithChildren } from "react";
import { Card, Title, Paragraph } from "@vkontakte/vkui";
import { INewsDetails } from "shared/interfaces";
import styles from "./NewsDetails.module.scss";

const NewsDetails: FC<PropsWithChildren<INewsDetails>> = ({
  url,
  title,
  by,
}) => {
  return (
    <Card className={styles.Card}>
      <Title>Новость: {title}</Title>
      <Paragraph>Автор новости: {by}</Paragraph>
      <Paragraph>
        Ссылка на новость:{" "}
        <a href={url} target="_blank">
          {url}
        </a>
      </Paragraph>
    </Card>
  );
};

export { NewsDetails };
