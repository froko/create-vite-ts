import { Product } from './ProductModel';
import RatingContainer from './RatingContainer';

interface ProductSatisfactionProps {
  product: Product;
  productRatingChange: (event: { productId: string; rating: number }) => void;
}

const ProductSatisfaction = (props: ProductSatisfactionProps) => {
  return (
    <div id={props.product.id} className="flex h-full flex-col rounded-xl bg-indigo-100 p-2 drop-shadow-lg lg:p-8">
      <a href={props.product.url} className="mb-4 text-center text-2xl font-medium text-indigo-900 lg:text-3xl">
        {props.product.title}
      </a>
      <span className="text-center">{props.product.description}</span>
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
