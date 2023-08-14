import { NavLink } from 'react-router-dom';
import { useGetVideoList } from '../../../services/videos/hook';
import { VideoCard } from '../..';
import { Grid } from '@mantine/core';

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
    return <div>Loading...</div>;
  }

  if (videoListHook.data?.data.length === 0) {
    return <div>No Data.</div>;
  }

  return (
    <>
      <Grid>
        {videoListHook.data?.data.map(item => (
          <Grid.Col span={6} sm={4} md={3} xl={2}>
            <NavLink
              key={item._id}
              to={`/${item._id}`}
              style={{ textDecoration: 'none' }}
            >
              <VideoCard
                title={item.title}
                badges={item.badges.map(item => item.name)}
                urlThumbnail={item.urlThumbnail}
                shop={item.shop}
                viewed={item.viewed}
              />
            </NavLink>
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};
