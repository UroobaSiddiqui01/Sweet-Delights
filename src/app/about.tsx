import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-pink-50 min-h-screen font-sans">
      

      {/* About Section */}
      <section id='about us' className="text-center py-16 bg-gradient-to-b from-pink-200 to-pink-50">
        <h2 className="text-4xl font-bold text-pink-700">About Dippin Donuts</h2>
        <p className="mt-5 text-gray-700 max-w-2xl mx-auto">
          At Dippin Donuts, we believe in spreading joy, one donut at a time. Since our founding, we have been committed to delivering delicious, freshly made donuts with unique, flavorful dips and toppings that brighten your day.
        </p>
        <Image
          src="/Mister-Donut2.jpg"
          alt="About Donuts"
          width={600}
          height={400}
          className="mx-auto mt-10 w-screen"
        />
      </section>

      {/* Our Story Section */}
      <section className="py-10 bg-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-pink-700 mb-6">Our Story</h3>
          <p className="text-gray-700 leading-relaxed">
            Dippin Donuts was started by a group of donut lovers who wanted to create a place where people could enjoy delicious treats, relax, and have a great time. What began as a small donut shop has now expanded into a beloved brand known for its innovative donut flavors and signature dips.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-pink-700 mb-6">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            Our mission is simple: to create happiness through donuts. We pride ourselves on using the finest ingredients to craft donuts that not only taste amazing but also bring a smile to your face.
          </p>
        </div>
      </section>

      
    </div>
  );
}
