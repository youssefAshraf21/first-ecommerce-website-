import { useCart } from "../context/CartContext";

export default function Checkout() {
    const { cartItems, removeFromCart } = useCart();
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = cartItems.length > 0 ? 5.99 : 0;
    const total = subtotal + shipping;

    return (
        <div className="bg-cream min-h-screen px-6 md:px-16 py-16">
            <div className="max-w-5xl mx-auto">
                <h1 className="font-display text-3xl md:text-4xl mb-10">Checkout</h1>

                {cartItems.length === 0 ? (
                    <p className="text-ink/60">Your cart is empty.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="md:col-span-2">
                            <h2 className="font-display text-lg mb-4 border-b border-ink/10 pb-3">
                                Order Summary
                            </h2>
                            <div className="flex flex-col gap-4">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex items-center gap-4 bg-sand p-4">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover bg-white" />
                                        <div className="flex-1">
                                            <p className="font-semibold">{item.name}</p>
                                            <p className="text-sm text-ink/60">Qty: {item.quantity}</p>
                                        </div>
                                        <p className="font-display text-coral">${(item.price * item.quantity).toFixed(2)}</p>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-xs text-ink/50 hover:text-red-600 underline"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-sand p-6 h-fit">
                            <h2 className="font-display text-lg mb-4">Total</h2>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-ink/60">Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm mb-4">
                                <span className="text-ink/60">Shipping</span>
                                <span>${shipping.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-display text-lg border-t border-ink/10 pt-4 mb-6">
                                <span>Total</span>
                                <span className="text-coral">${total.toFixed(2)}</span>
                            </div>
                            <button className="w-full bg-ink text-cream font-semibold py-3 hover:bg-coral transition-colors">
                                Place Order
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}