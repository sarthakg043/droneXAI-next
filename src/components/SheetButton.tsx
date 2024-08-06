import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function SheetButton() {
  return (
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
                    <h2>Home</h2>
                </SheetClose>
            </div>
            <div className="grid items-center gap-4">
                <SheetClose asChild>
                    <h2>Services</h2>
                </SheetClose>
            </div>
            <div className="grid items-center gap-4">
                <SheetClose asChild>
                    <h2>Process</h2>
                </SheetClose>
            </div>
            <div className="grid items-center gap-4">
                <SheetClose asChild>
                    <h2>Testimonials</h2>
                </SheetClose>
            </div>
            <div className="grid items-center gap-4">
                <SheetClose asChild>
                    <h2>Contact Us</h2>
                </SheetClose>
            </div>
        </div>
        <SheetFooter>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
