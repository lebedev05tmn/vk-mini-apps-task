import { Comment } from "./index";

const ReactTestRenderer = require("react-test-renderer");

describe("Comments render", () => {
  test("Should Comment is not Sub", () => {
    const tree = ReactTestRenderer.create(
      <Comment
        text={"Hello world"}
        by={"author"}
        time={"12345"}
        onClick={() => console.log("hello world")}
        index={1}
        haveSub={false}
        isSub={false}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Should Comment is Sub", () => {
    const tree = ReactTestRenderer.create(
      <Comment
        text={"Hello world"}
        by={"author"}
        time={"12345"}
        onClick={() => console.log("hello world")}
        index={1}
        haveSub={false}
        isSub={true}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
