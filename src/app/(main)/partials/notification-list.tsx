import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Bell } from "lucide-react";

const notifications = [
    { id: 1, title: "New Transaction Alert", message: "A transaction of $1,250.00 was made on Card •••• 5678 at Amazon." },
    { id: 2, title: "Fraud Alert", message: "Suspicious activity detected on account #123456789. Review the transaction history now." },
    { id: 3, title: "Card Issued", message: "A new virtual card ending in 3421 has been successfully issued to John Doe." },
    { id: 4, title: "Chargeback Initiated", message: "A chargeback of $250.00 has been initiated on transaction TXN12345." },
    { id: 5, title: "Recurring Payment Processed", message: "Subscription payment of $49.99 for Netflix has been successfully processed." },
    { id: 6, title: "Low Balance Warning", message: "Account #987654321 balance has dropped below $100.00. Consider adding funds." },
    { id: 7, title: "Payment Approved", message: "Payment of $5,000.00 to Acme Corp has been approved by the admin." },
    { id: 8, title: "Security Alert", message: "Multiple failed login attempts detected on Admin Dashboard. Reset password if this wasn’t you." },
    { id: 9, title: "Card Blocked", message: "Card ending in 7890 has been temporarily blocked due to unusual spending patterns." },
    { id: 10, title: "Monthly Statement Ready", message: "Your January 2025 bank statement is now available for download." }
];

const NotificationList = () => {
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
                <div className="mt-4 space-y-3">
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
