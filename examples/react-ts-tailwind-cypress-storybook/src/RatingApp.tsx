import { useState } from 'react';

import OverallSatisfaction from './OverallSatisfaction';
import { Product } from './ProductModel';
import ProductSatisfaction from './ProductSatisfaction';

export interface RatingAppProps {
  products: Product[];
}

const RatingApp = (props: RatingAppProps) => {
  const totalRating = (total: number, product: Product) => total + product.rating;
  const averageRating = (products: Product[]) => Math.floor(products.reduce(totalRating, 0) / products.length);

  const [products, setProducts] = useState(props.products);
  const [overallRating, setOverallRating] = useState(averageRating(props.products));

  const handleProductRatingChange = (e: { productId: string; rating: number }) => {
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === e.productId);
    newProducts[index].rating = e.rating;

    setProducts(newProducts);
    setOverallRating(averageRating(newProducts));
  };

  return (
    <>
      <h1 className="my-4 text-center text-3xl font-semibold text-indigo-900 lg:my-12 lg:text-5xl">
        {products.map((p) => p.title).join(' - ')}
      </h1>
      <div
        data-testid="products"
        className="mx-auto mt-4 grid max-w-6xl grid-flow-row gap-4 p-4 lg:grid-flow-col lg:grid-cols-3"
      >
        {products.map((p) => (
          <ProductSatisfaction product={p} key={p.id} productRatingChange={handleProductRatingChange} />
        ))}
        <OverallSatisfaction rating={overallRating} />
      </div>
    </>
  );
};

export default RatingApp;
