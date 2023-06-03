const SearchBar = ({ isChecked, SearchString, setSearchString, setIsChecked}) => {

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." onChange={(event) => setSearchString(event.target.value)} />
      <br />
      <input type="checkbox" name="stock-products" id="stock-products" onChange={(event) => setIsChecked(event.target.checked)} />
      <label htmlFor="stock-products">Only show products in stock</label>
    </div>
  );
};

export default SearchBar;
