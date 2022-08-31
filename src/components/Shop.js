import React, { useState, useEffect } from "react";

const Shop = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const nums = [2, 3, 7, 25, 50, 88, 101, 194, 216]
        /* for generating random numbers
        while (nums.length < 9) {
            let isNew = true;
            const num = Math.floor(Math.random() * 251);
            for (let k = 0; k < nums.length; k++) {
                if (nums[k] === num) {
                    isNew = false;
                };
            }
            if (isNew === true) {
                setNums(nums.concat(num));
            }
        }
        */
        fetchItems(nums);
    }, []);

    const fetchItems = async (nums) => {
        let items = []
        for (let i = 0; i < nums.length; i++) {
            const data = await fetch(`https://pokeapi.co/api/v2/item/${nums[i]}/`);
            const response = await data.json();
            items = items.concat(response);
        }
        console.log(items);
        setItems(items);
        
    }

    return (
        <div>
            <h1>Shop Page</h1>
            {items.map((item) => (
                <h3 key={item.id}>{item.name}</h3>
            ))}

        </div>
    );
};

export default Shop;