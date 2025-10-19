import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-900 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        

        <div>
          <h2 className="text-2xl font-bold text-green-500 mb-4">BrightBuy Shop</h2>
          <p className="text-gray-900">
            Inspiring creativity and quality in every product we deliver.  
            We blend design, technology, and passion to make your lifestyle better.
          </p>
        </div>

    
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-500">Quick Links</h3>
          <ul className="space-y-2 text-gray-900">
            <li><a href="/" className="hover:text-green-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-green-400 transition">About</a></li>
            <li><a href="/products" className="hover:text-green-400 transition">Products</a></li>
            <li><a href="/contact" className="hover:text-green-400 transition">Contact</a></li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-500">Contact Us</h3>
          <ul className="space-y-2 text-gray-900">
            <li>Email: info@yuukicreators.com</li>
            <li>Phone: +250 788 123 456</li>
            <li>Address: Kigali, Rwanda</li>
          </ul>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-green-400 transition">Facebook</a>
            <a href="#" className="hover:text-green-400 transition">Twitter</a>
            <a href="#" className="hover:text-green-400 transition">Instagram</a>
          </div>
        </div>
      </div>

       

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-900 text-sm">
        © {new Date().getFullYear()} BrightBuy Shop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
