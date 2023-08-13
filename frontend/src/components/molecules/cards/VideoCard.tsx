import { EyeIcon } from '@heroicons/react/20/solid';
import { TVideoResponse } from '../../../services/videos/entities/response';

type VideoCardProps = {
  title: TVideoResponse['title'];
  viewed: TVideoResponse['viewed'];
  badges: TVideoResponse['badges'][number]['name'][];
  shop: TVideoResponse['shop'];
  urlThumbnail: TVideoResponse['urlThumbnail'];
  onClick?: () => void;
};

export const VideoCard: React.FC<VideoCardProps> = props => {
  const { title, viewed, urlThumbnail, badges, shop, onClick } = props;

  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <img src={urlThumbnail} className="w-full bg-cover rounded-lg" />

      <div className="absolute top-0 p-2">
        <div className="flex gap-2">
          {badges.includes('Live') ? (
            <span className="inline-flex items-center rounded-md bg-red-500 px-1.5 py-0.5 text-xs font-bold text-white">
              Live
            </span>
          ) : null}
          <span className="inline-flex items-center rounded-md bg-gray-900/60 px-1.5 py-0.5 text-xs font-medium text-white">
            <EyeIcon className="w-3.5 mr-1" />
            {viewed}
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-2 h-32 bg-overlay-bottom flex flex-col justify-end">
        <h5 className="text-[10px] xl:text-base mb-1 line-clamp-2">{title}</h5>
        <p className="text-[8px] xl:text-xs text-gray-100/70 line-clamp-1">
          {shop}
        </p>
      </div>
    </div>
  );
};
