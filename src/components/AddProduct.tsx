import * as React from "react";
import "../styles.css";
type Props = {
  saveProduct: (product: IProduct | any) => void;
};

export const AddProduct: React.FC<Props> = ({ saveProduct }) => {
  const [product, setProduct] = React.useState<IProduct | {}>();

  const handleProductData = (e: React.FormEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewProduct = (e: React.FormEvent) => {
    e.preventDefault();
    saveProduct(product);
  };

  return (
    <form onSubmit={addNewProduct} className="Add-product">
      <input
        type="text"
        id="name"
        placeholder="Name"
        onChange={handleProductData}
      />
      <input
        type="text"
        id="price"
        placeholder="Item Price"
        onChange={handleProductData}
      />

      <button disabled={product === undefined ? true : false}>
        Add Product
      </button>
    </form>
  );
};
