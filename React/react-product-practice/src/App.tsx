import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { products } from "./data/products";

const App = () => {
    const handleViewProduct = (productId: number): void => {
        alert(`Viewing product with ID: ${productId}`);
    };

    return (
        <>
            <Header />

            <ProductList
                products={products}
                onViewProduct={handleViewProduct}
            />
        </>
    );
};
    
export default App;