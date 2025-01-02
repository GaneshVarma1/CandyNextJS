export interface CandyProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  rating?: number;
}

export interface CartItem extends CandyProduct {
  quantity: number;
}