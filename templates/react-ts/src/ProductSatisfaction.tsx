import { Product } from './ProductModel';
import RatingContainer from './RatingContainer';
import './ProductSatisfaction.css';

interface ProductSatisfactionProps {
  product: Product;
  productRatingChange: (event: { productId: string; rating: number }) => void;
}

const ProductSatisfaction = (props: ProductSatisfactionProps) => {
  return (
    <div id={props.product.id} className="product-satisfaction">
      <a href={props.product.url}>{props.product.title}</a>
      <span>{props.product.description}</span>
      <RatingContainer
        productId={props.product.id}
        rating={props.product.rating}
        clickable={true}
        productRatingChange={props.productRatingChange}
      />
    </div>
  );
};

export default ProductSatisfaction;
