

"use client"

import * as React from "react"
import { LayoutGrid, List, ChevronRight } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

interface Product {
  id: number
  name: string
  price: string
  unit: string
  image: string
}

const products: Product[] = Array(12)
  .fill(null)
  .map((_, i) => ({
    id: i + 1,
    name: "Phone 123",
    price: "$150.50",
    unit: "Item",
    image: "/business/products/cake.png"
  }))

export function ProductsView() {
  const [viewMode, setViewMode] = React.useState<"list" | "grid">("grid")

  return (
    <div className="min-h-screen bg-black">
      <div className="space-y-4">
        <div className="flex justify-between items-center px-4 py-3">
          <h1 className="text-white text-lg">Продукти</h1>
          <div className="flex items-center gap-4">
            <div className="flex bg-[#1c1d20] rounded-md">
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-l-md transition-colors ${
                  viewMode === "list" ? "bg-[#1c1d20]" : "hover:bg-[#2a2b2f]"
                }`}
                aria-label="List view"
              >
                <List className="h-4 w-4 text-gray-400" />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-r-md transition-colors ${
                  viewMode === "grid" ? "bg-[#1c1d20]" : "hover:bg-[#2a2b2f]"
                }`}
                aria-label="Grid view"
              >
                <LayoutGrid className="h-4 w-4 text-gray-400" />
              </button>
            </div>
           

            <Select defaultValue="category">
             <SelectTrigger className="w-[120px] bg-[#FF8D2A] text-black hover:bg-[#b35429] border-none text-xs py-1 h-8">
               <SelectValue placeholder="Категорії" />
             </SelectTrigger>
             <SelectContent className="bg-[#1c1d20]  border-gray-800">
               <SelectItem value="category">Категорії</SelectItem>
             </SelectContent>
           </Select>
          </div>
        </div>

        {viewMode === "list" ? (
          <div className="rounded-none border-x border-b border-gray-800 bg-[#121315]">
            <Table>
              <TableHeader>
                <TableRow className="border-t border-gray-800 hover:bg-transparent">
                  <TableHead className="text-gray-400 font-normal text-xs h-8">Назва</TableHead>
                  <TableHead className="text-gray-400 font-normal text-xs h-8">Ціна</TableHead>
                  <TableHead className="text-gray-400 font-normal text-xs h-8">Одиниця</TableHead>
                  <TableHead className="text-gray-400 font-normal text-xs h-8">Складники</TableHead>
                  <TableHead className="text-gray-400 font-normal text-xs h-8">Деталі</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id} className="border-gray-800 hover:bg-[#252629]">
                    <TableCell className="font-normal text-gray-400 text-xs py-2">{product.name}</TableCell>
                    <TableCell className="text-gray-400 text-xs py-2">{product.price}</TableCell>
                    <TableCell className="text-gray-400 text-xs py-2">{product.unit}</TableCell>
                    <TableCell className="py-2">
                      <Button
                        variant="ghost"
                        className="bg-[#FF8D2A] bg-opacity-60 text-orange-400 hover:bg-[#FF8D2A] hover:bg-opacity-90 rounded-sm h-6 px-3 text-xs font-normal"
                      >
                        Складники
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                    <TableCell className="py-2">
                      <Button
                        variant="ghost"
                        className="bg-[#FF8D2A] bg-opacity-60 text-orange-400 hover:bg-[#FF8D2A] hover:bg-opacity-90 rounded-sm h-6 px-3 text-xs font-normal"
                      >
                        Деталі
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
            {products.map((product) => (
              <div key={product.id} className="bg-[#18191C] rounded-lg overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-gray-200 text-sm font-medium">{product.price}</span>
                    <span className="text-gray-500 text-xs">{product.unit}</span>
                  </div>
                  <h3 className="text-gray-400 text-sm mb-3">{product.name}</h3>
                  <div className="flex flex-col gap-2">
                    <button className="text-[#FF8D2A] text-xs hover:text-[#FF8D2A]/80 text-left flex items-center justify-between group">
                      Деталі
                      <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </button>
                    <button className="text-[#FF8D2A] text-xs hover:text-[#FF8D2A]/80 text-left flex items-center justify-between group">
                      Складники
                      <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-xs">Відображати по:</span>
            <Select defaultValue="10">
              <SelectTrigger className="w-[50px] bg-transparent border-gray-800 text-gray-400 h-7 text-xs pl-2">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent className="bg-[#1c1d20] border-gray-800">
                <SelectItem value="10">10</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-1 text-xs">
            <button className="px-2 py-1 text-gray-400 hover:text-gray-300">←</button>
            <button className="px-2 py-1 bg-[#FF8D2A] text-white">1</button>
            <button className="px-2 py-1 text-gray-400 hover:text-gray-300">2</button>
            <button className="px-2 py-1 text-gray-400 hover:text-gray-300">3</button>
            <span className="text-gray-400">...</span>
            <button className="px-2 py-1 text-gray-400 hover:text-gray-300">15</button>
            <button className="px-2 py-1 text-gray-400 hover:text-gray-300">→</button>
          </div>
        </div>
      </div>
    </div>
  )
}

