import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Bell } from "lucide-react";

const NotificationList = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="secondary" size="icon" className=" relative rounded-full hover:bg-gray-100 h-12 w-12 hidden md:flex">
                    <Bell className="text-blue-600 h-6 w-6" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Notifications</SheetTitle>
                </SheetHeader>
                <div>
                    <div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default NotificationList;