export type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
    createionAt: string;
    updatedAt: string;
  };
};

export type CartProduct = Product & {
  cartQuantity: number;
  total: number;
};

export type SortOrder = "asc" | "desc";
