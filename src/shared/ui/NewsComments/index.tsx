import { Card } from "@vkontakte/vkui";
import { FC, PropsWithChildren } from "react";
import styles from "./NewsComments.module.scss";

const NewsComments: FC<PropsWithChildren> = ({ children }) => {
  return <Card className={styles.Card}>{children}</Card>;
};

export { NewsComments };
