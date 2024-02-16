import { useState } from 'react';

import OverallSatisfaction from './OverallSatisfaction';
import { Product } from './ProductModel';
import ProductSatisfaction from './ProductSatisfaction';
import './RatingApp.css';

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
      <h1>{products.map((p) => p.title).join(' - ')}</h1>
      <div data-testid="products" className="responsive-container">
        {products.map((p) => (
          <ProductSatisfaction product={p} key={p.id} productRatingChange={handleProductRatingChange} />
        ))}
        <OverallSatisfaction rating={overallRating} />
      </div>
    </>
  );
};

export default RatingApp;
