import { render } from "@testing-library/react";
import GameItem from "./";

describe("Game list", () => {
  it("should call the function which request games info 1 time", () => {
    const mockedProps = {
      name: "hola",
      imageUrl: "blabla",
    };
    const { getByRole, getByText } = render(<GameItem {...mockedProps} />);

    const img = getByRole("img");
    const name = getByText(mockedProps.name);

    expect(img).toBeDefined();
    expect(img).toHaveAttribute('src', mockedProps.imageUrl);
    expect(img).toHaveAttribute('alt', mockedProps.name);

    expect(name).toBeDefined();
    expect(name.tagName).toBe('h3')
   

  });
});
