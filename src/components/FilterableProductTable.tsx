import SearchBar from "./SearchBar"
import { useState } from "react";
import ProductTable from "./ProductTable"
import '../App.css'
import { Product } from "../App";

type ProductsProps = {
    products: Product[]
}

const FilterableProductTable = ({ products }: ProductsProps) => {

    const [searchString, setSearchString] = useState<string>("")
    const [isChecked, setIsChecked] = useState<boolean>(false)
  
    return (
        <div className="product-table">
            <SearchBar setIsChecked={setIsChecked} setSearchString={setSearchString}></SearchBar> 
            <ProductTable products={products} isChecked={isChecked} searchString={searchString} />
        </div>
        )
}

export default FilterableProductTable