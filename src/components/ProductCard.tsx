import { Link } from 'react-router-dom';



export default function ProductCard(product: any) {
    return (
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
    )
}