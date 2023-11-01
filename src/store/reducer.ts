import { createAsyncThunk } from "@reduxjs/toolkit";
import * as actionTypes from "./actionTypes";
import { addProduct } from "./actionCreators";

const initialState: ProductState = {
  products: [
    {
      _id: "1",
      name: "book",
      price: 520,
    },
    {
      _id: "222",
      name: "straw",
      price: 2,
    },
  ],
};
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await fetch(
    "https://usman-fake-api.herokuapp.com/api/products/6542508078f1b80014806f0c"
  );
  const data = await response.json();
  addProduct(data);
  console.log(data);
  return data;
});
const reducer = (
  state: ProductState = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      const newProduct: IProduct = {
        _id: action.product._id,
        name: action.product.name,
        price: action.product.price,
      };
      return {
        ...state,
        products: state.products.concat(newProduct),
      };
    case actionTypes.REMOVE_PRODUCT:
      const updateProducts: IProduct[] = state.products.filter(
        (product) => product._id !== action.product._id
      );
      return {
        ...state,
        products: updateProducts,
      };
  }
  const productList = fetchProducts;
  return state;
};

export default reducer;
