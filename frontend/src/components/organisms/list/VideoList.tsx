import { NavLink } from "react-router-dom";
import { useFetchVideoList } from "../../../modules/videos/hooks";
import { VideoCard } from "../..";

type VideoListProps = {
  badgeActived: string;
  searchActived: string;
};

export const VideoList: React.FC<VideoListProps> = (props) => {
  const { badgeActived, searchActived } = props;

  const { videos, loading } = useFetchVideoList({
    badge: badgeActived,
    search: searchActived,
  });

  if (loading) {
    return <div className="text-sm">Loading...</div>;
  }

  if (videos.length === 0) {
    return <div className="text-sm">No Data.</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 text-white">
      {videos.map((item) => (
        <NavLink key={item.id} to={`/${item.id}`}>
          <VideoCard
            title={item.title}
            badges={item.badges}
            urlThumbnail={item.urlThumbnail}
            shop={item.shop}
            viewed={item.viewed}
          />
        </NavLink>
      ))}
    </div>
  );
};
