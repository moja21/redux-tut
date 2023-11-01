import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import "./styles.css";
import { useQuery } from "@tanstack/react-query";
import { Product } from "./components/Product";
import { AddProduct } from "./components/AddProduct";
import { addProduct, removeProduct } from "./store/actionCreators";
import { Dispatch } from "react";

const fetchProducts = async () =>
  await (
    await fetch(
      "https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=usd"
    )
  ).json();

const App: React.FC = () => {
  const { data, isLoading, error } = useQuery<IProduct[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const products: readonly IProduct[] = useSelector(
    (state: ProductState) => state.products,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveProduct = React.useCallback(
    (product: IProduct) => dispatch(addProduct(product)),
    [dispatch]
  );

  return (
    <main>
      <h1>List of Products</h1>
      <AddProduct saveProduct={saveProduct} />
      {products.map((product: IProduct) => (
        <Product
          key={product.id}
          product={product}
          removeProduct={removeProduct}
        />
      ))}
      {data?.map((product: IProduct) => (
        <Product
          key={product.id}
          product={product}
          removeProduct={removeProduct}
        />
      ))}
    </main>
  );
};

export default App;
