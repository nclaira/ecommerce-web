import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-900 py-8 md:py-10 mt-12 md:mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">


        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-green-500 mb-3 sm:mb-4 text-center md:text-left">BrightBuy Shop</h2>
          <p className="text-gray-900 text-sm sm:text-base text-center md:text-left">
            Inspiring creativity and quality in every product we deliver.  
            We blend design, technology, and passion to make your lifestyle better.
          </p>
        </div>


        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-green-500 text-center md:text-left">Quick Links</h3>
          <ul className="space-y-2 text-gray-900 text-center md:text-left">
            <li><Link to="/" className="hover:text-green-600 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-600 transition">About</Link></li>
            <li><Link to="/products" className="hover:text-green-600 transition">Products</Link></li>
            <li><Link to="/contact" className="hover:text-green-600 transition">Contact</Link></li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-green-500 text-center md:text-left">Contact Us</h3>
          <ul className="space-y-1.5 sm:space-y-2 text-gray-900 text-sm sm:text-base text-center md:text-left">
            <li>Email: info@yuukicreators.com</li>
            <li>Phone: +250 788 123 456</li>
            <li>Address: Kigali, Rwanda</li>
          </ul>

          <div className="flex justify-center md:justify-start space-x-4 mt-4 text-sm sm:text-base">
            <Link to="#" className="hover:text-green-600 transition">Facebook</Link>
            <Link to="#" className="hover:text-green-600 transition">Twitter</Link>
            <Link to="#" className="hover:text-green-600 transition">Instagram</Link>
          </div>
        </div>
      </div>


      <div className="mt-8 md:mt-10 border-t border-gray-300 pt-4 text-center text-gray-900 text-xs sm:text-sm">
        {new Date().getFullYear()} BrightBuy Shop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
