import { render } from "@testing-library/react";
import Footer from "./index";

describe("Footer", () => {
  it("should has a button ", () => {
    const { getByRole } = render(<Footer />);

    const button = getByRole("button");

    expect(button).toBeDefined();
  });


});
