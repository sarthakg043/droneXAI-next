import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SheetButton } from "../SheetButton"

const Navbar = () => {
  return (
    <div className="bg-black w-full fixed z-50">
        <div className="container mx-auto">
            <div className="w-full py-4 flex items-center justify-between">
                <div className="flex justify-between gap-9 items-center">
                    <div className="relative">
                        <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,_rgba(252,_214,_255,_.7),_rgba(41,_216,_255,_.7),_rgba(255,_253,_128,_.7),_rgba(248,_154,_191,_.7),_rgba(252,_214,_255,_.7))] blur-md"></div>    
                        <Image
                            src="/icon_only.PNG"
                            alt="logo"
                            width={48}
                            height={48}
                            className="relative rounded-full"
                        />
                    </div>
                    <div className="text-white font-bold text-3xl sm:text-xl lg:text-3xl text-opacity-85 tracking-tight">
                        <span className='bg-[linear-gradient(to_right,#1a2a6c,#b21f1f,#fdbb2d)] text-transparent bg-clip-text'>
                            DroneX AI
                        </span>
                    </div>
                </div>
                <SheetButton />
                <nav className="hidden lg:flex gap-6 items-center">
                    <Link className="text-opacity-65 text-white hover:text-opacity-100 transition" href="/">Home</Link>
                    <Link className="text-opacity-65 text-white hover:text-opacity-100 transition" href="/services">Services</Link>
                    <Link className="text-opacity-65 text-white hover:text-opacity-100 transition" href="/process">Process</Link>
                    <Link className="text-opacity-65 text-white hover:text-opacity-100 transition" href="/testimonials">Testimonials</Link>
                    <Link className="text-opacity-65 text-white hover:text-opacity-100 transition" href="/contact">Contact Us</Link>
                    <button className="text-black bg-white/80 hover:bg-white px-4 py-2 rounded-lg transition">Book Now</button>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar