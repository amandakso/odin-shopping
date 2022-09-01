import React from "react";
import { render, screen, getByDisplayValue } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Item from "./Item";

const mockItem = {
    id: 3,
    name: "great-ball",
    sprites:{
        default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png",
    },
    cost: 600,
};


describe("Item Info", () => {
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

describe("Item Amount", () => {
    it ("adds 1 with addItem button", () => {
        const{ getByRole } = render(<Item key={mockItem.id} item={mockItem} />);
        const add = screen.getByRole("button", {name: "+"});
        const input = screen.getByDisplayValue("0");
        userEvent.click(add);
        expect(input.value).toBe("1");
    });
    it ("subtracts 1 with subtractItem button", () => {
        const{ getByRole } = render(<Item key={mockItem.id} item={mockItem} />);
        const add = screen.getByRole("button", {name: "+"});
        const subtract = screen.getByRole("button", {name: "-"})
        const input = screen.getByDisplayValue("0");
        userEvent.click(add);
        userEvent.click(add);
        userEvent.click(add);
        userEvent.click(subtract);
        expect(input.value).toBe("2");
    });
    it ("changes amount quantity when user types input", () => {
        const{ getByRole } = render(<Item key={mockItem.id} item={mockItem} />);
        const input = screen.getByDisplayValue("0");
        userEvent.type(input, "50");
        expect(input.value).toMatch(/50/i);
    });
})
