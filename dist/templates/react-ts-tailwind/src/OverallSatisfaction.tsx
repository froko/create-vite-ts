import RatingContainer from './RatingContainer';

export interface OverallSatisfactionProps {
  rating: number;
}

const OverallSatisfaction = (props: OverallSatisfactionProps) => {
  return (
    <section
      data-testid="overall-satisfaction"
      className="flex flex-col rounded-lg bg-indigo-900 p-4 drop-shadow-lg lg:p-8"
    >
      <h2 className="mb-4 text-center text-2xl font-medium text-indigo-50 lg:text-[1.8rem]">Overall Satisfaction</h2>
      <span className="grow lg:h-10"></span>
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
