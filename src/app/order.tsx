import Image from 'next/image';

export default function Order() {
  return (
    <div className="bg-pink-50 font-sans max-w-screen-2xl mx-auto">
      {/* Order Section */}
      <section id="order-online" className="py-10 sm:py-16 bg-pink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-pink-700 mb-6 sm:mb-10">
            Order Your Favorite Donuts Online
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Donut 1 */}
            <div className="bg-white shadow-lg p-4 sm:p-5 rounded-lg text-center">
              <Image
                src="/display01.png"
                alt="Classic Donut"
                width={200}
                height={200}
                className="mx-auto mb-4 w-full h-60 sm:h-80 object-cover rounded-lg"
              />
              <h3 className="text-lg sm:text-xl font-bold">Classic Donuts</h3>
              <p className="text-gray-600">Timeless flavors for all.</p>
              <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded">Add to Cart</button>
            </div>

            {/* Donut 2 */}
            <div className="bg-white shadow-lg p-4 sm:p-5 rounded-lg text-center">
              <Image
                src="/adventure.jpg"
                alt="Adventure Donut"
                width={200}
                height={200}
                className="mx-auto mb-4 w-full h-60 sm:h-80 object-cover rounded-lg"
              />
              <h3 className="text-lg sm:text-xl font-bold">Adventure Dips</h3>
              <p className="text-gray-600">Exciting flavors for thrill-seekers.</p>
              <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded">Add to Cart</button>
            </div>

            {/* Donut 3 */}
            <div className="bg-white shadow-lg p-4 sm:p-5 rounded-lg text-center">
              <Image
                src="/download (2).jpeg"
                alt="Seasonal Donut"
                width={200}
                height={200}
                className="mx-auto mb-4 w-full h-60 sm:h-80 object-cover rounded-lg"
              />
              <h3 className="text-lg sm:text-xl font-bold">Season’s Dippin</h3>
              <p className="text-gray-600">Fresh seasonal flavors.</p>
              <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      {/* Cart and Checkout */}
      <section className="py-10 sm:py-16 bg-pink-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-0">
          <h3 className="text-2xl sm:text-3xl font-bold text-pink-700 mb-4 sm:mb-6">Your Cart</h3>
          <p className="text-gray-600 mb-4 sm:mb-6">You have 0 items in your cart.</p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-pink-600 text-white font-semibold rounded-full">
            Proceed to Checkout
          </button>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-10 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-0">
          <h3 className="text-3xl sm:text-4xl font-bold text-pink-700 mb-4 sm:mb-6">Our Locations</h3>
          <p className="text-gray-600 mb-4 sm:mb-6">
            Visit us at our various locations across the city. Find the one nearest to you!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Location 1 */}
            <div className="bg-pink-50 p-4 sm:p-5 rounded-lg shadow-md">
              <h4 className="text-lg sm:text-xl font-bold">Downtown</h4>
              <p className="text-gray-600">123 Main Street, City Center</p>
            </div>

            {/* Location 2 */}
            <div className="bg-pink-50 p-4 sm:p-5 rounded-lg shadow-md">
              <h4 className="text-lg sm:text-xl font-bold">West Side</h4>
              <p className="text-gray-600">456 West Avenue, City West</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-10 sm:py-16 bg-pink-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-0">
          <h3 className="text-3xl sm:text-4xl font-bold text-pink-700 mb-4 sm:mb-6">Contact Us</h3>
          <p className="text-gray-600 mb-4 sm:mb-6">
            Have questions or want to give feedback? We’d love to hear from you!
          </p>

          <form className="bg-white p-6 sm:p-8 shadow-lg rounded-lg">
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
              ></textarea>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-4 shadow-md text-center text-pink-600">
        <p>© 2024 Dippin Donuts. Design By Urooba Siddiqui.</p>
      </footer>
    </div>
  );
}

