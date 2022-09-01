import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Item from "./Item";

const mockItem = {
    id: 3,
    name: "great-ball",
    sprites:{
        default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png",
    },
    cost: 600,
};


describe("Item component", () => {
    it ("renders correct item name", () => {
        const{ getByText } = render(<Item key={mockItem.id} item={mockItem} />);
        expect(getByText(/great-ball/i)).toBeDefined();
    });
    it ("renders correct item image", () => {
        render(<Item key={mockItem.id} item={mockItem} />);
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png');
    });
    it ("renders correct item cost", () => {
        const{ getByText } = render(<Item key={mockItem.id} item={mockItem} />);
        expect(getByText(/600/i)).toBeDefined();
    });
})

