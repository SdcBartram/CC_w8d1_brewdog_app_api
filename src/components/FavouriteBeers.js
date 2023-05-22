const FavouriteBeers = ({ beers,onBeerSelected }) => {

    const FavouriteBeers = beers.filter(beer => beer.isFavourite)

    return (
        <>
            <h3> Your Favourite Beers Go Here: </h3>
            <ul>
                {FavouriteBeers.map(beer => {
                    return (
                        <li key={beer.id}>
                            <button onClick={() => onBeerSelected(beer.id)}>{beer.name}</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default FavouriteBeers