import { useParams } from "react-router-dom";
import { useFetchVideDetail } from "../../modules/videos/hooks";
import { ButtonLogin, CommentList, ProductList } from "../../components";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Avatar } from "../../components/atoms/data-display/Avatar";
import { useState } from "react";

const DetailPage = () => {
  const { videoId } = useParams();

  const [username, setUsername] = useState("");

  const { video, loading } = useFetchVideDetail(videoId as unknown as number);

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
          <div className="flex flex-col gap-4 h-full">
            <div className="flex justify-end">
              {username ? (
                <div className="flex gap-2 items-center">
                  <p>{username}</p>
                  <Avatar url="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                </div>
              ) : (
                <ButtonLogin onSuccess={setUsername} />
              )}
            </div>
            <div className="flex-1">
              <CommentList />
            </div>
            <form className="flex gap-3">
              <input
                className="bg-gray-700 border-none w-full rounded-lg text-xs h-10"
                placeholder={
                  username ? "Type comment..." : "Login first on the top right"
                }
                disabled={!username}
              />
              <button className="bg-green-600 px-4 rounded-lg hover:bg-green-700 hover:shadow-lg">
                <PaperAirplaneIcon className="w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
