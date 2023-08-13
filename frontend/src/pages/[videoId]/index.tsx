import { useParams } from 'react-router-dom';
import {
  CommentForm,
  CommentList,
  ProductList,
  LoginForm,
} from '../../components';
import { useState } from 'react';
import { useGetCommentList } from '../../services/comments/hooks';
import { useGetVideoDetails } from '../../services/videos/hook';

const DetailPage = () => {
  const { videoId } = useParams();
  const VIDEO_ID = videoId as unknown as string;

  const [username, setUsername] = useState('');

  const videoDetailHook = useGetVideoDetails(VIDEO_ID);
  const commentListHook = useGetCommentList(
    {
      video: VIDEO_ID,
    },
    {
      enabled: !!VIDEO_ID,
    }
  );

  if (videoDetailHook.isFetching) {
    return <div className="text-sm">Loading...</div>;
  }

  if (!videoDetailHook.data?.data) {
    return <div className="text-sm">No Data.</div>;
  }

  return (
    <div className="h-screen p-4">
      <div className="grid md:grid-cols-4 gap-4 h-full">
        <div className="md:col-span-1 bg-gray-800 p-4 rounded-xl">
          <h4 className="mb-6 text-lg font-semibold w-fit">List Product</h4>
          <ProductList products={videoDetailHook.data.data.products} />
        </div>

        <div className="md:col-span-2 relative flex items-center justify-center">
          {videoDetailHook.data.data.urlVideo ? (
            <iframe
              width="420"
              height="315"
              src={videoDetailHook.data.data.urlVideo}
              className="rounded-lg w-full object-contain absolute top-0 bottom-0 m-auto"
            ></iframe>
          ) : (
            <p className="text-center">No Video.</p>
          )}
        </div>

        <div className="md:col-span-1 bg-gray-800 p-4 rounded-xl">
          <div className="flex flex-col gap-4 h-full max-h-full">
            <div className="flex justify-end">
              <LoginForm username={username} setUsername={setUsername} />
            </div>
            <div className="flex-1">
              <div className="overflow-y-auto" style={{ maxHeight: '83vh' }}>
                <CommentList
                  username={username}
                  listComment={commentListHook.data?.data || []}
                />
              </div>
            </div>
            <CommentForm username={username} videoId={VIDEO_ID} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
