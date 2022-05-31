import { CategoryName } from "../enum/category-name.enum";
import { DeviceTypeName } from "../enum/device-type-name.enum";

export interface GetGamesDTO {
  BrandID: number;
  CasinoSuspended: boolean;
  CategoryGames: GameCategoryDTO[];
  CustomerAlias: string;
  CustomerID?: number;
  DeviceTypeID: number;
  Email?: string;
  ExtGameID: number;
  FavoritesGames?: GameDTO[];
  GameID: number;
  IsError: boolean;
  IsValidModel: boolean;
  ModelErrorMessage?: string;
  Password?: string;
  RedirectTo?: string;
  TokenJwt?: string;
  TokensJwt: string[];
}

export interface GameCategoryDTO {
  CategoryID: number;
  CategoryName: string;
  DisplayOrder: number;
  Featured: GameDTO[];
  Games: GameDTO[]
  ImageUrl: string;
  IsActive: boolean;
  ParentID: number;
  IsMainCategory: boolean;
  ParentCategoryName: CategoryName;
  SubCategories?: null;
  MostPlayed: GameDTO[];
  NewGames: GameDTO[];
  Popular: GameDTO[];
}

export interface GameDTO {
  GameID: number;
  CategoryID: number;
  ExtGameID: number;
  GameName: string;
  IsActive: boolean;
  Description: string;
  DisplayOrder: number;
  MinBet: number;
  MaxBet: number;
  ImageUrlGame: string;
  ImageDesciption?: string;
  GameDetailID: number;
  Featured: boolean;
  FeaturedDisplayOrder: number;
  NextAdvertise: boolean;
  NextAdvertiseOrder: number;
  DeviceTypeName: DeviceTypeName;
  CategoryName: CategoryName;
  DisplayOrderCategory: number;
  IsActiveCasinoGameCategory: boolean;
  ImageUrlCategory: string;
  ParentID: number;
  ProviderID: number;
  IsNew: boolean;
  IsNewOrder: number;
  IsMostPlayed: boolean;
  IsMostPlayedOrder: number;
  Volatility: number;
  ImageDescriptionURL: string;
  Reels: number;
  Lines: string;
  IsMultiLimit: number;
  LimitDescription: string;
  HighlightLabel: string;
  VideoDescURl: string;
  ParentCategoryName: CategoryName;
  IsMainCategory: boolean;
  IsOpenWindow: boolean;
  JackpotValue: 0.0;
  Resize: boolean;
  DeepLink: string;
  FeaturedImageUrl: string;
  IsPopular: boolean;
  PopularOrder: number;
  MetaData: [];
  DisplayOrderSubcategory: number;
  DisplayParentOrderCategory: number;
}
