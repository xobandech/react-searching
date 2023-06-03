import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";
import { Product } from "../App";
type ProductTableProps = {
  products: Product[];
  isChecked: boolean;
  searchString: String;
}

function ProductTable({ products, isChecked, searchString }: ProductTableProps) {
  const rows = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(searchString.toLowerCase()) === -1) {
      return;
    }
    if (isChecked && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default ProductTable;
