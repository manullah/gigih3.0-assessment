import { TVideoResponse } from '../../videos/entities/response';

export type TBadgeResponse = {
  _id: string;
  name: string;
  videos: TVideoResponse[];
};
