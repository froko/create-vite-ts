import RatingContainer from './RatingContainer';

export interface OverallSatisfactionProps {
  rating: number;
}

const OverallSatisfaction = (props: OverallSatisfactionProps) => {
  return (
    <div id="overall-satisfaction" className="flex h-full flex-col rounded-lg bg-indigo-900 p-2 drop-shadow-lg lg:p-8">
      <h2 className="mb-4 text-center text-2xl font-medium text-indigo-50 lg:text-3xl">Overall Satisfaction</h2>
      <span className="grow"></span>
      <RatingContainer
        productId="overall-satisfaction"
        rating={props.rating}
        clickable={false}
        productRatingChange={() => undefined}
      />
    </div>
  );
};

export default OverallSatisfaction;
