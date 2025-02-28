"use client";

import { Button } from "@/components/ui/button";
import UserMenu from "@/components/user-menu";
import { Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import NotificationList from "./notification-list";
import Search from "./search";
import { MobileNav } from "./mobile-nav";

const TopBar = () => {
    const { push } = useRouter();
    return (
        <header className="top-0 left-0 w-full h-[80px] md:h-[100px] bg-white shadow-md flex items-center justify-between px-6 border-b">
            <div className="flex items-center gap-4 flex-1">
                <MobileNav />
                <h1 className="text-2xl font-semibold flex md:justify-start justify-center flex-1 text-[#343C6A]">Dashboard</h1>
            </div>
            <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center bg-[#F5F7FA] px-4 py-2 rounded-full h-12">
                    <Search />
                </div>

                <Button onClick={() => push("/settings")} variant="secondary" size="icon" className="rounded-full hover:bg-gray-100 h-12 w-12 hidden md:flex">
                    <Settings className="text-gray-600 h-6 w-6" />
                </Button>

                <NotificationList />

                <UserMenu />
            </div>
        </header>
    );
};

export default TopBar;
