import * as actionTypes from "./actionTypes";

const initialState: ProductState = {
  products: [
    {
      id: 1,
      name: "book",
      price: "520",
    },
    {
      id: 222,
      name: "straw",
      price: "2",
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
        id: action.product.id,
        name: action.product.name,
        price: action.product.price,
      };
      return {
        ...state,
        products: state.products.concat(newProduct),
      };
    case actionTypes.REMOVE_PRODUCT:
      const updateProducts: IProduct[] = state.products.filter(
        (product) => product.id !== action.product.id
      );
      return {
        ...state,
        products: updateProducts,
      };
  }
  return state;
};

export default reducer;
