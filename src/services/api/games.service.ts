import axios from "axios";
import { GameCategoryDTO } from "../../constants/dto/games.dto";


export async function getGames() {
    return (await axios.get<GameCategoryDTO>("https://gist.githubusercontent.com/vbence86/83da491ff9830ad19ac6fa0a10162fc1/raw/d543204847b3d9896f0ce15d244bb89160fe0f86/games.json")).data;
}