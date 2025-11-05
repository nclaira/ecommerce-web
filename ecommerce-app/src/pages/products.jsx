import { useState } from 'react';
import ProductCard from '../components/productCard';

function Products() {

  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // add product data with their categories
  const products = [
    { id: 1, name: "Wireless Headphone", price: "39,000rwf", category: "Electronics", image: "/images/headphones.jpg" },
    { id: 2, name: "Smart Watch", price: "123,000rwf", category: "Electronics", image: "/images/watch.jpg" },
    { id: 3, name: "Jacket", price: "59,000rwf", category: "Fashion", image: "/images/jacket.jpg" },
    { id: 4, name: "Sneakers", price: "69,000rwf", category: "Fashion", image: "/images/sneakers.jpg" },
    { id: 5, name: "Sunglasses", price: "29,000rwf", category: "Accessories", image: "/images/sunglasses.jpg" },
    { id: 6, name: "Wallet", price: "24,000rwf", category: "Accessories", image: "/images/wallet.jpg" },
    { id: 7, name: "Laptop", price: "899,000rwf", category: "Electronics", image: "/images/laptop.jpg" },
    { id: 8, name: "T-Shirt", price: "15,000rwf", category: "Fashion", image: "/images/T-shirt.jpg" },
    { id: 9, name: "Speaker", price: "49,000rwf", category: "Electronics", image: "/images/speaker.jpg" },
    { id: 10, name: "Canva Bag", price: "19,000rwf", category: "Fashion", image: "/images/bag.jpg" },
  ];

  // Get unique categories from products

  const categories = ['All', ...new Set(products.map(product => product.category))];

  // Filter products based on selected category

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart`);
  };

  return (
    <div className="px-4 sm:px-8 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">Our Products</h1>
      
      {/* button to filter */}
      
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedCategory === category 
                ? 'bg-green-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display filtered products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              category={product.category}
              name={product.name}
              price={product.price}
              onAddToCart={() => handleAddToCart(product.name)}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No products found in this category.
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
