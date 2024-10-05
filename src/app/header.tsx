import Link from 'next/link';

export default function Headers() {
  return (
    <div className="bg-pink-50 font-sans">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center p-5 bg-white shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-pink-600">Dippin Donuts</h1>
        <nav>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-pink-600 mt-4 md:mt-0">
            <li><Link href="#home" className="hover:text-pink-500">Home</Link></li>
            <li><Link href="#about us" className="hover:text-pink-500">About Us</Link></li>
            <li><Link href="#order online" className="hover:text-pink-500">Order Online</Link></li>
            <li><Link href="#menu" className="hover:text-pink-500">Menu</Link></li>
            <li><Link href="#locations" className="hover:text-pink-500">Locations</Link></li>
            <li><Link href="#contact" className="hover:text-pink-500">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
