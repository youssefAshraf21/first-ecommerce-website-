import { useParams, Link } from "react-router-dom";
import { getProducts } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
    const { id } = useParams();
    const products = getProducts();
    const product = products.find((p) => p.id === Number(id));
    const { cartItems, addToCart, removeFromCart } = useCart();

    if (!product) {
        return (
            <div className="bg-cream min-h-screen flex flex-col items-center justify-center px-6 text-center">
                <h1 className="font-display text-3xl mb-4">Product not found</h1>
                <p className="text-ink/60 mb-6">This item doesn't exist or may have been removed.</p>
                <Link to="/" className="bg-ink text-cream font-semibold px-5 py-2.5 hover:bg-coral transition-colors">
                    Back to shop
                </Link>
            </div>
        );
    }

    const isInCart = cartItems.some((item) => item.id === product.id);

    return (
        <div className="bg-cream min-h-screen px-6 md:px-16 py-16">
            <div className="max-w-5xl mx-auto">
                <Link to="/" className="text-sm text-ink/60 hover:text-coral mb-8 inline-block">
                    ← Back to products
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-sand p-10">
                        <img src={product.image} alt={product.name} className="w-full max-w-sm mx-auto" />
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-wider text-coral font-semibold mb-2">
                            {product.category}
                        </p>
                        <h1 className="font-display text-3xl md:text-4xl mb-4">{product.name}</h1>
                        <p className="font-display text-2xl text-coral mb-6">${product.price.toFixed(2)}</p>
                        <p className="text-ink/70 mb-8 leading-relaxed">{product.description}</p>

                        {isInCart ? (
                            <button
                                onClick={() => removeFromCart(product.id)}
                                className="bg-ink/80 text-cream font-semibold px-8 py-3 hover:bg-red-600 transition-colors"
                            >
                                Remove from Cart
                            </button>
                        ) : (
                            <button
                                onClick={() => addToCart(product)}
                                className="bg-ink text-cream font-semibold px-8 py-3 hover:bg-coral transition-colors"
                            >
                                Add to Cart
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}