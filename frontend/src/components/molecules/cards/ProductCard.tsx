import { TProductResponse } from "../../../modules/products/entities";

type ProductCardProps = {
  title: TProductResponse["title"];
  urlThumbnail: TProductResponse["urlThumbnail"];
  price: TProductResponse["price"];
};

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { title, urlThumbnail, price } = props;

  return (
    <div className="bg-white rounded-lg shadow-lg cursor-pointer">
      <img
        src={urlThumbnail}
        className="rounded-t-lg h-52 w-full object-cover"
      />

      <div className="py-3 px-2">
        <p
          className="text-gray-900 text-sm line-clamp-2 mb-1 font-light"
          title={title}
        >
          {title}
        </p>
        <p className="text-gray-600 text-xs font-bold">Rp {price}</p>
      </div>
    </div>
  );
};
