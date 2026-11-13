import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";
import { useCart } from "../context/CartContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { cartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`bg-gray-800 w-full shadow-xl fixed top-0 left-0 z-50 transition-all duration-300 ${
                isScrolled ? "h-12 shadow-2xl" : "h-16"
            }`}
        >
            <div className="flex justify-between items-center h-full px-20">
                <div className="text-white">
                    <h1
                        className={`font-bold hover:cursor-pointer transition-all duration-300 ${
                            isScrolled ? "text-lg" : "text-2xl"
                        }`}
                    >
                        ShopNow
                    </h1>
                </div>
                <div className="hidden md:flex gap-6 text-white items-center">
                    <Link to="/" className="hover:cursor-pointer hover:text-gray-400">
                        <IoMdHome size={isScrolled ? 20 : 24} />
                    </Link>
                    <Link to="/checkout" className="relative hover:cursor-pointer hover:text-gray-400">
                        <IoCartOutline size={isScrolled ? 20 : 24} />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-coral text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
                <div className="hidden md:flex gap-6">
                    <Link to="/auth" className="bg-blue-500 cursor-pointer px-4 py-2 rounded text-white hover:bg-blue-600">
                        Login
                    </Link>
                    <Link to="/auth" className="bg-gray-500 cursor-pointer px-4 py-2 rounded text-white hover:bg-gray-600">
                        Signup
                    </Link>
                </div>
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <HiX size={24} /> : <IoMdMenu size={24} />}
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full flex flex-col gap-4 bg-gray-800 text-white p-4 shadow-lg">
                    <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-gray-400">
                        <IoMdHome size={22} /> Home
                    </Link>
                    <Link to="/checkout" onClick={() => setIsOpen(false)} className="relative flex items-center gap-2 hover:text-gray-400">
                        <IoCartOutline size={22} /> Checkout
                        {cartCount > 0 && (
                            <span className="bg-coral text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                    <Link
                        to="/auth"
                        onClick={() => setIsOpen(false)}
                        className="bg-blue-500 text-center px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Login
                    </Link>
                    <Link
                        to="/auth"
                        onClick={() => setIsOpen(false)}
                        className="bg-gray-500 text-center px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Signup
                    </Link>
                </div>
            )}
        </nav>
    );
}