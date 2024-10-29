import Image from "next/image";

export default function Home() {
    return (
        <div className="bg-pink-50 font-sans">
            {/* Hero Section */}
            <section className="text-center py-10 sm:py-16 md:py-20 bg-gradient-to-b from-pink-200 to-pink-50">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-700">
                    Dive into our world of deliciously dipped creations
                </h2>
                <button className="mt-5 px-6 sm:px-8 py-3 sm:py-4 bg-pink-600 text-white font-semibold rounded-full">
                    Start Dippin
                </button>
                <Image
                    src="/donuts-4.png"
                    alt="Picture of the author"
                    width={800}
                    height={800}
                    className="mx-auto mt-10 max-w-full h-auto"
                />
            </section>

            {/* Products Section */}
            <section className="py-10 sm:py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Product Card */}
                    <div className="bg-white shadow-lg p-5 rounded-lg text-center">
                        <Image
                            src="/chocolateD.jpeg"
                            alt="Classic Dips"
                            width={400}
                            height={200}
                            className="mx-auto w-full h-56 sm:h-64 md:h-72 object-cover rounded-lg"
                        />
                        <h3 className="text-lg sm:text-xl font-bold mt-4">Classic Dips</h3>
                        <p className="text-gray-600 mt-2">Try our timeless flavors.</p>
                        <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded">Order</button>
                    </div>

                    {/* Additional Product Cards */}
                    <div className="bg-white shadow-lg p-5 rounded-lg text-center">
                        <Image
                            src="/pinkD.jpeg"
                            alt="Adventure Dips"
                            width={400}
                            height={400}
                            className="mx-auto w-full h-56 sm:h-64 md:h-72 object-cover rounded-lg"
                        />
                        <h3 className="text-lg sm:text-xl font-bold mt-4">Adventure Dips</h3>
                        <p className="text-gray-600 mt-2">Exciting flavors for thrill seekers.</p>
                        <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded">Order</button>
                    </div>

                    <div className="bg-white shadow-lg p-5 rounded-lg text-center">
                        <Image
                            src="/nutsD.jpeg"
                            alt="Season's Dippin"
                            width={200}
                            height={200}
                            className="mx-auto w-full h-56 sm:h-64 md:h-72 object-cover rounded-lg"
                        />
                        <h3 className="text-lg sm:text-xl font-bold mt-4">Season’s Dippin</h3>
                        <p className="text-gray-600 mt-2">Fresh flavors for the season.</p>
                        <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded">Order</button>
                    </div>
                </div>
            </section>

            {/* Build Your Own Section */}
            <section className="py-10 sm:py-16 md:py-20 bg-pink-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-pink-700 mb-6">
                        Build Your Own
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Option Selectors */}
                        <div className="bg-white p-4 shadow rounded-lg">
                            <label className="block mb-2 text-left text-gray-700">Choose your donut type</label>
                            <select className="w-full p-2 border rounded">
                                <option>Classic</option>
                                <option>Glazed</option>
                                <option>Sprinkles</option>
                            </select>
                        </div>
                        <div className="bg-white p-4 shadow rounded-lg">
                            <label className="block mb-2 text-left text-gray-700">Choose your toppings</label>
                            <select className="w-full p-2 border rounded">
                                <option>Chocolate Chips</option>
                                <option>Marshmallows</option>
                                <option>Fruits</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

  
  
  