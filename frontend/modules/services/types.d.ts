export interface ProductProps {
  sku: string;
  name: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  quantity: number;
}

export interface CartProps {
  itemId: string;
  quantity: number;
  price: number;
  name: string;
}
