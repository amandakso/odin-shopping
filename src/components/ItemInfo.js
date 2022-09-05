import React, { useEffect, useState } from "react";

const ItemInfo = (props) => {
    const details = props.details;
    console.log(details)
    const image = details.item.sprites.default;
    console.log(image);

    return (
        <div>
            <h1>{details.name}</h1>
            <h3>Cost: {details.cost}</h3>
        </div>
    )
}

export default ItemInfo;

