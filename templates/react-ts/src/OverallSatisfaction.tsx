import RatingContainer from './RatingContainer';
import './OverallSatisfaction.css';

export interface OverallSatisfactionProps {
  rating: number;
}

const OverallSatisfaction = (props: OverallSatisfactionProps) => {
  return (
    <section data-testid="overall-satisfaction" className="overall-satisfaction">
      <h2>Overall Satisfaction</h2>
      <span></span>
      <RatingContainer
        productId="overall-satisfaction"
        rating={props.rating}
        clickable={false}
        productRatingChange={() => undefined}
      />
    </section>
  );
};

export default OverallSatisfaction;
