import Link from 'next/link';

export default function Headers() { 
    return (
        <div className="bg-pink-50 font-sans">
            {/* Header */}
            <header className="flex justify-between items-center p-5 bg-white shadow-md">
                <h1 className="text-3xl font-bold text-pink-600">Dippin Donuts</h1>
                <nav>
                    <ul className="flex space-x-6 text-pink-600">
                        <li><Link href="#home">Home</Link></li>
                        <li><Link href="#about us">About Us</Link></li>
                        <li><Link href="#">Order Online</Link></li>
                        <li><Link href="#">Menu</Link></li>
                        <li><Link href="#">Locations</Link></li>
                        <li><Link href="#">Contact Us</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
