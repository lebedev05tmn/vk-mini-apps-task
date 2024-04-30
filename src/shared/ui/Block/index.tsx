import { Group, SplitCol } from "@vkontakte/vkui";
import { FC, PropsWithChildren } from "react";
import styles from "./Block.module.scss";

const Block: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SplitCol className={styles.SplitCol}>
      <Group className={styles.Group}>{children}</Group>
    </SplitCol>
  );
};

export { Block };
