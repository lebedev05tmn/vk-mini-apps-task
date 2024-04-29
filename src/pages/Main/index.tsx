import { FC } from "react";
import { Layout } from "widgets/Layout";
import { MainList } from "widgets/MainList";

const Main: FC = () => {
  return (
    <Layout isMain={true}>
      <MainList />
    </Layout>
  );
};

export default Main;
