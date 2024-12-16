import { rawData } from "./RawData";
import { CartProps, ProductProps } from './types';

export const getProducts: () => Promise<ProductProps[]> = async () => {
    return rawData.products as ProductProps[]
}

export const getCart: () => Promise<CartProps[]> = async () => {
    return rawData.carts[0].items as CartProps[]
}