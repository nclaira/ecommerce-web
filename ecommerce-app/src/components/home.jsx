import { Link } from 'react-router-dom'

function Home(){
    return(
        
        <section className="text-center py-16 bg-gray-50">
      <h1 className="text-4xl font-bold text-[#128B47] mb-4">Welcome to BrightBuy Shop</h1>
      <p className="text-gray-700 mb-6">Your one-stop store for quality fashion, electronics, and accessories.</p>
      
       <Link
        to="/products"
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
      >
        Shop Now
      </Link>
    </section>
    )
}
export default Home