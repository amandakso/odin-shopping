import React from "react";

const Item = (props) => {
    console.log(props);
    const item = props.item;
    const image = item.sprites.default;
    return (
        <div className="card">
            <div>Name: {item.name}</div>
            <img className="itemImg" src={image} alt={item.name}></img>
            <div>Cost: {item.cost}</div>
        </div>
    );
};

export default Item;