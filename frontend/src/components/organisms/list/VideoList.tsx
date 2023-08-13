import { NavLink } from 'react-router-dom';
import { useGetVideoList } from '../../../services/videos/hook';
import { VideoCard } from '../..';

type VideoListProps = {
  badgeActived: string;
  searchActived: string;
};

export const VideoList: React.FC<VideoListProps> = props => {
  const { badgeActived, searchActived } = props;

  const videoListHook = useGetVideoList({
    badge: badgeActived,
    search: searchActived,
  });

  if (videoListHook.isFetching) {
    return <div className="text-sm">Loading...</div>;
  }

  if (videoListHook.data?.data.length === 0) {
    return <div className="text-sm">No Data.</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 text-white">
      {videoListHook.data?.data.map(item => (
        <NavLink key={item._id} to={`/${item._id}`}>
          <VideoCard
            title={item.title}
            badges={item.badges.map(item => item.name)}
            urlThumbnail={item.urlThumbnail}
            shop={item.shop}
            viewed={item.viewed}
          />
        </NavLink>
      ))}
    </div>
  );
};
