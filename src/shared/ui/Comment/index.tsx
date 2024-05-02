import { Paragraph, Card, Button, Title } from "@vkontakte/vkui";
import { FC, PropsWithChildren } from "react";
import styles from "./Comment.module.scss";

interface ICommentProps {
  text: string;
  by: string;
  time: string;
  onClick?: () => void;
  index: number;
  haveSub?: boolean;
  isSub?: boolean;
}

const Comment: FC<PropsWithChildren<ICommentProps>> = ({
  text,
  by,
  time,
  onClick,
  index,
  haveSub,
  isSub,
}) => {
  return (
    <Card className={`${styles.Comment} ${isSub && styles.Sub}`}>
      <Title>
        {index} Автор: {by}
      </Title>
      <Paragraph>{text}</Paragraph>
      <Paragraph>{time}</Paragraph>
      {haveSub && (
        <Button className={styles.Button} onClick={onClick}>
          Показать еще
        </Button>
      )}
    </Card>
  );
};

export { Comment };
