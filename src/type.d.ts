interface IProduct {
  _id: string;
  name: string;
  price: number;
}

type ProductState = {
  products: IProduct[];
};

type ProductAction = {
  type: string;
  product: IProduct;
};

type DispatchType = (args: ProductAction) => ProductsAction;
