import React, { useEffect, useState } from 'react';

import ProductCard from '../ProductCard';
import { getProducts } from 'modules/services/products';

import { HomepageProps } from './types';
import { ProductProps } from 'modules/services/types';

import styles from './Homepage.module.scss';

const Homepage: React.FC<HomepageProps> = ({}) => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsResponse = await getProducts();
      setProducts(productsResponse);
    };
    fetchProducts();
  }, []);

  const onAddToCart = (key: string) => {
    console.log(`Added product with key ${key} to the cart.`);
  };

  return (
    <div>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard
            key={product.sku}
            id={product.sku}
            image={product.imageUrl}
            title={product.name}
            description={product.description}
            price={product.price.toString()}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
