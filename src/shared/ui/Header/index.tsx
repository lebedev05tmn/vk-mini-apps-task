import { FC, PropsWithChildren } from "react";
import { PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";
import { ILayout } from "../../interfaces";

interface IHeader extends ILayout {
  onBackClick?: () => void;
}

const Header: FC<PropsWithChildren<IHeader>> = ({
  children,
  isMain,
  onBackClick,
}) => {
  return (
    <PanelHeader before={!isMain && <PanelHeaderBack onClick={onBackClick} />}>
      {isMain ? children : "Назад"}
    </PanelHeader>
  );
};

export { Header };
