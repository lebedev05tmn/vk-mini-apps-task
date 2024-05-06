import { Header } from "./index";

const ReactTestRenderer = require("react-test-renderer");

describe("Headers render", () => {
  test("Should Header renders is Main", () => {
    const tree = ReactTestRenderer.create(
      <Header
        children={"Hello"}
        isMain={true}
        onBackClick={() => console.log("Hello word")}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Should Header renders is not Main`", () => {
    const tree = ReactTestRenderer.create(
      <Header
        children={"Hello"}
        isMain={true}
        onBackClick={() => console.log("Hello word")}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
