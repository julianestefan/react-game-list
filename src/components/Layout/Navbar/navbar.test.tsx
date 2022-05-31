import { render } from "@testing-library/react";
import Navbar from "./index";

describe("Navbar", () => {
  it("should has a header tag with a navbar ", () => {
    const { getByRole } = render(<Navbar />);

    const header = getByRole("banner");
    const navbar = getByRole("navigation");

    expect(header).toBeDefined();
    expect(navbar).toBeDefined();
    expect(navbar.parentElement).toBe(header);
  });

  it("should has a logo image inside an anchor tag ", () => {
    const { getByRole, getByAltText } = render(<Navbar />);

    const link = getByRole("link");
    const logoImg = getByAltText("logo");

    expect(link).toBeDefined();
    expect(logoImg).toBeDefined();
    expect(logoImg.parentElement).toBe(link);
  });
});
