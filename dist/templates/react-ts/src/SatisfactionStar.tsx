import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

library.add(faStar);

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

  const handleStarClick = () => {
    if (props.clickable) {
      props.starClick({ productId: props.productId, rating: props.position });
    }
  };

  useEffect(() => {
    let classes = 'icon';
    if (props.checked) {
      classes += ' checked';
    }
    if (props.clickable) {
      classes += ' action';
    }

    setClassName(classes);
  }, [props.checked, props.clickable]);

  return (
    <FontAwesomeIcon
      data-testid={`${props.productId}-${props.position}`}
      icon={['fas', 'star']}
      size="2x"
      className={className}
      role="presentation"
      onClick={handleStarClick}
    />
  );
};

export default SatisfactionStar;
