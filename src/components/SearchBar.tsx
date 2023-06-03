import { ChangeEvent } from 'react'

type SearchBarProps = {
  setIsChecked: (isChecked: boolean) => void;
  setSearchString: (searchString: string) => void;
}

const SearchBar = ({ setSearchString, setIsChecked}: SearchBarProps) => {

  const handleInputChange: (event: any) => void = (event:ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value)
  }

  const handleCheckboxChange: (event: any) => void = (event:ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." onChange={handleInputChange} />
      <br />
      <input type="checkbox" name="stock-products" id="stock-products" onChange={handleCheckboxChange} />
      <label htmlFor="stock-products">Only show products in stock</label>
    </div>
  );
};

export default SearchBar;
