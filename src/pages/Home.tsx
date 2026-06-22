import { getProducts } from "../data/products";
import { Link } from 'react-router-dom';
import ProductCard from "../components/ProductCard";

export default function Home() {
    const products = getProducts();

    return (
        <div className="bg-cream font-body text-ink min-h-screen">
            {/* Hero */}
            <section className="border-b border-ink/10 px-6 md:px-16 py-16 md:py-24">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <span className="inline-block bg-coral text-cream text-xs font-bold tracking-widest uppercase px-3 py-1 mb-6">
                            New Arrivals
                        </span>
                        <h1 className="font-display text-5xl md:text-6xl leading-[1.05] mb-6">
                            SHOP THE<br />
                            <span className="text-coral">EVERYDAY</span><br />
                            ESSENTIALS
                        </h1>
                        <p className="text-base text-ink/70 max-w-md mb-8">
                            Curated picks across electronics, fitness, and everyday wear —
                            honest prices, no fluff.
                        </p>
                        <a href="#products" className="inline-block bg-ink text-cream font-semibold px-7 py-3 hover:bg-coral transition-colors">
                            Browse products
                        </a>
                    </div>

                    {/* Featured product preview */}
                    {products[0] && (
                        <div className="relative bg-sand p-8 md:p-10">
                            <span className="absolute top-4 left-4 bg-gold text-ink text-xs font-bold tracking-wide uppercase px-2 py-1">
                                Featured
                            </span>
                            <img
                                src={products[0].image}
                                alt={products[0].name}
                                className="w-3/4 mx-auto"
                            />
                            <div className="mt-6 flex items-end justify-between">
                                <div>
                                    <p className="font-display text-xl">{products[0].name}</p>
                                    <p className="text-ink/60 text-sm">{products[0].category}</p>
                                </div>
                                <p className="font-display text-2xl text-coral">${products[0].price}</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Products */}
            <section id="products" className="px-6 md:px-16 py-16 md:py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-baseline justify-between mb-10 border-b border-ink/10 pb-4">
                        <h2 className="font-display text-3xl md:text-4xl">Our Products</h2>
                        <span className="text-sm text-ink/50">{products.length} items</span>
                        
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-ink/10">
                        {products.map((product) => (
                            <div key={product.id} className="bg-cream p-6 flex flex-col group">
                                <div className="relative bg-sand mb-5 p-6">
                                    <span className="absolute top-3 right-3 bg-ink text-cream text-xs font-bold px-2 py-1">
                                        ${product.price}
                                    </span>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full aspect-square object-cover"
                                    />
                                </div>

                                <p className="text-xs uppercase tracking-wider text-coral font-semibold mb-1">
                                    {product.category}
                                </p>
                                <h3 className="font-display text-lg mb-2">{product.name}</h3>
                                <p className="text-sm text-ink/60 mb-5 flex-1">{product.description}</p>

                                <div className="flex gap-2">
                                    <Link
                                        to={`/products/${product.id}`}
                                        className="flex-1 text-center border border-ink text-ink font-semibold text-sm px-3 py-2 hover:bg-ink hover:text-cream transition-colors"
                                    >
                                        View Details
                                    </Link>
                                    <button className="flex-1 bg-coral text-cream font-semibold text-sm px-3 py-2 hover:bg-ink transition-colors">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}