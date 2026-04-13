function SearchComponent({ query, setQuery, handleSearch, loading }) {
  return (
   <form onSubmit={handleSearch}>
  <input 
    type="text" 
    value={query} 
    onChange={(e) => setQuery(e.target.value)} 
    placeholder="Search reservations..." 
  />
  <button type="submit">Search</button>
</form>
    );  
}

export default SearchComponent;