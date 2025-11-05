import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar(){

    const [open, setOpen] = useState(false);

    return(
        <nav className="w-full px-3 md:px-10 py-3 md:py-4 border-b border-gray-200 bg-gradient-to-b from-gray-900 to-gray-700 text-white">
            <div className="mx-auto max-w-7xl flex items-center justify-between">
                <div className="text-xl font-semibold">
                    <h1 className="text-2xl md:text-3xl font-bold">BrightBuy</h1>
                </div>

                <button type="button" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
                        
                    <div className="flex flex-col items-center justify-center space-y-1.5">
                        <span className="block w-6 h-0.5 bg-white rounded"></span>
                        <span className="block w-6 h-0.5 bg-white rounded"></span>
                        <span className="block w-6 h-0.5 bg-white rounded"></span>
                    </div>
                </button>

                <div className="hidden md:flex items-center gap-8">
                    <Link to='/' className="text-white hover:text-green-700">Home</Link>
                    <Link to='/about' className="text-white hover:text-green-700">About</Link>
                    <Link to='/products' className="text-white hover:text-green-700">Products</Link>
                    <Link to='/contact' className="text-white hover:text-green-700">Contact</Link>
                </div>
            </div>

            {open && (
                <div className="md:hidden mt-3 flex flex-col gap-1">
                    <Link to='/' onClick={() => setOpen(false)} className="py-2 px-2 rounded hover:bg-blue-600 text-white">Home</Link>
                    <Link to='/about' onClick={() => setOpen(false)} className="py-2 px-2 rounded hover:bg-blue-600 text-white">About</Link>
                    <Link to='/products' onClick={() => setOpen(false)} className="py-2 px-2 rounded hover:bg-blue-600 text-white">Products</Link>
                    <Link to='/contact' onClick={() => setOpen(false)} className="py-2 px-2 rounded hover:bg-blue-600 text-white">Contact</Link>
                </div>
            )}

        </nav>

    )

}

export default Navbar;