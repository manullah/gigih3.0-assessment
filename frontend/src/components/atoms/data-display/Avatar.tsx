type AvatarProps = {
  url: string;
};

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { url } = props;

  return <img className="inline-block h-8 w-8 rounded-full" src={url} alt="" />;
};
