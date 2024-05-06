import { NewsDetails } from "./index";

const ReactTestRenderer = require("react-test-renderer");

describe("News Details render", () => {
  test("Should NewsDetails render", () => {
    const tree = ReactTestRenderer.create(
      <NewsDetails
        by={"author"}
        time={"12345"}
        title={"title"}
        url={"#"}
        descendants={1}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
