const BeerDetail = ({beer}) => {

    
    return (
        <div className="beer-detail">
            <h3>{beer.name}</h3>
           <p> Description: {beer.description} </p>
           <section> Food Pairing:
            <ul>
            {beer.food_pairing.map((pairing, index) => (
                <li key={index}>{pairing}</li>
            ))}
            </ul>
        </section>
           <img id="beer_pic" src={beer.image_url} alt={`image of ${beer.name}`}></img>
        </div>
    )
}

export default BeerDetail