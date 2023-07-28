import { TVideoResponse } from "../videos/types/entities";

export type TCommentResponse = {
  username: string;
  comment: string;
  videoId: TVideoResponse["id"];
};
