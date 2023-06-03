import "./App.css";
import FilterableProductTable from "./components/FilterableProductTable";

export type Product = {
  name: string;
  stocked: boolean;
  price: string;
  category: string;
};

const PRODUCTS: Product[] = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

const App = () => {
  return <FilterableProductTable products={PRODUCTS} />;
};

export default App;
