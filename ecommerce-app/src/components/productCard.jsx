function ProductCard({ image, name, price, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-40 sm:h-52 md:h-64 object-cover"
      />
      <div className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 text-sm sm:text-base">{price}</p>

        {/* Only show Add to Cart button if onAddToCart is provided */}
        {onAddToCart && (
          <button
            onClick={() => onAddToCart(name)}
            className="mt-3 sm:mt-4 px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
