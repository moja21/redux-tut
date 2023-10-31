import * as React from "react";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import "../styles.css";
type Props = {
  product: IProduct;
  removeProduct: (product: IProduct) => void;
};

export const Product: React.FC<Props> = ({ product, removeProduct }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteProduct = React.useCallback(
    (product: IProduct) => dispatch(removeProduct(product)),
    [dispatch, removeProduct]
  );
  return (
    <div className="Product">
      <div>
        <h1>{product.name}</h1>
        <p>{product.price} $</p>
      </div>
      <button onClick={() => deleteProduct(product)}>Delete</button>
    </div>
  );
};
