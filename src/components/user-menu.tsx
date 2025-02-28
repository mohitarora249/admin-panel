"use client";

import { LogOut } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { generateInitials } from "@/lib/initials";

const UserMenu = () => {

    const signOutHandler = () => {
        alert("Sign out");
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className="h-12 w-12 rounded-full cursor-pointer">
                        <AvatarImage
                            src="https://avatar.vercel.sh/John Doe"
                            alt="John Doe profile picture"
                        />
                        <AvatarFallback>
                            {generateInitials("John Doe")}
                        </AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className="min-w-56 rounded-lg"
                    side="bottom"
                    align="end"
                    sideOffset={4}
                >
                    <DropdownMenuLabel className="p-0 font-normal">
                        <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                            <Avatar className="h-8 w-8 rounded-full cursor-pointer">
                                <AvatarImage
                                    src="https://avatar.vercel.sh/UU"
                                    alt="User profile picture"
                                />
                                <AvatarFallback>
                                    {generateInitials("User")}
                                </AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">
                                    John Doe
                                </span>
                                <span className="truncate text-xs">johnDoe@gmail.com</span>
                            </div>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={signOutHandler}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default UserMenu;
