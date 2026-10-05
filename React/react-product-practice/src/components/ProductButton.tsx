type ProductButtonProps = {
    productId: number;
    onViewProduct: (productId: number) => void;
};

const ProductButton = ({
    productId,
    onViewProduct,
}: ProductButtonProps) => {
    return (
        <button onClick={() => onViewProduct(productId)}>
            View Product
        </button>
    );
};

export default ProductButton;