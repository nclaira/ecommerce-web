// import ProductCard from './productCard';

// function Products() {
//   const products = [
//     { id:1, name: "Wireless Headphone", price: "39,000rwf", category: "assessories", image: "./src/assets/headphones.jpg" },
//     { id:2, name: "Smart Watch", price: "123,000rwf", category: "", image: "./src/assets/watch.jpg" },
//     { id:3, name: "Jacket", price: "59,000rwf", category: "fashon", image: "./src/assets/jacket.jpg" },
//     { id:4, name: "Sneakers", price: "69,000frw", category: "fashon", image: "./src/assets/sneakers.jpg" },
//     { id:5, name: "Sunglasses", price: "29,000rwf", category: "", image: "./src/assets/sunglasses.jpg" },
//     { id:6, name: "Wallet", price: "24,000rwf", category: "", image: "./src/assets/wallet.jpg" },
//     { id:7, name: "Speaker", price: "49,000rwf", category: "", image: "./src/assets/speaker.jpg" },
//     { id:8, name: "Canva Bag", price: "19,000rwf", category: "", image: "./src/assets/bag.jpg" }
//   ];

//   const handleAddToCart = (productName) => {
//     alert(`Added ${productName} to cart`);
//   };

//   return (
//     <div className="px-4 sm:px-8 py-8 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">Our Products</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
//         {products.map((product, index) => (
//           <ProductCard
//             key={index}
//             image={product.image}
//             category={product.category}
//             name={product.name}
//             price={product.price}
//             onAddToCart={handleAddToCart}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;

import ProductCard from '../components/productCard';

function Products() {
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

  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart`);
  };

  return (
    <div className="px-4 sm:px-8 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
        Our Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            category={product.category}
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
