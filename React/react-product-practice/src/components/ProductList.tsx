import type { Product as ProductType } from "../types/product";
import Product from "./Product";

type ProductListProps = {
    products: ProductType[];
    onViewProduct: (productId: number) => void;
};

const ProductList = ({
    products,
    onViewProduct,
}: ProductListProps) => {
    return (
        <main>
            {products.map((product) => (
                <Product
                    key={product.id}
                    {...product}
                    onViewProduct={onViewProduct}
                />
            ))}
        </main>
    );
};

export default ProductList;