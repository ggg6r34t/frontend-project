import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function CartProductList() {
  const CartProductList = useSelector(
    (state: RootState) => state.cart.products
  );

  return (
    <div>
      CartProductList
      {CartProductList?.map((cartItem) => (
        <div key={cartItem.id}>
          <p>{cartItem.title}</p>
        </div>
      ))}
    </div>
  );
}
