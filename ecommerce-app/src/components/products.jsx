function Products(){


  const products=[
    {
      image:"./src/assets/headphones.jpg",
      name:"Wireless Headphone",
      price:"$39"
    },

    {
      image:"./src/assets/watch.jpg",
      name:"Smart Watch",
      price:"$123.7"
    },

    {
      image:"./src/assets/jacket.jpg",
      name:"Jacket",
      price:"$59.99"
    },

    {
      image:"./src/assets/sneakers.jpg",
      name:"Sneakers",
      price:"$69.99"
    },
    
    {
      image:"./src/assets/sunglasses.jpg",
      name:"Sunglasses",
      price:"$29.99"
    },

    {
      image:"./src/assets/wallet.jpg",
      name:"Wallet",
      price:"$24.99"
    },

    {
      image:"./src/assets/speaker.jpg",
      name:"Speaker",
      price:"$49.99"
    },

    {
      image:"./src/assets/bag.jpg",
      name:"Canva Bag",
      price:"$19.99"
    } 
    
  ];

  // Event handler for adding to cart
  const handleAddToCart = (productName) => {
    console.log(`Added ${productName} to cart`);
  };

  


    return(
        <div className="px-4 sm:px-8 py-8 bg-gray-100 min-h-screen">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 sm:h-52 md:h-64 object-cover"
                  />
                  <div className="p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-2">{product.name}</h2>
                    <p className="text-gray-600 text-sm sm:text-base">{product.price}</p>
                    <button onClick={() => handleAddToCart(product.name)} className="mt-3 sm:mt-4 px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              )
            )}
            </div>
          </div>
        )
      }


export default Products