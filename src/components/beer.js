const Beer = ({beer, onFavouriteToggle}) => {
    if (!beer) {
        return null
    }

    const handleClick = () => {
        onFavouriteToggle(beer.id)
    }

    const favouriteButtonText = beer.isFavourite ? 'Remove from favourites' : 'Add to favourites'

    return (
        <>
            
            <button onClick={handleClick}>{favouriteButtonText}</button>
        
        </>
    )
}

export default Beer