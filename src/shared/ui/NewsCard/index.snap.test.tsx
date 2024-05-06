import { NewsCard } from "./index";

const ReactTestRenderer = require("react-test-renderer");

describe("News Card render", () => {
  test("Should NewsCard render", () => {
    const tree = ReactTestRenderer.create(
      <NewsCard
        by={"author"}
        time={"12345"}
        onClick={() => console.log("hello world")}
        index={1}
        title={"title"}
        score={15}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
