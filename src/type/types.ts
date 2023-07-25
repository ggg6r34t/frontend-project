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

// export type Price = {
//   value: number | undefined;
//   text: string;
// };

// export type Product = {
//   id: number;
//   name: string;
//   price: {
//     current: Price;
//     previous: Price;
//     rrp: Price;
//     isMarkedDown: boolean;
//     isOutletPrice: boolean;
//     currency: string;
//   };
//   colour: string;
//   brandName: string;
//   hasVariantColours: boolean;
//   hasMultiplePrices: boolean;
//   productCode: number;
//   productType: string;
//   url: string;
//   imageUrl: string;
//   additionalImageUrls: string[];
//   videoUrl: string | null;
//   showVideo: boolean;
//   isSellingFast: boolean;
// };

// export type ProductData = {
//   searchTerm: string;
//   categoryName: string;
//   itemCount: number;
//   redirectUrl: string;
//   products: Product[];
//   facetGroupings: {
//     advertisement: any; // Update this type if needed
//   };
// };

// {favProductList?.map((item) => {return item.products.map((favItem) => <ProductWishListItem
//   key={favItem.id}
//   favItem={favItem}
//   runAlert={runAlert}
// />)})}
