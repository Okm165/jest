import { render } from "solid-testing-library";
import App from "../App";

test("test app innerHtml", () => {
  render(() => {
    return (
      <App />
    )
  });
  let dom = document.getElementById("first");
  expect(dom?.innerHTML).toBe("hello");
});
