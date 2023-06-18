export type Product = {
  id: number;
  title: string;
  price: number;
  images: { [key: number]: string };
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
    createionAt: string;
    updatedAt: string;
  };
  cartQuantity: number;
  total: number;
  quantity: number;
  itemTotal: number;
};
