function ProductCard({ image, name, price, category, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={image}
        alt={name}
        className="w-full h-40 sm:h-52 md:h-64 object-cover"
      />
      <div className="p-4 sm:p-6">
        <p className="text-gray-500 text-sm mb-2 capitalize">{category}</p>
        
        {category && (
          
          <h2 className="text-lg sm:text-xl font-semibold mb-1">{name}</h2>
        )}
        <p className="text-green-700 font-bold mb-3">{price}</p>
        {onAddToCart && (
          <button
            onClick={() => onAddToCart(name)}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
