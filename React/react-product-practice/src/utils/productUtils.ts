export const getStockStatus = (stock: number): string => {
    if (stock > 0) {
        return "In Stock";
    }

    return "Out of Stock";
};