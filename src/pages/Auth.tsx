export default function Auth() {
    return (
        <div className="bg-cream min-h-screen px-6 md:px-16 py-16">
            <div className="max-w-5xl mx-auto">
                <h1 className="font-display text-3xl md:text-4xl mb-2">Welcome to ShopNow</h1>
                <p className="text-ink/60 mb-12">Sign in to your account or create a new one</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10">
                    {/* Login */}
                    <div className="bg-cream p-8">
                        <h2 className="font-display text-xl mb-1">Log In</h2>
                        <p className="text-sm text-ink/60 mb-6">Already have an account</p>

                        <form className="flex flex-col gap-4">
                            <div>
                                <label className="text-sm font-semibold block mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full border border-ink/20 px-3 py-2 bg-white focus:outline-none focus:border-coral"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-semibold block mb-1">Password</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full border border-ink/20 px-3 py-2 bg-white focus:outline-none focus:border-coral"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-ink text-cream font-semibold px-5 py-2.5 mt-2 hover:bg-coral transition-colors"
                            >
                                Log In
                            </button>
                        </form>
                    </div>

                    {/* Signup */}
                    <div className="bg-cream p-8">
                        <h2 className="font-display text-xl mb-1">Sign Up</h2>
                        <p className="text-sm text-ink/60 mb-6">New here? Create an account</p>

                        <form className="flex flex-col gap-4">
                            <div>
                                <label className="text-sm font-semibold block mb-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Jane Doe"
                                    className="w-full border border-ink/20 px-3 py-2 bg-white focus:outline-none focus:border-coral"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-semibold block mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full border border-ink/20 px-3 py-2 bg-white focus:outline-none focus:border-coral"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-semibold block mb-1">Password</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full border border-ink/20 px-3 py-2 bg-white focus:outline-none focus:border-coral"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-coral text-cream font-semibold px-5 py-2.5 mt-2 hover:bg-ink transition-colors"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}