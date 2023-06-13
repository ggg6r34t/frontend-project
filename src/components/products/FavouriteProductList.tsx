import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function FavoriteProductList() {
  const favProductList = useSelector(
    (state: RootState) => state.products.favProduct
  );

  return (
    <div>
      FavoriteProductList
      {favProductList?.map((favItem) => (
        <div key={favItem.id}>
          <p>{favItem.title}</p>
        </div>
      ))}
    </div>
  );
}
