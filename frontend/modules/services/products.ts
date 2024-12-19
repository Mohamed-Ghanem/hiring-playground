// import { rawData } from './RawData';
import { CartProps, ProductProps } from './types';

export const getProducts: () => Promise<ProductProps[]> = async () => {
  // return rawData.products as ProductProps[]
  return fetch('http://localhost:8082/products').then((data) => data.json());
};

export const getCart: () => Promise<CartProps[]> = async () => {
  //   return rawData.carts[0].items as CartProps[];
  return fetch('http://localhost:8082/carts')
    .then((data) => data.json())
    .then((data) => data[0].items);
};
