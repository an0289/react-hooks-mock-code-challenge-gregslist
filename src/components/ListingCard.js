import React from "react";

function ListingCard({ description, image, location, id, isFavorite, onFavoriteClick, onDeleteListing }) {

function handleDeleteClick() {
  fetch(`http://localhost:6001/listings/${id}`, {
    method: "DELETE"
  })
    .then((r) => r.json())
    .then(() => onDeleteListing(id))
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image ? image :"https://via.placeholder.com/300x300"} alt={"description"} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={onFavoriteClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={onFavoriteClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
