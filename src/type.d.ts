interface IProduct {
  id: number;
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
