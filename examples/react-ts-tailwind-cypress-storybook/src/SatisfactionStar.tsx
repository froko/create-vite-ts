import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

library.add(faStar);

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
    let classes = '';
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
