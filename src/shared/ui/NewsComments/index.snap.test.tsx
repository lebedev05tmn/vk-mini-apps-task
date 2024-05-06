import { NewsComments } from "./index";

const ReactTestRenderer = require("react-test-renderer");

describe("NewsComment render", () => {
  test("Should NewsComment with children", () => {
    const tree = ReactTestRenderer.create(
      <NewsComments>
        <div>hello world</div>
      </NewsComments>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
