import { NavLink } from 'react-router-dom';
import { ProductCard } from '../..';
import { TProductResponse } from '../../../services/products/entities/response';
import { SimpleGrid } from '@mantine/core';

export type ProductListProps = {
  products: TProductResponse[];
};

export const ProductList: React.FC<ProductListProps> = props => {
  const { products = [] } = props;

  if (products.length === 0) {
    return <div>No Data.</div>;
  }

  return (
    <SimpleGrid cols={2}>
      {products.map(item => (
        <NavLink
          key={item._id}
          to={item.linkProduct}
          style={{ textDecoration: 'none' }}
        >
          <ProductCard
            title={item.title}
            urlThumbnail={item.urlThumbnail}
            price={item.price}
          />
        </NavLink>
      ))}
    </SimpleGrid>
  );
};
