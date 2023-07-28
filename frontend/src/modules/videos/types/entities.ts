import { TProductResponse } from "../../products/entities";

export type TVideoResponse = {
  id: number;
  title: string;
  shop: string;
  urlThumbnail: string;
  urlVideo: string;
  badges: string[];
  viewed: number;
  products: TProductResponse[];
};
