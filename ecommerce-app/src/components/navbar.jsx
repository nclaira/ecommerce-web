import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar(){

    const [open, setOpen] = useState(false);

    return(
        <nav className="w-full px-4 md:px-10 py-4 border-b border-gray-200">
            <div className="mx-auto max-w-7xl flex items-center justify-between">
                <div className="text-xl font-semibold">
                    <h1>MyShop</h1>
                </div>

                <button
                    type="button"
                    className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
                    aria-label="Toggle menu"
                    onClick={() => setOpen((v) => !v)}
                >
                    <div className="flex flex-col items-center justify-center space-y-1.5">
                        <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
                        <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
                        <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
                    </div>
                </button>

                <div className="hidden md:flex items-center gap-8">
                    <Link to='/' className="text-gray-800 hover:text-green-700">Home</Link>
                    <Link to='/about' className="text-gray-800 hover:text-green-700">About</Link>
                    <Link to='/products' className="text-gray-800 hover:text-green-700">Products</Link>
                    <Link to='/contact' className="text-gray-800 hover:text-green-700">Contact</Link>
                </div>
            </div>

            {open && (
                <div className="md:hidden mt-3 flex flex-col gap-3">
                    <Link to='/' onClick={() => setOpen(false)} className="py-2 px-2 rounded hover:bg-gray-100">Home</Link>
                    <Link to='/about' onClick={() => setOpen(false)} className="py-2 px-2 rounded hover:bg-gray-100">About</Link>
                    <Link to='/products' onClick={() => setOpen(false)} className="py-2 px-2 rounded hover:bg-gray-100">Products</Link>
                    <Link to='/contact' onClick={() => setOpen(false)} className="py-2 px-2 rounded hover:bg-gray-100">Contact</Link>
                </div>
            )}

        </nav>

    )

}

export default Navbar;