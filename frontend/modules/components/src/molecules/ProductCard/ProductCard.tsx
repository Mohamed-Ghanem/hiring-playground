import React, { useEffect, useState } from 'react';
import { Popover } from 'antd';
import { useNetworkState } from 'react-use';

import { ProductCardProps } from './types';

import styles from './ProductCard.module.scss';

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  description,
  price,
  onAddToCart,
}) => {
  const networkState = useNetworkState();
  const [networkIsOnline, setNetworkIsOnline] = useState(false);

  useEffect(() => {
    setNetworkIsOnline(networkState.online || false);
  }, [networkState.online]);

  return (
    <div className={styles.productCard}>
      <Popover title="Description" content={description} trigger="hover">
        <img src={image} alt={title} className={styles.productImage} />
      </Popover>
      <h2 className={styles.productTitle}>{title}</h2>
      <p className={styles.productDescription}>{description}</p>
      <p className={styles.productPrice}>{price}€</p>
      <button
        onClick={() => onAddToCart(id)}
        className={styles.addToCartButton}
        disabled={!networkIsOnline}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
