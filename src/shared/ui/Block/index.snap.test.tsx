import { Block } from "./index";

const ReactTestRenderer = require("react-test-renderer");

describe("Block render", () => {
  test("Should Block with children", () => {
    const tree = ReactTestRenderer.create(
      <Block>
        <div>hello world</div>
      </Block>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
