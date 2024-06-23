interface Product {
    id: number;
    name: string;
    category: number;
    price: number;
}

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="p-4 w-3/4">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id} className="mb-4 p-4 border rounded shadow">
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <p>Category: {product.category}</p>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
