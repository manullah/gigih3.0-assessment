import { useState } from "react";
import { Badge, Header, VideoList } from "../components";
import { BADGE_LIST } from "../modules/videos/constants";

const IndexPage = () => {
  const [badgeActived, setBadgeActived] = useState("Live");
  const [searchActived, setSearchActived] = useState("");

  return (
    <>
      <Header onSearch={setSearchActived} />

      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-6">
          {BADGE_LIST.map((item) => (
            <Badge
              key={item}
              title={item}
              isActived={item === badgeActived}
              onClick={setBadgeActived}
            />
          ))}
        </div>

        <VideoList badgeActived={badgeActived} searchActived={searchActived} />
      </div>
    </>
  );
};

export default IndexPage;
