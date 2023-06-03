import { Product } from "../App";
type ProductRowProps = {
  product: Product;
};

const ProductRow = ({ product }: ProductRowProps) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
