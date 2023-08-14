import { TUserResponse } from '../../users/entities/response';
import { TVideoResponse } from '../../videos/entities/response';

export type TCommentParams = {
  video?: string;
};

export type TCommentPayload = {
  comment: string;
  video: TVideoResponse['_id'];
  user: TUserResponse['_id'];
};
