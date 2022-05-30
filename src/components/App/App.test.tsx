import { render, screen } from "@testing-library/react";
import Layout from "../Layout";
import App from "./App";

describe("game list app", () => {
  it("should render a footer and a navbar", () => {
    const { getByRole } = render(<App />);
    const navbar = getByRole("navigation");
    const footer = getByRole("footer");

    expect(navbar).toBeDefined();
    expect(footer).toBeInstanceOf(Layout);
  });
});
