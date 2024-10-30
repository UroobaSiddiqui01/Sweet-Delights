import Image from "next/image";

export default function Home() {
    return (
      <div className="bg-pink-50 font-sans max-w-screen-2xl mx-auto">
        {/* Header */}
  
        {/* Hero Section */}
        <section className="text-center py-16 px-4 bg-gradient-to-b from-pink-200 to-pink-50">
          <h2 className="text-2xl md:text-4xl font-bold text-pink-700">Dive into our world of deliciously dipped creations</h2>
          <button className="mt-5 px-6 md:px-8 py-3 md:py-4 bg-pink-600 text-white font-semibold rounded-full">Start Dippin</button>
          <div className="mt-10 mx-auto max-w-md md:max-w-2xl lg:max-w-4xl">
            <Image
              src="/donuts-4.png"
              alt="Delicious donuts"
              width={800}
              height={800}
              className="mx-auto w-full h-auto object-cover"
            />
          </div>
        </section>
  
        {/* Products Section */}
        <section className="py-10 px-4">
          <div className="mt-10 mx-auto max-w-md md:max-w-2xl lg:max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-pink-50 shadow-lg p-5 rounded-lg text-center">
              <Image
                src="/chocolateD.jpeg"
                alt="Classic Dips"
                width={400}
                height={400}
                className="mx-auto w-40 h-40 md:w-80 md:h-80 object-cover"
              />
              <h3 className="text-lg md:text-xl font-bold mt-4">Classic Dips</h3>
              <p className="text-gray-600">Try our timeless flavors.</p>
              <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded">Order</button>
            </div>

            {/* Product 2 */}
            <div className="bg-pink-50 shadow-lg p-5 rounded-lg text-center">
              <Image
                src="/pinkD.jpeg"
                alt="Adventure Dips"
                width={400}
                height={400}
                className="mx-auto w-40 h-40 md:w-80 md:h-80 object-cover"
              />
              <h3 className="text-lg md:text-xl font-bold mt-4">Adventure Dips</h3>
              <p className="text-gray-600">Exciting flavors for thrill seekers.</p>
              <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded">Order</button>
            </div>

            {/* Product 3 */}
            <div className="bg-pink-50 shadow-lg p-5 rounded-lg text-center">
              <Image
                src="/nutsD.jpeg"
                alt="Season's Dippin"
                width={400}
                height={400}
                className="mx-auto w-40 h-40 md:w-80 md:h-80 object-cover"
              />
              <h3 className="text-lg md:text-xl font-bold mt-4">Season’s Dippin</h3>
              <p className="text-gray-600">Fresh flavors for the season.</p>
              <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded">Order</button>
            </div>
          </div>
        </section>
  
        {/* Build Your Own Section */}
        <section className="py-10 bg-pink-100 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-pink-700 mb-6">Build Your Own</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-4 shadow rounded-lg">
                <label className="block mb-2 text-left text-gray-700">Choose your donut type</label>
                <select className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-pink-300">
                  <option>Classic</option>
                  <option>Glazed</option>
                  <option>Sprinkles</option>
                </select>
              </div>
              <div className="bg-white p-4 shadow rounded-lg">
                <label className="block mb-2 text-left text-gray-700">Choose your toppings</label>
                <select className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-pink-300">
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
