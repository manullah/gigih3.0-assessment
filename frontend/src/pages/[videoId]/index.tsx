import { useParams } from "react-router-dom";
import { useFetchVideDetail } from "../../modules/videos/hooks";
import {
  CommentForm,
  CommentList,
  ProductList,
  LoginForm,
} from "../../components";
import { useState } from "react";
import { useCommentSocket } from "../../modules/comments/hooks";

const DetailPage = () => {
  const { videoId } = useParams();
  const VIDEO_ID = videoId as unknown as number;

  const [username, setUsername] = useState("");

  const { video, loading } = useFetchVideDetail(VIDEO_ID);
  const { receivedComment } = useCommentSocket();

  if (loading) {
    return <div className="text-sm">Loading...</div>;
  }

  if (!video) {
    return <div className="text-sm">No Data.</div>;
  }

  return (
    <div className="h-screen p-4">
      <div className="grid md:grid-cols-4 gap-4 h-full">
        <div className="md:col-span-1 bg-gray-800 p-4 rounded-xl">
          <h4 className="mb-6 text-lg font-semibold w-fit">List Product</h4>
          <ProductList products={video.products} />
        </div>

        <div className="md:col-span-2 relative flex items-center justify-center">
          {video.urlVideo ? (
            <iframe
              width="420"
              height="315"
              src={video.urlVideo}
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
              <div className="overflow-y-auto" style={{ maxHeight: "83vh" }}>
                <CommentList
                  username={username}
                  listComment={receivedComment.filter(
                    (item) => item.videoId === VIDEO_ID
                  )}
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
