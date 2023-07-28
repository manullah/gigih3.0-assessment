type BadgeProps = {
  title: string;
  isActived?: boolean;
  onClick?: (title: string) => void;
};

export const Badge: React.FC<BadgeProps> = (props) => {
  const { title, isActived, onClick } = props;

  return (
    <span
      className={`inline-flex items-center rounded-xl  px-3 py-2 text-xs font-medium  ring-1 ring-inset cursor-pointer ${
        isActived
          ? "bg-green-500/10 text-green-400 ring-green-500/20"
          : "text-white ring-gray-700"
      }`}
      onClick={() => onClick && onClick(title)}
    >
      {title}
    </span>
  );
};
