export interface TokenPriceType {
  time: string;
  value: number;
}

export interface PriceHistoryState {
  loading: boolean;
  exists: boolean;
  tokenPriceHistory: TokenPriceType[];
}
