"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Logo from "@/components/icons/logo"
import useSideNav from "@/hooks/use-side-nav"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const { navItems } = useSideNav()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6 text-gray-600" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white">
        <div className="px-1">
          <div className="flex items-center gap-3 mb-8">
            <Logo />
            <span className="text-[#343C6A] font-extrabold text-lg">Soar Task</span>
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                className={cn(
                  "relative flex items-center gap-3 h-[50px] px-4 rounded-lg transition-all duration-300 group",
                  item.isActive
                    ? "bg-[#F5F7FB] text-primary-500 font-semibold"
                    : "text-[#B1B1B1] hover:bg-[#F5F7FB]"
                )}
              >
                {item.isActive && (
                  <div className="absolute left-0 top-0 h-full w-[4px] bg-primary-500 rounded-r-lg" />
                )}
                <item.Icon
                  className={cn(
                    "w-6 h-6 transition-all duration-300",
                    item.isActive ? "text-primary-500" : "text-[#B1B1B1]"
                  )}
                />
                <span className="transition-all duration-300">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
} 