// 'use client'
// import { useState } from 'react';
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";
// import { BiTransfer } from "react-icons/bi";
// import { FiBell, FiSettings } from 'react-icons/fi';
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
// import { SiTailwindcss } from 'react-icons/si';
// import { PortfolioHeader } from "./PortfolioItems/PortfolioHeader";
// import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { MiniGraph } from './PortfolioItems/Charts/MiniGraph';

// // Sample data for the charts
// const chartData = [
//   { month: 'January', desktop: 4000 },
//   { month: 'February', desktop: 3000 },
//   { month: 'March', desktop: 2000 },
//   { month: 'April', desktop: 2780 },
//   { month: 'May', desktop: 1890 },
//   { month: 'June', desktop: 2390 },
//   { month: 'July', desktop: 3490 },
// ];

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "hsl(var(--chart-1))",
//   },
// };



// function getLineColor(value: number) {
//   return value > 3000 ? "hsl(var(--chart-1))" : "hsl(var(--chart-2))";
// }

// function LineChartComponent() {
//   return (
//     <ChartContainer config={chartConfig} className="border-0">
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart
//           accessibilityLayer
//           data={chartData}
//           margin={{
//             left: 12,
//             right: 12,
//             top: 20,
//             bottom: 20,
//           }}
//         >
//           <CartesianGrid vertical={false} stroke="#555" />
//           <XAxis
//             dataKey="month"
//             tickLine={false}
//             axisLine={false}
//             tickMargin={8}
//             tickFormatter={(value) => value.slice(0, 3)}
//             stroke="#bbb"
//           />
//           <YAxis
//             tickLine={false}
//             axisLine={false}
//             tickFormatter={(value) => `$${value}`}
//             tickMargin={10}
//             stroke="#bbb"
//           />
//           <Tooltip content={<ChartTooltipContent hideLabel />} cursor={false} />
//           <Line
//             dataKey="desktop"
//             type="linear"
//             stroke={getLineColor(chartData[chartData.length - 1].desktop)}
//             strokeWidth={2}
//             dot={false}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </ChartContainer>
//   );
// }

// function BarChartComponent() {
//   return (
//     <ChartContainer config={chartConfig} className="border-0">
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart
//           accessibilityLayer
//           data={chartData}
//           margin={{
//             left: 12,
//             right: 12,
//             top: 20,
//             bottom: 20,
//           }}
//         >
//           <CartesianGrid vertical={false} stroke="#555" />
//           <XAxis
//             dataKey="month"
//             tickLine={false}
//             axisLine={false}
//             tickMargin={8}
//             tickFormatter={(value) => value.slice(0, 3)}
//             stroke="#bbb"
//           />
//           <YAxis
//             tickLine={false}
//             axisLine={false}
//             tickFormatter={(value) => `$${value}`}
//             tickMargin={10}
//             stroke="#bbb"
//           />
//           <Tooltip content={<ChartTooltipContent hideLabel />} cursor={false} />
//           <Bar
//             dataKey="desktop"
//             fill={getLineColor(chartData[chartData.length - 1].desktop)}
//           />
//         </BarChart>
//       </ResponsiveContainer>
//     </ChartContainer>
//   );
// }

// const generateRandomData = (baseValue: number, range: number, length: number) => {
//   return Array.from({ length }, () => baseValue + Math.random() * range - range / 2);
// };

// const createTableData = (period: string, currency: string) => [
//   { id: 1, token: currency.toUpperCase(), price: `$${(Math.random() * 100).toFixed(2)}`, change: `${(Math.random() * 10 - 5).toFixed(2)}%`, market: `+${(Math.random() * 500).toFixed(2)} ${currency.toUpperCase()}`, graphData: generateRandomData(50, 10, 7), graphColor: '#EF4444' },
//   { id: 2, token: 'Bcoin', price: `$${(Math.random() * 100).toFixed(2)}`, change: `${(Math.random() * 10 - 5).toFixed(2)}%`, market: `+${(Math.random() * 500).toFixed(2)} Bcoin`, graphData: generateRandomData(15, 5, 7), graphColor: '#10B981' },
//   { id: 3, token: 'Ecoin', price: `$${(Math.random() * 100).toFixed(2)}`, change: `${(Math.random() * 10 - 5).toFixed(2)}%`, market: `+${(Math.random() * 500).toFixed(2)} Ecoin`, graphData: generateRandomData(25, 8, 7), graphColor: '#EF4444' },
//   { id: 4, token: 'Gcoin', price: `$${(Math.random() * 100).toFixed(2)}`, change: `${(Math.random() * 10 - 5).toFixed(2)}%`, market: `+${(Math.random() * 500).toFixed(2)} Gcoin`, graphData: generateRandomData(75, 15, 7), graphColor: '#10B981' },
//   { id: 5, token: 'Lcoin', price: `$${(Math.random() * 100).toFixed(2)}`, change: `${(Math.random() * 10 - 5).toFixed(2)}%`, market: `+${(Math.random() * 500).toFixed(2)} Lcoin`, graphData: generateRandomData(30, 10, 7), graphColor: '#EF4444' },
// ];


