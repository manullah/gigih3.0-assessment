import { useState } from 'react';
import { Header, VideoList } from '../components';
import { useGetBadgeList } from '../services/badges/hook';
import { Button, Group, Paper } from '@mantine/core';

const IndexPage = () => {
  const [badgeActived, setBadgeActived] = useState('');
  const [searchActived, setSearchActived] = useState('');

  const badgeListHook = useGetBadgeList(
    {},
    {
      onSuccess: data => {
        setBadgeActived(data.data[0]._id);
      },
    }
  );

  return (
    <>
      <Header onSearch={setSearchActived} />

      <Paper p={16}>
        <Group mb={32}>
          {badgeListHook.data?.data.map(item => (
            <Button
              key={item._id}
              variant={item._id === badgeActived ? 'filled' : 'outline'}
              size="xs"
              radius="xl"
              onClick={() => setBadgeActived(item._id)}
            >
              {item.name}
            </Button>
          ))}
        </Group>

        <VideoList badgeActived={badgeActived} searchActived={searchActived} />
      </Paper>
    </>
  );
};

export default IndexPage;
