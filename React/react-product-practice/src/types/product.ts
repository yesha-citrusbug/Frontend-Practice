export type Seller = {
    name: string;
    city: string;
};

export type Product = {
    id: number;
    name: string;
    brand: string;
    price: number;
    stock: number;
    seller?: Seller;
};