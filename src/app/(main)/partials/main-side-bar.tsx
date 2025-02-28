"use client";

import Logo from "@/components/icons/logo";
import useSideNav from "@/hooks/use-side-nav";
import { cn } from "@/lib/utils";
import Link from "next/link";

const MainSideBar = () => {
    const { navItems } = useSideNav();

    return (
        <aside className="p-4 border-r bg-white relative transition-all duration-300 w-64 h-screen hidden md:block">
            <div>
                {/* Logo Section */}
                <div className="flex items-center gap-3 px-4 mb-12">
                    <Logo />
                    <span className="text-[#343C6A] font-extrabold text-lg">Soar Task</span>
                </div>

                {/* Navigation Menu */}
                <nav className="space-y-1">
                    {navItems.map((item) => (
                        <Link 
                            href={item.href} 
                            key={item.label} 
                            className={cn(
                                "relative flex items-center gap-3 h-[50px] px-4 rounded-lg transition-all duration-300 group",
                                item.isActive ? "bg-[#F5F7FB] text-primary-500 font-semibold" : "text-[#B1B1B1] hover:bg-[#F5F7FB]"
                            )}
                        >
                            {/* Active Indicator (Left Border) */}
                            {item.isActive && (
                                <div className="absolute left-0 top-0 h-full w-[4px] bg-primary-500 rounded-r-lg"></div>
                            )}
                            
                            {/* Icon */}
                            <item.Icon className={cn("w-6 h-6 transition-all duration-300", item.isActive ? "text-primary-500" : "text-[#B1B1B1]")} />
                            
                            {/* Label */}
                            <span className="transition-all duration-300">{item.label}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default MainSideBar;
