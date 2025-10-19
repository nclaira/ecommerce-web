import { Link } from 'react-router-dom'
import bkg2 from '../assets/bkg2.jpg'
// import shopVid from '../assets/shop-vid.mp4'

function Home(){



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

    return(



      <div>



      <section className="w-full min-h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="text-left bg-gray-300 px-4 sm:px-6 md:px-10 py-8 sm:py-10 rounded-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#128B47] mb-3 sm:mb-4">Welcome to BrightBuy Shop</h1>
            <p className="text-gray-700 text-sm sm:text-base mb-5 sm:mb-6">Your one-stop store for quality fashion, electronics, and accessories.</p>

            <Link
              to="/about"
              className="inline-block bg-green-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-green-700"
            >
              Shop Now
            </Link>
          </div>

          <div className="flex justify-center md:justify-end">
            <img src={bkg2} alt="BrightBuy showcase" className="w-full max-w-[220px] sm:max-w-sm md:max-w-md h-auto object-contain" />
          </div>
        </div>


      </section>


      <div className="px-4 sm:px-8 py-8 bg-gray-100 min-h-screen">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {products.map((products, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={products.image}
                    alt={products.name}
                    className="w-full h-40 sm:h-52 md:h-64 object-cover"
                  />
                  <div className="p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-2">{products.name}</h2>
                    <p className="text-gray-600 text-sm sm:text-base">{products.price}</p>
                  </div>
                </div>
              )
            )}
            </div>
          </div>

      </div>


      


      // <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      //   <video
      //     autoPlay
      //     muted
      //     loop
      //     playsInline
      //     src={shopVid}
      //     className="absolute inset-0 w-full h-full object-cover -z-10"
      //   />

      //   <div className="relative z-10 text-center px-6 py-16 text-white">
      //     <h1 className="text-4xl font-bold text-[#128B47] mb-4">Welcome to BrightBuy Shop</h1>
      //     <p className="text-gray-700 mb-6">Your one-stop store for quality fashion, electronics, and accessories.</p>

      //      <Link
      //       to="/products"
      //       className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
      //     >
      //       Shop Now
      //     </Link>
      //   </div>
      // </section>
      



      )
  }
  export default Home