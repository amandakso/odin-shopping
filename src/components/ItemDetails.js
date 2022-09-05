import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
    const id = useParams().id;
    const [itemDetails, setItemDetails] = useState({})
    
    useEffect(() => {
        fetchItem(id);
    },[id]);

    console.log(itemDetails);
    
    const fetchItem = async (id) => {
        const data = await fetch(`https://pokeapi.co/api/v2/item/${id}/`);
        const response = await data.json();
        setItemDetails(response);
    }



    return (
        <div>
            <h1>{itemDetails.name}</h1>
            <img src={itemDetails.sprites.default} alt={itemDetails.name}></img>
            <h3>Cost: {itemDetails.cost}</h3>
            <h3>Short-Effect: {itemDetails.effect_entries[0].short_effect}</h3>
            <h3>Text: {itemDetails.flavor_text_entries[0].text}</h3>
        </div>
    );
};

export default ItemDetails;