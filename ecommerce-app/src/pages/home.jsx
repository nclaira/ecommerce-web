import { Link } from 'react-router-dom';
import bkg2 from '../assets/bkg2.jpg';
import ProductCard from '../components/productCard';

function Home() {
  const products = [
    { id: 1, name: "Wireless Headphone", price: "39,000rwf", category: "Accessories", image: "./src/assets/headphones.jpg" },
    { id: 2, name: "Smart Watch", price: "123,000rwf", category: "Accessories", image: "./src/assets/watch.jpg" },
    { id: 3, name: "Jacket", price: "59,000rwf", category: "Fashion", image: "./src/assets/jacket.jpg" },
    { id: 4, name: "Sneakers", price: "69,000rwf", category: "Fashion", image: "./src/assets/sneakers.jpg" },
    { id: 5, name: "Sunglasses", price: "29,000rwf", category: "Accessories", image: "./src/assets/sunglasses.jpg" },
    { id: 6, name: "Wallet", price: "24,000rwf", category: "Accessories", image: "./src/assets/wallet.jpg" },
    { id: 7, name: "Speaker", price: "49,000rwf", category: "Electronics", image: "./src/assets/speaker.jpg" },
    { id: 8, name: "Canva Bag", price: "19,000rwf", category: "Fashion", image: "./src/assets/bag.jpg" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="text-left bg-gray-300 px-4 sm:px-6 md:px-10 py-8 sm:py-10 rounded-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-to-b from-gray-900 to-gray-700 mb-3 sm:mb-4">
              Welcome to BrightBuy Shop
            </h1>
            <p className="text-gray-700 text-sm sm:text-base mb-5 sm:mb-6">
              Your one-stop store for quality fashion, electronics, and accessories.
              Discover amazing deals, explore our latest collections, and enjoy shopping from the comfort of your home.
            </p>

            <Link
              to="/products"
              className="inline-block bg-green-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-green-700"
            >
              Shop Now
            </Link>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={bkg2}
              alt="BrightBuy showcase"
              className="w-full max-w-[220px] sm:max-w-sm md:max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <div className="px-4 sm:px-8 py-8 bg-gray-100">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
          Featured Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              category={product.category} 
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
