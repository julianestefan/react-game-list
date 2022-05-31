import { render, waitFor } from "@testing-library/react";
import GameList from "./";
import * as gameService from "../../services/api/games.service";
import { GameCategoryDTO } from "../../constants/dto/games.dto";
import GameItem from "./GameItem";

const getGamesSpy = jest.spyOn(gameService, "getGames");

describe("Game list", () => {
  it("should call the function which request games info 1 time", () => {
    render(<GameList />);

    expect(gameService.getGames).toHaveBeenCalledTimes(1);
  });

  it("should render one GameItem component on time per Popular Game in response", () => {
    getGamesSpy.mockResolvedValue({ Popular: [{}, {}] } as GameCategoryDTO);
    jest.doMock("./GameItem", () => <div role="item"></div>);

    const { getAllByRole } = render(<GameList />);

    const items = getAllByRole("item");
    expect(items.length).toBe(2);
  });
});