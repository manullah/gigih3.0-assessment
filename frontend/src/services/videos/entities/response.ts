import { TBadgeResponse } from '../../badges/entities/response';
import { TProductResponse } from '../../products/entities/response';

export type TVideoResponse = {
  _id: string;
  title: string;
  shop: string;
  urlThumbnail: string;
  urlVideo: string;
  viewed: number;
  badges: TBadgeResponse[];
  products: TProductResponse[];
};
