import { render } from "@testing-library/react";
import GameItem from "./";

describe("Game list", () => {
  it("should render the component with an image with the correct attributes and a title in a h3 tag", () => {
    const mockedProps = {
      name: "hola",
      imageurl: "blabla",
    };
    const { getByRole, getByText } = render(<GameItem {...mockedProps} />);

    const img = getByRole("img");
    const name = getByText(mockedProps.name);

    expect(img).toBeDefined();
    const srcUrl = process.env.REACT_APP_BASE_IMAGE_URL + mockedProps.imageurl;
    expect(img).toHaveAttribute("src", srcUrl);
    expect(img).toHaveAttribute("alt", mockedProps.name);

    expect(name).toBeDefined();
    expect(name.tagName).toBe("H6");
  });
});
