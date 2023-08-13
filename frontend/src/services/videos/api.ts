import { TVideoResponse } from './entities/response';
import { TVideoParams } from './entities/request';
import axios from '../../utils/axios';
import { TResponse } from '../../utils/entities/response';

export const getVideoList = async (params: TVideoParams) => {
  const result = await axios.get<TResponse<TVideoResponse[]>>(`/videos`, {
    params: { ...params },
  });
  return result.data;
};

export const getVideoDetails = async (id: TVideoResponse['_id']) => {
  const result = await axios.get<TResponse<TVideoResponse>>(`/videos/${id}`);
  return result.data;
};