// function TableFilter({ onFilterChange }: { onFilterChange: (value: string) => void }) {
//   return (
//     <div className="mb-4 flex space-x-4">
//       <Select onValueChange={onFilterChange} defaultValue="today">
//         <SelectTrigger className="w-[180px] bg-gray-700 text-white border-none">
//           <SelectValue placeholder="Select period" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectItem value="today">Today</SelectItem>
//           <SelectItem value="this-week">This Week</SelectItem>
//           <SelectItem value="last-week">Last Week</SelectItem>
//         </SelectContent>
//       </Select>
//       <Select defaultValue="ncoin">
//         <SelectTrigger className="w-28 bg-transparent text-white border-none">
//           <SelectValue placeholder="NCOIN" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectItem value="ncoin">NCOIN</SelectItem>
//           <SelectItem value="btc">BTC</SelectItem>
//         </SelectContent>
//       </Select>
//     </div>
//   );
// }

// function CryptoTable() {
//   const [period, setPeriod] = useState('today');
//   const [currency, setCurrency] = useState('ncoin');
//   const tableData = createTableData(period, currency);

//   return (
//     <>



//       <div className="flex justify-between mb-6">
//         <div>
//           <h1 className="text-2xl font-bold text-white">Транзакції</h1>
//         </div>
//         <div>
//           <TableFilter
//             onFilterChange={(value) => {
//               if (['today', 'this-week', 'last-week'].includes(value)) {
//                 setPeriod(value);
//               } else {
//                 setCurrency(value);
//               }
//             }}




//           />

//         </div>
//       </div>

//       <Table className="bg-[#0F0F0F] border border-none">
//         <TableHeader>
//           <TableRow className="border-b border-gray-700">
//             <TableHead className="px-10 py-2">#</TableHead>
//             <TableHead className="px-4 py-2">Токен</TableHead>
//             <TableHead className="px-4 py-2">Ціна</TableHead>
//             <TableHead className="px-4 py-2">24h</TableHead>
//             <TableHead className="px-4 py-2">Торгівля</TableHead>
//             <TableHead className="px-4 py-2">Ринок</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {tableData.map((row) => (
//             <TableRow key={row.id} className="hover:bg-gray-700 border-b border-gray-700">
//               <TableCell className="px-4 py-2">{row.id}</TableCell>
//               <TableCell className="px-4 py-5">{row.token}</TableCell>
//               <TableCell className="px-4 py-2">{row.price}</TableCell>
//               <TableCell className={`px-4 py-2 ${row.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
//                 {row.change}
//               </TableCell>
//               <TableCell className="px-4 py-2">
//                 <MiniGraph data={row.graphData} color={row.graphColor} />
//               </TableCell>
//               <TableCell className="px-4 py-2 text-green-500">{row.market}</TableCell>

//               <TableCell className="px-4 py-2"></TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </>
//   );
// }



// function LeftPanel() {
//   const [chartType, setChartType] = useState('line');
//   const [selectedRange, setSelectedRange] = useState("D");
//   const rangeOptions = ["D", "W", "M", "Y"];

//   return (
//     <section className="flex-1 p-4 relative">
//       <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-t from-transparent via-accent to-transparent"></div>

//       <div className="mb-6">
//         <h2 className="text-3xl font-bold">NCOIN/USD</h2>
//         <p className="text-xl mt-2">
//           $14,730.00 <span className="text-red-500">-1.02%</span>
//         </p>
//         <div className="bg-gray-800 mt-4 rounded-lg"></div>
//       </div>

//       <div className="flex justify-between mb-6">
//         <div>
//           <h1 className="text-2xl font-bold text-white">Транзакції</h1>
//         </div>
//         <div>
//           <Select onValueChange={(value) => setChartType(value)}>
//             <SelectTrigger className="w-28 bg-transparent text-white border-none">
//               <SelectValue placeholder="Charts" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="line">LineChart</SelectItem>
//               <SelectItem value="bar">Barchart</SelectItem>
//             </SelectContent>
//           </Select>

