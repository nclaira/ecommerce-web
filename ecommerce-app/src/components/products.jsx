function Products(){


  const products=[
    {
      image:"./src/assets/headphone.jpg",
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
    
  ]

  


    return(
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((products, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={products.image}
                    alt={products.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2">{products.name}</h2>
                    <p className="text-gray-600">{products.price}</p>
                    </div>
                    </div>
              )
            )}
            </div>
          </div>
        )
      }


export default Products