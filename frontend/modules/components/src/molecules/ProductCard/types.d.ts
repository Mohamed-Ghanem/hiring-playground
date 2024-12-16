export interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
  onAddToCart: (string) => void;
}
