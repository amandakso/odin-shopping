import React, { useState, useEffect } from "react";
import ItemInfo from "./ItemInfo";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
    const id = useParams().id;
    const [details, setDetails] = useState({})
    useEffect(() => {
        fetchItem(id);
    },)

    const fetchItem = async (id) => {
        const data = await fetch(`https://pokeapi.co/api/v2/item/${id}/`);
        const response = await data.json();
        const itemDetails = await response;
        setDetails(itemDetails);
        console.log(itemDetails);
    }
    
    return (
       <ItemInfo details={details}/>
    );
};

export default ItemDetails;