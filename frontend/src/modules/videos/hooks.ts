import { useEffect, useState } from "react";
import { TVideoResponse } from "./types/entities";
import { getVideoDetail, getVideoList } from "./apis";
import { TVideoParams } from "./types/requests";

export const useFetchVideoList = (params: TVideoParams) => {
  const [videos, setVideos] = useState<TVideoResponse[]>([]);
  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    setLoading(true);
    setVideos([]);

    try {
      const result = await getVideoList(params);
      setVideos(result);
      setLoading(false);
    } catch (error) {
      console.log("Failed to load video list: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, [params.badge, params.search]);

  return {
    videos,
    loading,
  };
};

export const useFetchVideDetail = (id: TVideoResponse["id"]) => {
  const [video, setVideo] = useState<TVideoResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const fetch = async (videoId: TVideoResponse["id"]) => {
    setLoading(true);
    setVideo(null);

    try {
      const result = await getVideoDetail(videoId);
      setVideo(result);
      setLoading(false);
    } catch (error) {
      console.log("Failed to load video detail: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch(id);
  }, [id]);

  return {
    video,
    loading,
  };
};
