import { NavLink } from 'react-router-dom';
import { ProductCard } from '../..';
import { TProductResponse } from '../../../services/products/entities/response';

export type ProductListProps = {
  products: TProductResponse[];
};

export const ProductList: React.FC<ProductListProps> = props => {
  const { products = [] } = props;

  if (products.length === 0) {
    return <div className="text-sm">No Data.</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map(item => (
        <NavLink key={item._id} to={item.linkProduct}>
          <ProductCard
            title={item.title}
            urlThumbnail={item.urlThumbnail}
            price={item.price}
          />
        </NavLink>
      ))}
    </div>
  );
};
