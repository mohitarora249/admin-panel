"use client";

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  XAxis,
  YAxis,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Send } from "lucide-react"
import BankCard from "./partials/bank-card";
import RecentTransactionItem from "./partials/recent-transcation-item";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { generateInitials } from "@/lib/initials";
import BalanceChart from "@/components/charts/balance-chart";
const BankingDashboard = () => {
  const [transferAmount, setTransferAmount] = useState("525.50")

  // Weekly activity data
  const weeklyActivityData = [
    { name: "Sat", Withdraw: 450, Deposit: 230 },
    { name: "Sun", Withdraw: 350, Deposit: 120 },
    { name: "Mon", Withdraw: 320, Deposit: 250 },
    { name: "Tue", Withdraw: 450, Deposit: 370 },
    { name: "Wed", Withdraw: 150, Deposit: 230 },
    { name: "Thu", Withdraw: 380, Deposit: 230 },
    { name: "Fri", Withdraw: 380, Deposit: 320 },
  ]

  // Expense statistics data
  const expenseData = [
    { name: "Entertainment", value: 30, color: "#3b4680" },
    { name: "Bill Expense", value: 15, color: "#e67e22" },
    { name: "Others", value: 35, color: "#2c2c2c" },
    { name: "Investment", value: 20, color: "#4a6ff3" },
  ]

  // Balance history data
  const balanceHistoryData = [
    { name: "Jul", balance: 150 },
    { name: "Aug", balance: 300 },
    { name: "Sep", balance: 250 },
    { name: "Oct", balance: 450 },
    { name: "Nov", balance: 780 },
    { name: "Dec", balance: 250 },
    { name: "Jan", balance: 580 },
  ]

  // Recent transactions data
  const recentTransactions = [
    { id: 1, type: "Deposit", source: "from my Card", date: "28 January 2021", amount: -850, icon: "💳" },
    { id: 2, type: "Deposit", source: "Paypal", date: "25 January 2021", amount: 2500, icon: "🅿️" },
    { id: 3, type: "Deposit", source: "Jemi Wilson", date: "21 January 2021", amount: 5400, icon: "🔵" },
  ]

  // Quick transfer contacts
  const quickTransferContacts = [
    { id: 1, name: "Livia Bator", role: "CEO", avatar: "/placeholder.svg?height=60&width=60" },
    { id: 2, name: "Randy Press", role: "Director", avatar: "/placeholder.svg?height=60&width=60" },
    { id: 3, name: "Workman", role: "Designer", avatar: "/placeholder.svg?height=60&width=60" },
  ]

  return (
    <div className="p-4  font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">My Cards</h2>
            <div className="flex flex-col md:flex-row gap-2 w-full">
              <BankCard theme="dark" balance={5756} holder="Eddy Cusuma" expiry="12/22" cardNumber="3778 **** **** 1234" />
              <BankCard theme="light" balance={5756} holder="Eddy Cusuma" expiry="12/22" cardNumber="3778 **** **** 1234" />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4 mt-8 md:mt-0">
              <h2 className="text-2xl font-bold text-gray-800">Recent Transaction</h2>
              <Button variant="link" className="text-gray-600">
                See All
              </Button>
            </div>
            <div className="space-y-4 bg-white rounded-xl p-4">
              {recentTransactions.map((transaction) => (
                <RecentTransactionItem key={transaction.id} {...transaction} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 ">Recent Transaction</h2>
            <Card className="col-span-2">
              <CardContent className="h-[350px]"> {/* Increased height */}
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyActivityData}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar dataKey="Withdraw" fill="#2c2c2c" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="Deposit" fill="#4a6ff3" radius={[4, 4, 0, 0]} />
                    {/* <ChartLegend content={<ChartLegendContent />} /> */}
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 ">Expense Statistics</h2>
            <Card>
              <CardContent className="h-[350px]"> {/* Increased height */}
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={expenseData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120} // Prevents cutoff
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {expenseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 ">Quick Transfer</h2>
            <Card>
              <CardContent>
                <div className="flex justify-between mb-6">
                  {quickTransferContacts.map((contact) => (
                    <div key={contact.id} className="flex flex-col items-center">
                      <Avatar className="relative p-2 rounded-full w-14 h-14">
                        <AvatarImage className="rounded-full" src={`https://avatar.vercel.sh/${contact.name}`} />
                        <AvatarFallback className="rounded-full">{generateInitials(contact.name)}</AvatarFallback>
                      </Avatar>
                      <p className="font-medium text-gray-800">{contact.name}</p>
                      <p className="text-sm text-gray-500">{contact.role}</p>
                    </div>
                  ))}
                  <div className="flex items-center">
                    <Button variant="outline" size="icon" className="rounded-full h-10 w-10 p-0">
                      <span className="sr-only">Next</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    type="text"
                    placeholder="Write Amount"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                    className="rounded-full"
                  />
                  <Button className="rounded-full bg-gray-900 hover:bg-gray-800">
                    Send <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Balance History</h2>
            <Card className="h-[200px] overflow-hidden">
              <CardContent className="p-4">
                <BalanceChart balanceHistoryData={balanceHistoryData} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BankingDashboard;
