const BeerSelector = ({ beers, onBeerSelected}) => {

    const handleChange = event => {
        onBeerSelected(event.target.value)
    }

    return (
        <select defaultValue="" onChange = { handleChange } >
            <option value="" disabled> Choose a beer </option> {
                beers.map(beer => {
                    return ( <
                        option key = { beer.id }
                        value = { beer.id }> {beer.name} </option>
                    )
                })
            }
        </select>
    )
}

export default BeerSelector