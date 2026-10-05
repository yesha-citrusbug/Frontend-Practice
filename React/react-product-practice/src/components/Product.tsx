import { getStockStatus } from "../utils/productUtils";
import ProductButton from "./ProductButton";

type ProductProps = {
    id: number;
    name: string;
    brand: string;
    price: number;
    stock: number;
    seller?: {
        name: string;
        city: string;
    };
    onViewProduct: (productId: number) => void;
};

const Product = ({
    id,
    name,
    brand,
    price,
    stock,
    seller,
    onViewProduct,
}: ProductProps) => {
    const stockStatus = getStockStatus(stock);

    return (
        <div>
            <h2>{name}</h2>

            <p>Brand: {brand}</p>

            <p>Price: ${price}</p>

            <p>Status: {stockStatus}</p>

            <p>
                Seller: {seller?.name ?? "Unknown Seller"}
            </p>

            <p>
                Seller City: {seller?.city ?? "Unknown City"}
            </p>

            {stock > 0 && (
                <ProductButton
                    productId={id}
                    onViewProduct={onViewProduct}
                />
            )}

            <hr />
        </div>
    );
};

export default Product;