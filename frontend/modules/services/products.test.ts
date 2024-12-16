import { getProducts, getCart } from './products';
import { rawData } from "./RawData";

describe('Async service functions', () => {
  
  test('getProducts should return a list of products', async () => {
    const result = await getProducts();
    expect(result).toEqual(rawData.products);
    expect(result).toHaveLength(20);
  });

  test('getCart should return a list of cart items', async () => {
    const result = await getCart();
    expect(result).toEqual(rawData.carts[0].items);
    expect(result).toHaveLength(2);
  });
});
