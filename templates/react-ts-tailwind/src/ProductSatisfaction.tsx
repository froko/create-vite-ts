import { Product } from './ProductModel';
import RatingContainer from './RatingContainer';

export interface ProductSatisfactionProps {
  product: Product;
  productRatingChange: (event: { productId: string; rating: number }) => void;
}

const ProductSatisfaction = (props: ProductSatisfactionProps) => {
  return (
    <section
      data-testid={props.product.id}
      className="flex flex-col rounded-xl bg-indigo-100 p-4 drop-shadow-lg lg:p-8"
    >
      <a href={props.product.url} className="mb-4 text-center text-2xl font-medium text-indigo-900 lg:text-[1.8rem]">
        {props.product.title}
      </a>
      <span className="grow text-center lg:h-10">{props.product.description}</span>
      <RatingContainer
        productId={props.product.id}
        rating={props.product.rating}
        clickable={true}
        productRatingChange={props.productRatingChange}
      />
    </section>
  );
};

export default ProductSatisfaction;
