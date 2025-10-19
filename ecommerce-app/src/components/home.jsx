import { Link } from 'react-router-dom'
import shopVid from '../assets/shop-vid.mp4'

function Home(){
    return(

      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          src={shopVid}
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="relative z-10 text-center px-6 py-16 text-white">
          <h1 className="text-4xl font-bold text-[#128B47] mb-4">Welcome to BrightBuy Shop</h1>
          <p className="text-gray-700 mb-6">Your one-stop store for quality fashion, electronics, and accessories.</p>

           <Link
            to="/products"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Shop Now
          </Link>
        </div>
      </section>
      



      )
  }
  export default Home