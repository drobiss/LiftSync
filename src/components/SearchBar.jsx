import "./SearchBar.css"

const SearchBar = ({ setSearchingText }) => {
  return (
    <input 
      type="text" 
      placeholder="Search exercise..."
      onChange={(e) => setSearchingText(e.target.value)}
    />
  )
}

export default SearchBar