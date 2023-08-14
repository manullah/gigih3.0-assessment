import { TUserResponse } from '../../users/entities/response';
import { TVideoResponse } from '../../videos/entities/response';

export type TCommentResponse = {
  _id: string;
  comment: string;
  datetime: string;
  video: TVideoResponse;
  user: TUserResponse;
};
