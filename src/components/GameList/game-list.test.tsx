import { render, waitFor } from "@testing-library/react";
import GameList from "./";
import * as gameService from "../../services/api/games.service";
import { GetGamesDTO } from "../../constants/dto/games.dto";

const mockedGames = [{ GameID: 1 }, { GameID: 2 }];

const getGamesSpy = jest.spyOn(gameService, "getGames");

jest.mock("./GameItem", () => "li" );

describe("Game list", () => {

  beforeEach(() => {
    getGamesSpy.mockResolvedValue({
      CategoryGames: [
        {
          Games: mockedGames,
        },
      ],
    } as GetGamesDTO);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("should call the function which request games info 1 time", async () => {
    render(<GameList />);

    await waitFor(() => expect(getGamesSpy).toHaveBeenCalledTimes(1));
  });

  it("should render one GameItem component on time per Popular Game in response", async () => {
    const { getAllByRole } = render(<GameList />);

    await waitFor(() =>
      expect(getAllByRole("listitem").length).toBe(mockedGames.length)
    );
  });
});
