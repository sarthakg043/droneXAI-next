"use client"
import Image from "next/image"
import Link from "next/link"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Menu } from "lucide-react"

type NavbarProps = {
    handleSmoothScroll?: (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>, targetId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({handleSmoothScroll}) => {
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
                <Sheet>
                    <SheetTrigger asChild>
                        <div className="lg:hidden border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg">
                            <Menu className="text-white" />
                        </div>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                        <SheetTitle>DroneX AI</SheetTitle>
                        {/* <SheetDescription>
                            Make changes to your profile here. Click save when you're done.
                        </SheetDescription> */}
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid items-center gap-4">
                                <SheetClose asChild>
                                    <h2 className="cursor-pointer" onClick={(e) => handleSmoothScroll?.(e, "home")}>Home</h2>
                                </SheetClose>
                            </div>
                            <div className="grid items-center gap-4">
                                <SheetClose asChild>
                                    <h2 className="cursor-pointer" onClick={(e) => handleSmoothScroll?.(e, "services")}>Services</h2>
                                </SheetClose>
                            </div>
                            <div className="grid items-center gap-4">
                                <SheetClose asChild>
                                    <h2 className="cursor-pointer" onClick={(e) => handleSmoothScroll?.(e, "process")}>Process</h2>
                                </SheetClose>
                            </div>
                            <div className="grid items-center gap-4">
                                <SheetClose asChild>
                                    <h2 className="cursor-pointer" onClick={(e) => handleSmoothScroll?.(e, "testimonials")}>Testimonials</h2>
                                </SheetClose>
                            </div>
                            <div className="grid items-center gap-4">
                                <SheetClose asChild>
                                    <h2 className="cursor-pointer" onClick={(e) => handleSmoothScroll?.(e, "contact")}>Contact Us</h2>
                                </SheetClose>
                            </div>
                        </div>
                        <SheetFooter>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
                <nav className="hidden lg:flex gap-6 items-center">
                    <h2 className="text-opacity-65 text-white hover:text-opacity-100 transition cursor-pointer" onClick={(e) => handleSmoothScroll?.(e, "home")}>Home</h2>
                    <h2 className="text-opacity-65 text-white hover:text-opacity-100 transition cursor-pointer" onClick={(e) => handleSmoothScroll?.(e, "services")}>Services</h2>
                    <h2 className="text-opacity-65 text-white hover:text-opacity-100 transition cursor-pointer" onClick={(e) => handleSmoothScroll?.(e, "process")}>Process</h2>
                    <h2 className="text-opacity-65 text-white hover:text-opacity-100 transition cursor-pointer" onClick={(e) => handleSmoothScroll?.(e, "testimonials")}>Testimonials</h2>
                    <h2 className="text-opacity-65 text-white hover:text-opacity-100 transition cursor-pointer" onClick={(e) => handleSmoothScroll?.(e, "contact")}>Contact Us</h2>
                    <button className="text-black bg-white/80 hover:bg-white px-4 py-2 rounded-lg transition">Book Now</button>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar