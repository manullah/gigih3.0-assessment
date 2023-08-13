import { useState } from 'react';
import { Badge, Header, VideoList } from '../components';
import { useGetBadgeList } from '../services/badges/hook';

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

      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-6">
          {badgeListHook.data?.data.map(item => (
            <Badge
              key={item._id}
              title={item.name}
              isActived={item._id === badgeActived}
              onClick={() => setBadgeActived(item._id)}
            />
          ))}
        </div>

        <VideoList badgeActived={badgeActived} searchActived={searchActived} />
      </div>
    </>
  );
};

export default IndexPage;
