import { useState, useEffect } from 'react';
import Beer from '../components/beer'
import BeerSelector from '../components/BeerSelector';
import BeerDetail from '../components/BeerDetail';
import FavouriteBeers from '../components/FavouriteBeers';
import FoodPairingSearch from '../components/FoodPairingSearch';

const BrewdogContainer = () => {

    const [beers, setBeers] = useState([])
    const [selectedBeerId, setSelectedBeer] = useState('')
    const [filteredBeers, setFilteredBeers] = useState([])

    useEffect(() => {
        getBeers()
    }, [])

    const getBeers = () => {
        fetch("https://api.punkapi.com/v2/beers")
            .then(res => res.json())
            .then(beersData => setBeers(beersData))
    }

    const handleBeerSelected = id => {
        setSelectedBeer(id)
    }

    const selectedBeer = beers.find(beer => beer.id === Number(selectedBeerId))

    const handleFavouriteToggle = (id) => {
        const updatedBeers = beers.map((beer) => {
            return beer.id === id
            ? {...beer, isFavourite: !beer.isFavourite}
            :beer
        })
        setBeers(updatedBeers)
    }

    const handleFoodSearch = (foodInput) => {
        const filtered = beers.filter((beer) =>
          beer.food_pairing.some((pairing) =>
            pairing.toLowerCase().includes(foodInput.toLowerCase())
          )
        );
        setFilteredBeers(filtered);
      };
    

    return (
        <>
            <h2>GREAT BEER THAT'S GREAT FOR THE PLANET</h2>
            {/* <BeerSelector beers={beers} onBeerSelected={handleBeerSelected} />
            {selectedBeer ? <BeerDetail beer={selectedBeer} /> : null}
            <Beer beer={selectedBeer} onFavouriteToggle={handleFavouriteToggle} /> */}
            <h3>What are you eating?</h3>
            <FoodPairingSearch onSearch={handleFoodSearch} />
            <BeerSelector
                beers={filteredBeers.length > 0 ? filteredBeers : beers}
                onBeerSelected={handleBeerSelected}
            />
                {selectedBeer ? (
                    <>
                    <BeerDetail beer={selectedBeer} />
                    <Beer beer={selectedBeer} onFavouriteToggle={handleFavouriteToggle} />
                    </>
                ) : null}
                <FavouriteBeers beers={beers} onBeerSelected={handleBeerSelected}/>
                  
            </>
    )
}

export default BrewdogContainer
