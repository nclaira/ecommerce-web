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


// {/* <section
//       class="pt-32 relative w-full flex items-center justify-center  md:h-[100vh]">
//       <video autoplay muted loop playsinline class="w-full object-cover z-0">
//         <source src="video_bkg.mp4" type="video/mp4" />
//       </video>
//       <div class="pt-20 md:pt-32 absolute z-10 text-white text-center">
//         <h1 class="text-2xl md:text-4xl font-bold">Dive Into the World of Books</h1>
//         <p class="px-20 pb-[90px] md:pb-12 md:pt-10">Whether you love fiction, mystery, or self-growth, Book Explorer helps you find stories
//              that match your taste. Browse, search, and build your personal library of favorites</p>
        
//         <button class="absolute left-1/2 -translate-x-1/2 mt-[2000px] md:relative md:left-auto md:translate-x-0 bg-blue-600 md:mt-7 px-10 py-2 rounded text-white"><a href="browse.html">Start Exploring→</a></button>      
//       </div>
//     </section> */}

      )
  }
  export default Home