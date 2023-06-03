import SearchBar from "./SearchBar"
import { useState } from "react";
import ProductTable from "./ProductTable"
import '../App.css'
const FilterableProductTable = ({ products }) => {

    const [searchString, setSearchString] = useState("")
    const [isChecked, setIsChecked] = useState(false)
  
    return (
        <div className="product-table">
            <SearchBar isChecked={isChecked} setIsChecked={setIsChecked} searchString={searchString} setSearchString={setSearchString}></SearchBar> 
            <ProductTable products={products} isChecked={isChecked} searchString={searchString} />
        </div>
        )
}

export default FilterableProductTable