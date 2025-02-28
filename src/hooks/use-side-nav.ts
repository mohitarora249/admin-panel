"use client";

import { usePathname } from "next/navigation";
import HomeIcon from "../components/icons/home";
import AccountsIcon from "../components/icons/accounts";
import InvestmentIcon from "../components/icons/investments";
import CreditCardIcon from "../components/icons/credit-cards";
import LoanIcon from "../components/icons/loans";
import ServiceIcon from "../components/icons/services";
import PrivilegeIcon from "../components/icons/my-privileges";
import SettingsIcon from "../components/icons/settings";

const useSideNav = () => {
    
    const pathname = usePathname();
    

    const navItems = [
        {
            label: "Dashboard",
            href: "/dashboard",
            Icon: HomeIcon,
            isActive: pathname === "/dashboard",
        },
        {
            label: "Accounts",
            href: "/accounts",
            Icon: AccountsIcon,
            isActive: pathname === "/accounts",
        },
        {
            label: "Investments",
            href: "/investments",
            Icon: InvestmentIcon,
            isActive: pathname === "/investments",
        },
        {
            label: "Credit Cards",
            href: "/credit-cards",
            Icon: CreditCardIcon,
            isActive: pathname === "/credit-cards",
        },
        {
            label: "Loans",
            href: "/loans",
            Icon: LoanIcon,
            isActive: pathname === "/loans",
        },
        {
            label: "Services",
            href: "/services",
            Icon: ServiceIcon,
            isActive: pathname === "/services",
        },
        {   
            label: "My Privileges",
            href: "/my-privileges",
            Icon: PrivilegeIcon,
            isActive: pathname === "/my-privileges",
        },
        {
            label: "Settings",
            href: "/settings",
            Icon: SettingsIcon,
            isActive: pathname === "/settings",
        },
    ];

    return { navItems };
};

export default useSideNav;