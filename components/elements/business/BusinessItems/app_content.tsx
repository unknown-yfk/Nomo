"use client"
import { useEffect, useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Users, BarChart2, UserCircle, PieChart, ArrowUp, ArrowDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const chartData = [
    { date: "01-08", value: 20 },
    { date: "07-10", value: 25 },
    { date: "07-11", value: 15 },
    { date: "07-12", value: 30 },
    { date: "07-13", value: 22 },
    { date: "07-14", value: 28 },
    { date: "07-15", value: 18 },
]

const transactions = [
    {
        id: "3321", image: "/main/ss.jpg", // Add the image path or URL here
        product: "Phone 123", price: "$150.50", total: "$469.89"
    },
    { id: "3322", image: "/main/ss.jpg", product: "Phone with long...", price: "$150.50", total: "$469.89" },
    { id: "3323", image: "/main/ss.jpg", product: "Phone 123", price: "$150.50", total: "$469.89" },
    { id: "3324", image: "/main/ss.jpg", product: "Phone 123", price: "$150.50", total: "$469.89" },
    { id: "3325", image: "/main/ss.jpg", product: "Phone 123", price: "$150.50", total: "$469.89" },
]

const popularItems = [
    { id: "3321", image: "/main/ss.jpg", product: "Phone 123", price: "$150.50", total: "$469.89" },
    { id: "3322", image: "/main/ss.jpg", product: "Phone with long...", price: "$150.50", total: "$469.89" },
    { id: "3323", image: "/main/ss.jpg", product: "Phone 123", price: "$150.50", total: "$469.89" },
    { id: "3324", image: "/main/ss.jpg", product: "Phone 123", price: "$150.50", total: "$469.89" },
    { id: "3325", image: "/main/ss.jpg", product: "Phone 123", price: "$150.50", total: "$469.89" },
]

const metrics = [
    { label: "Баланс", amount: "$32,123.00", change: 2.2, isPositive: true },
    { label: "Дохід", amount: "$32,123.00", change: 1.1, isPositive: false },
    { label: "Витрати", amount: "$32,123.00", change: 2.2, isPositive: true },
]



export function MainContents() {

    const [colors, setColors] = useState({ background: "", foreground: "" })

    useEffect(() => {
        const rootStyles = getComputedStyle(document.documentElement)
        const background = rootStyles.getPropertyValue("--background").trim()
        const foreground = rootStyles.getPropertyValue("--foreground").trim()
        setColors({ background, foreground })
    }, [])

    return (
        <div className="content" style={{ backgroundColor: colors.background, color: colors.foreground }}>

            <div className="space-y-8">
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
                    <Card className="bg-[var(--background)] text-[var(--foreground)]">
                        <CardContent className="flex items-center justify-between p-4 sm:p-6">
                            <div className="space-y-1">
                                <p className="text-xs sm:text-sm font-medium text-muted-foreground">Всього замовлень</p>
                                <p className="text-lg sm:text-2xl font-bold">142K</p>
                            </div>
                            <img
                                src="/business/ico2.png"
                                alt="Icon"
                                className="h-8 w-8 sm:h-8 sm:w-8 object-contain"
                            />
                        </CardContent>
                    </Card>

                    <Card className="bg-[var(--background)] text-[var(--foreground)]">
                        <CardContent className="flex items-center justify-between p-4 sm:p-6">
                            <div className="space-y-1">
                                <p className="text-xs sm:text-sm font-medium text-muted-foreground">Обсяг продажів</p>
                                <p className="text-lg sm:text-2xl font-bold">142K</p>
                            </div>
                            <img
                                src="/business/icon1.png"
                                alt="Icon"
                                className="h-8 w-8 sm:h-8 sm:w-8 object-contain"
                            />
                        </CardContent>
                    </Card>
                    <Card className="bg-[var(--background)] text-[var(--foreground)]">
                        <CardContent className="flex items-center justify-between p-4 sm:p-6">
                            <div className="space-y-1">
                                <p className="text-xs sm:text-sm font-medium text-muted-foreground">Кількість клієнтів</p>
                                <p className="text-lg sm:text-2xl font-bold">142K</p>
                            </div>

                            <img
                                src="/business/ico3.png"
                                alt="Icon"
                                className="h-8 w-8 sm:h-8 sm:w-8 object-contain"
                            />
                        </CardContent>
                    </Card>
                    <Card className="bg-[var(--background)] text-[var(--foreground)]">
                        <CardContent className="flex items-center justify-between p-4 sm:p-6">
                            <div className="space-y-1">
                                <p className="text-xs sm:text-sm font-medium text-muted-foreground">Охоплений ринці</p>
                                <p className="text-lg sm:text-2xl font-bold">142K</p>
                            </div>

                            <img
                                src="/business/ico4.png"
                                alt="Icon"
                                className="h-8 w-8 sm:h-8 sm:w-8 object-contain"
                            />
                        </CardContent>
                    </Card>
                </div>

                <Card className="bg-[var(--background)] text-[var(--foreground)]">
                    <CardContent className="p-4 sm:p-6">
                        <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div className="space-y-4 w-full sm:w-auto">
                                    <h3 className="text-lg text-white">Аналітика продажів</h3>
                                    <div className="flex flex-wrap gap-4 sm:gap-12">
                                        {metrics.map((metric, index) => (
                                            <div key={index} className="space-y-1">
                                                <p className="text-sm text-gray-500">{metric.label}</p>
                                                <p className="text-lg font-medium text-white">{metric.amount}</p>
                                                <div
                                                    className={`flex items-center gap-1 text-xs ${metric.isPositive ? "text-green-500" : "text-red-500"
                                                        }`}
                                                >
                                                    {metric.isPositive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                                                    <span>{`${metric.isPositive ? "+" : "-"}${metric.change}%`}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <Select defaultValue="week">
                                    <SelectTrigger className="w-full sm:w-[180px] bg-transparent border-gray-700 text-gray-500">
                                        <SelectValue placeholder="Select timeframe" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#1c1d20] border-gray-700 text-white">
                                        <SelectItem value="day">День</SelectItem>
                                        <SelectItem value="week">Тиждень</SelectItem>
                                        <SelectItem value="month">Місяць</SelectItem>
                                        <SelectItem value="year">Рік</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="h-[300px] mt-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={chartData}>
                                    <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis
                                        stroke="#888888"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        tickFormatter={(value) => `${value}%`}
                                    />
                                    <Area type="monotone" dataKey="value" stroke="#f97316" fill="url(#gradient)" strokeWidth={2} />
                                    <defs>
                                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#f97316" stopOpacity={0.2} />
                                            <stop offset="100%" stopColor="#f97316" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid gap-4 md:grid-cols-[auto,1fr]">
                    <Card className="h-[400px] w-full md:w-auto bg-[var(--background)] text-[var(--foreground)]">

                        <CardContent className="p-0 h-full ">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Останні операції</TableHead>
                                        <TableHead className="text-right">Всього</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {transactions.map((transaction) => (
                                        <TableRow key={transaction.id}>
                                            <TableCell className="font-medium">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={transaction.image}
                                                        alt={transaction.product}
                                                        className="h-10 w-10 rounded-lg bg-gray-800" />
                                                    <span className="whitespace-nowrap text-ellipsis max-w-[150px]">
                                                        {transaction.product}
                                                    </span>

                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right whitespace-nowrap">{transaction.total}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    <Card className="h-[400px] w-full bg-[var(--background)] text-[var(--foreground)] ">
                        <CardContent className="p-0 h-full">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[300px]">Найпопулярніші позиції</TableHead>
                                        <TableHead className="text-right hidden sm:table-cell">Ціна</TableHead>
                                        <TableHead className="text-right hidden md:table-cell">ID</TableHead>
                                        <TableHead className="text-right">Всього</TableHead>
                                        <TableHead className="w-[50px]"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {popularItems.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell className="font-medium">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={item.image}
                                                        alt={item.product}
                                                        className="h-10 w-10 rounded-lg bg-gray-800" />
                                                    {item.product}

                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right hidden sm:table-cell">{item.price}</TableCell>
                                            <TableCell className="text-right hidden md:table-cell">{item.id}</TableCell>
                                            <TableCell className="text-right">{item.total}</TableCell>
                                            <TableCell>•••</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>

        </div>
    )
}

