import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Bell } from "lucide-react";
import { useNotificationsQuery } from "@/hooks/use-notifications-query";

const NotificationList = () => {
    const { data: notifications = [] } = useNotificationsQuery();

    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="secondary" size="icon" className="relative rounded-full hover:bg-gray-100 h-12 w-12 hidden md:flex">
                    <Bell className="text-blue-600 h-6 w-6" />
                    {notifications.length > 0 && (
                        <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                            {notifications.length}
                        </span>
                    )}
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Notifications</SheetTitle>
                </SheetHeader>
                <div className="mt-4 space-y-3 max-h-[calc(100vh-8rem)] overflow-y-auto">
                    {notifications.length > 0 ? (
                        notifications.map((notification) => (
                            <div key={notification.id} className="p-3 border-b border-gray-200 rounded-lg shadow-sm">
                                <p className="font-semibold">{notification.title}</p>
                                <p className="text-gray-600 text-sm">{notification.message}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center">No new notifications</p>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default NotificationList;
