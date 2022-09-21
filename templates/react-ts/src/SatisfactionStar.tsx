import { useEffect, useState } from 'react';

import './SatisfactionStar.css';

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
    let c = 'fa fa-star';
    if (props.checked) {
      c += ' checked';
    }
    if (props.clickable) {
      c += ' action';
    }

    setClassName(c);
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
