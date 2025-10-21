import ProductCard from './productCard';

function Products() {
  const products = [
    { image: "./src/assets/headphones.jpg", name: "Wireless Headphone", price: "39,000rwf" },
    { image: "./src/assets/watch.jpg", name: "Smart Watch", price: "123,000rwf" },
    { image: "./src/assets/jacket.jpg", name: "Jacket", price: "59,000rwf" },
    { image: "./src/assets/sneakers.jpg", name: "Sneakers", price: "69,000frw" },
    { image: "./src/assets/sunglasses.jpg", name: "Sunglasses", price: "29,000rwf" },
    { image: "./src/assets/wallet.jpg", name: "Wallet", price: "24,000rwf" },
    { image: "./src/assets/speaker.jpg", name: "Speaker", price: "49,000rwf" },
    { image: "./src/assets/bag.jpg", name: "Canva Bag", price: "19,000rwf" }
  ];

  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart`);
  };

  return (
    <div className="px-4 sm:px-8 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
