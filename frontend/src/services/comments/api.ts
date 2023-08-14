import { TCommentResponse } from './entities/response';
import { TCommentParams, TCommentPayload } from './entities/request';
import axios from '../../utils/axios';
import { TResponse } from '../../utils/entities/response';

export const getCommentList = async (params: TCommentParams) => {
  const result = await axios.get<TResponse<TCommentResponse[]>>(`/comments`, {
    params: { ...params },
  });
  return result.data;
};

export const postComment = async (payload: TCommentPayload) => {
  const result = await axios.post<TResponse<TCommentResponse>>(
    `/comments`,
    payload
  );
  return result.data;
};
