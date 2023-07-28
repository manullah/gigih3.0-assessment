import db from "../../utils/db.json";
import { TVideoResponse } from "./types/entities";
import { TVideoParams } from "./types/requests";

/**
 * Make a dummy fetch video list
 */
export const getVideoList = (params: TVideoParams) => {
  const videos = db.videos;
  const filtered = videos
    .filter((item) =>
      item.title.toLowerCase().includes(params.search?.toLowerCase() || "")
    )
    .filter((item) => item.badges.includes(params.badge || ""));

  return new Promise<TVideoResponse[]>((resolve) =>
    setTimeout(() => {
      resolve(filtered);
    }, 100)
  );
};

export const getVideoDetail = (id: TVideoResponse["id"]) => {
  const video = db.videos.find((item) => item.id === +id) || null;

  return new Promise<TVideoResponse | null>((resolve) =>
    setTimeout(() => {
      resolve(video);
    }, 100)
  );
};
