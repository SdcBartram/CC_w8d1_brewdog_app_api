import { useState } from "react"

const FoodPairingSearch = ({onSearch}) => {

    const [searchInput, setSearchInput] = useState('')
    
    const handleInputChange = (event) => {
        setSearchInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchInput);
        setSearchInput('');
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchInput}
            onChange={handleInputChange}
            placeholder="Type of food"
          />
          <button type="submit">Search</button>
        </form>
      )
    }


export default FoodPairingSearch;