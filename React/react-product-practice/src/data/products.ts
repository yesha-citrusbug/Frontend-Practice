import type { Product } from "../types/product";

export const products: Product[] = [
    {
        id: 1,
        name: "Laptop",
        brand: "Dell",
        price: 1000,
        stock: 5,
        seller: {
            name: "ABC Electronics",
            city: "Mumbai",
        },
    },
    {
        id: 2,
        name: "Phone",
        brand: "Samsung",
        price: 500,
        stock: 0,
        seller: {
            name: "Mobile World",
            city: "Delhi",
        },
    },
    {
        id: 3,
        name: "Headphones",
        brand: "Sony",
        price: 200,
        stock: 8,
        seller: {
            name: "Audio Store",
            city: "Pune",
        },
    },
    {
        id: 4,
        name: "Keyboard",
        brand: "Logitech",
        price: 80,
        stock: 3,
    },
    {
        id: 5,
        name: "Monitor",
        brand: "LG",
        price: 300,
        stock: 2,
        seller: {
            name: "Display Hub",
            city: "Bangalore",
        },
    },
];