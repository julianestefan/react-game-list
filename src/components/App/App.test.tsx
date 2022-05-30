import { render, screen } from "@testing-library/react";
import Layout from "../Layout";
import App from "./App";

describe("game list app", () => {
  it("should render the layout", () => {
    const { getByRole } = render(<App />);
    const layout = getByRole("layout");

    expect(layout).toBeDefined();
  });
});
