export interface ShopInfo {
  id: string;
  picUrl: string;
  title: string;
  selected: boolean;
}

export const createEmptyShop = (): ShopInfo[] => [];
