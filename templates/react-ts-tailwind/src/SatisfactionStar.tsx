import { useEffect, useState } from 'react';

export interface SatisfactionStarProps {
  productId: string;
  position: number;
  checked: boolean;
  clickable: boolean;
  starClick: (event: { productId: string; rating: number }) => void;
}

const SatisfactionStar = (props: SatisfactionStarProps) => {
  const [className, setClassName] = useState('');

  useEffect(() => {
    let classes = 'fa fa-star mx-1 text-3xl';
    if (props.checked) {
      classes += ' text-orange-500';
    }
    if (props.clickable) {
      classes += ' cursor-pointer hover:text-orange-700';
    } else if (!props.checked) {
      classes += ' text-white';
    }

    setClassName(classes);
  }, [props.checked, props.clickable]);

  return (
    <span
      id={`${props.productId}-${props.position}`}
      className={className}
      role="presentation"
      onClick={() => props.starClick({ productId: props.productId, rating: props.position })}
    ></span>
  );
};

export default SatisfactionStar;
