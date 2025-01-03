// 'use client'
// import { useState } from 'react';
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

// import { LineChartComponent } from '../Charts/LineChart';
// import { BarChartComponent } from '../Charts/BarChart';

// import { CryptoTable } from '../Tables/CryptoTable';

// export function LeftPanel({ className }: { className?: string }) {
//     const [chartType, setChartType] = useState('line');
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
//                 className={`px-3 py-1.5 text-sm font-medium rounded-md border ${
//                   selectedRange === range
//                     ? "border-blue-500 text-blue-500"
//                     : "border-transparent text-gray-300 hover:border-gray-500 hover:text-white"
//                 }`}
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
//       <div className="bg-gray-1000 p-4 rounded-lg pb-20">
//         <CryptoTable />
//       </div>
//     </section>
//   );
// }



// 'use client';
// import { useState } from 'react';
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

// import { LineChartComponent } from '../Charts/LineChart';
// import { BarChartComponent } from '../Charts/BarChart';

// import { CryptoTable } from '../Tables/CryptoTable';

// export function LeftPanel({ className }: { className?: string }) {
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

//       <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
//         <div>
//           <h1 className="text-2xl font-bold text-white">Транзакції</h1>
//         </div>
//         <div className="flex flex-wrap items-center gap-4">
//           <Select onValueChange={(value) => setChartType(value)}>
//             <SelectTrigger className="w-28 sm:w-full bg-transparent text-white border-none">
//               <SelectValue placeholder="Charts" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="line">LineChart</SelectItem>
//               <SelectItem value="bar">Barchart</SelectItem>
//             </SelectContent>
//           </Select>

//           <div className="flex flex-wrap gap-2 bg-gray-800 px-3 py-2 rounded-lg">
//             {rangeOptions.map((range) => (
//               <button
//                 key={range}
//                 onClick={() => setSelectedRange(range)}
//                 className={`px-3 py-1.5 text-sm font-medium rounded-md border ${
//                   selectedRange === range
//                     ? "border-blue-500 text-blue-500"
//                     : "border-transparent text-gray-300 hover:border-gray-500 hover:text-white"
//                 }`}
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
//       <div className="bg-gray-1000 p-4 rounded-lg pb-20">
//         <CryptoTable />
//       </div>
//     </section>
//   );
// }


'use client';
import { useState } from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

import { LineChartComponent } from '../Charts/LineChart';
import { BarChartComponent } from '../Charts/BarChart';

import { CryptoTable } from '../Tables/CryptoTable';

export function LeftPanel({ className }: { className?: string }) {
  const [chartType, setChartType] = useState('line');
  const [selectedRange, setSelectedRange] = useState("D");
  const rangeOptions = ["D", "W", "M", "Y"];

  return (
    // <section className={`flex-1 p-4 relative ${className}`}>
    //   <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-t from-transparent via-accent to-transparent"></div>

    //   {/* Header Section */}
    //   <div className="mb-6">
    //     <h2 className="text-2xl sm:text-3xl font-bold">NCOIN/USD</h2>
    //     <p className="text-lg sm:text-xl mt-2">
    //       $14,730.00 <span className="text-red-500">-1.02%</span>
    //     </p>
    //     <div className="bg-gray-800 mt-4 rounded-lg h-1"></div>
    //   </div>

    //   {/* Controls Section */}
    //   <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
    //     <div>
    //       <h1 className="text-xl sm:text-2xl font-bold text-white">Транзакції</h1>
    //     </div>
    //     <div className="flex flex-wrap items-center gap-4">
    //       <Select onValueChange={(value) => setChartType(value)}>
    //         <SelectTrigger className="w-28 sm:w-36 bg-transparent text-white border-none">
    //           <SelectValue placeholder="Charts" />
    //         </SelectTrigger>
    //         <SelectContent>
    //           <SelectItem value="line">LineChart</SelectItem>
    //           <SelectItem value="bar">BarChart</SelectItem>
    //         </SelectContent>
    //       </Select>

    //       {/* Range Options */}
    //       <div className="flex flex-wrap gap-2 bg-gray-800 px-3 py-2 rounded-lg">
    //         {rangeOptions.map((range) => (
    //           <button
    //             key={range}
    //             onClick={() => setSelectedRange(range)}
    //             className={`px-3 py-1.5 text-sm font-medium rounded-md border ${
    //               selectedRange === range
    //                 ? "border-blue-500 text-blue-500"
    //                 : "border-transparent text-gray-300 hover:border-gray-500 hover:text-white"
    //             }`}
    //           >
    //             {range}
    //           </button>
    //         ))}
    //       </div>
    //     </div>
    //   </div>

    //   {/* Chart Section */}
    //   <div className="bg-gray-1000 p-4 rounded-lg">
    //     {chartType === 'line' ? <LineChartComponent /> : <BarChartComponent />}
    //   </div>

    //   {/* Crypto Table Section */}
    //   <div className="bg-gray-1000 p-4 rounded-lg mt-6 pb-20">
    //     <CryptoTable />
    //   </div>
    // </section>

    <section className={`flex-1 p-4 relative ${className}`}>
  <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-t from-transparent via-accent to-transparent"></div>

  {/* Header Section */}
  <div className="mb-6">
    <h2 className="text-2xl sm:text-3xl font-bold">NCOIN/USD</h2>
    <p className="text-lg sm:text-xl mt-2">
      $14,730.00 <span className="text-red-500">-1.02%</span>
    </p>
    <div className="bg-gray-800 mt-4 rounded-lg h-1"></div>
  </div>

  {/* Controls Section */}
  <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 mb-6">
    {/* NCOIN Header */}
    <div>
      <h1 className="text-xl sm:text-2xl font-bold text-white">Транзакції</h1>
    </div>
    
    <div className="flex flex-col sm:flex-row w-full gap-4 md:w-auto">
      {/* Chart Selector */}
      <Select onValueChange={(value) => setChartType(value)}>
        <SelectTrigger className="w-full sm:w-36 bg-transparent text-white border-none">
          <SelectValue placeholder="Charts" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="line">LineChart</SelectItem>
          <SelectItem value="bar">BarChart</SelectItem>
        </SelectContent>
      </Select>

      {/* Range Options */}
      {/* <div className="flex flex-wrap gap-2 bg-gray-800 px-3 py-2 rounded-lg w-full sm:w-auto">
        {rangeOptions.map((range) => (
          <button
            key={range}
            onClick={() => setSelectedRange(range)}
            className={`px-3 py-1.5 text-sm font-medium rounded-md border w-full sm:w-auto ${
              selectedRange === range
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-300 hover:border-gray-500 hover:text-white"
            }`}
          >
            {range}
          </button>
        ))}
      </div> */}


      {/* Range Options */}
<div className="flex flex-wrap items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg w-full sm:w-auto">
  {rangeOptions.map((range) => (
    <button
      key={range}
      onClick={() => setSelectedRange(range)}
      className={`px-2 py-1 text-sm font-medium rounded-md border flex-1 sm:flex-none ${
        selectedRange === range
          ? "border-blue-500 text-blue-500"
          : "border-transparent text-gray-300 hover:border-gray-500 hover:text-white"
      }`}
    >
      {range}
    </button>
  ))}
</div>

    </div>
  </div>

  {/* Chart Section */}
  <div className="bg-gray-1000 p-4 rounded-lg">
    {chartType === 'line' ? <LineChartComponent /> : <BarChartComponent />}
  </div>

  {/* Crypto Table Section */}
  <div className="bg-gray-1000 p-4 rounded-lg mt-6 pb-20">
    <CryptoTable />
  </div>
</section>

  );
}
