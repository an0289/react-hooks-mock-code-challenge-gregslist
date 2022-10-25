import React, { useState, useEffect }from "react";
import ListingCard from "./ListingCard"

function ListingsContainer({ searchText }) {
  const [listings, setListings] = useState([])
  const [isFavorite, setIsFavorite] = useState(false)


useEffect(() => {
  fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then((listings) => setListings(listings))
}, [])

function handleFavoriteClick() {
  setIsFavorite((isFavorite) => !isFavorite)
}

function handleDeleteListing(id) {
  const updatedListings = listings.filter((listing) => listing.id !== id)
  setListings(updatedListings)
}

const listingsToDisplay = listings.filter((listing) => {
  if(searchText === "") return true;
  
  return listing.description.toLowerCase().includes(searchText.toLowerCase())
})

  return (
    <main>
      <ul className="cards">
        {listingsToDisplay.map((listing) => (
          <ListingCard key={listing.id} id={listing.id} description={listing.description} image={listing.image} location={listing.location} 
          isFavorite={isFavorite} onFavoriteClick={handleFavoriteClick}
          onDeleteListing={handleDeleteListing}/>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
