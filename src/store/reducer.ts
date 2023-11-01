import * as actionTypes from "./actionTypes";

const initialState: ProductState = {
  products: [
    {
      _id: "1",
      name: "book",
      price: 520,
    },
    {
      _id: "1",
      name: "straw",
      price: 2,
    },
  ],
};

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
  return state;
};

export default reducer;