//           <div className="flex gap-2 bg-gray-800 px-3 py-2 rounded-lg">
//             {rangeOptions.map((range) => (
//               <button
//                 key={range}
//                 onClick={() => setSelectedRange(range)}
//                 className={`px-3 py-1.5 text-sm font-medium rounded-md border ${selectedRange === range
//                     ? "border-blue-500 text-blue-500"
//                     : "border-transparent text-gray-300 hover:border-gray-500 hover:text-white"
//                   }`}
//               >
//                 {range}
//               </button>
//             ))}
//           </div>


//         </div>


//       </div>

//       <div className="bg-gray-1000 p-4 rounded-lg">
//         {chartType === 'line' ? <LineChartComponent /> : <BarChartComponent />}
//       </div>
//       <div className="bg-gray-1000 p-4 rounded-lg">
//         <CryptoTable />
//       </div>
//     </section>
//   );
// }

// function RightPanel() {
//   return (
//     <aside className="w-full md:w-96">
//       <Card className="bg-gray-800 border-none text-gray-300 p-6 mb-6">
//         <h3 className="text-lg font-bold">Кошти на рахунку</h3>
//         <p className="text-3xl font-bold mt-2">$3,753.15</p>
//         <p className="text-sm text-green-500 mt-1">▲ $173.85</p>
//         <p className="text-sm text-gray-400 mt-4">1 NCOIN = $0.5112</p>

//         <div className="space-y-4 mt-6 relative">
//           <div className="flex justify-between items-center bg-gray-700 rounded-lg p-3">
//             <span className="text-sm text-gray-400">Віддати</span>
//             <div className="flex items-center gap-2">
//               <Input
//                 type="number"
//                 placeholder="0.00"
//                 className="w-24 bg-transparent text-white border-none focus:ring-0 focus:outline-none"
//               />
//               <Select>
//                 <SelectTrigger className="w-28 bg-transparent text-white border-none">
//                   <SelectValue placeholder="NCOIN" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="ncoin">NCOIN</SelectItem>
//                   <SelectItem value="btc">BTC</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//               <button
//                 className="bg-white p-2 rounded-full border border-gray-600 shadow-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500"
//               >
//                 <BiTransfer className="h-6 w-6 text-gray-800 rotate-90" />
//               </button>
//             </div>
//           </div>

//           <div className="flex justify-between items-center bg-gray-700 rounded-lg p-3">
//             <span className="text-sm text-gray-400">Отримати</span>
//             <div className="flex items-center gap-2">
//               <Input
//                 type="number"
//                 placeholder="0.00"
//                 className="w-24 bg-transparent text-white border-none focus:ring-0 focus:outline-none"
//               />
//               <Select>
//                 <SelectTrigger className="w-28 bg-transparent text-white border-none">
//                   <SelectValue placeholder="USDT" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="usdt">USDT</SelectItem>
//                   <SelectItem value="eth">ETH</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//         </div>

//         <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full mt-4 py-2 text-lg font-semibold">
//           Придбати Tether US
//         </Button>
//       </Card>

//       <Card className="bg-gray-800 border-none text-gray-300 p-6">
//         <h3 className="text-lg font-bold">Завдання</h3>
//         <div className="mt-4 text-gray-400">Немає завдань.</div>
//       </Card>
//     </aside>
//   );
// }

// export default function HomePage() {
//   return (
//     <div className="bg-[#0F0F0F] min-h-screen text-white">
//       <PortfolioHeader />

//       <main className="p-6 flex flex-col md:flex-row gap-6">
//         <LeftPanel />
//         <RightPanel />
//       </main>
//     </div>
//   );
// }




'use client'
import { PortfolioHeader } from "./PortfolioItems/PortfolioHeader";
import { LeftPanel } from "./PortfolioItems/Panels/LeftPanel";
import { RightPanel } from "./PortfolioItems/Panels/RightPanel";

import { User } from '@supabase/supabase-js'
import { UserProfile } from '@/types/database'


interface HomePageContentProps {
  session: {
    user: User
  }
  profile: UserProfile
}

  export default function Settings({ session, profile }: HomePageContentProps) {

  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white p-2">
      <PortfolioHeader />
      <main className="p-4 flex flex-col md:flex-row gap-6 mt-5 pt-5">
        <LeftPanel />
        <RightPanel />
      </main>
    </div>
  );
}

