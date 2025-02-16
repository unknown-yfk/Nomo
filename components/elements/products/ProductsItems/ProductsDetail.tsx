"use client"

import Link from "next/link"
import { ChevronDown, ChevronLeft, ChevronRight, Copy } from 'lucide-react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";

interface ProductDetailsProps {
  id: string
}

export default function ProductDetails({ id }: ProductDetailsProps) {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const [tags] = useState(["#iphone", "#smartphone"]);


  return (
    <div className="space-y-6 p-5 ">
      {/* Header */}
      <div className="space-y-2">
        <Link href="/business/products" className="inline-flex items-center text-sm text-gray-400 hover:text-gray-300">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Назад до Продуктів
        </Link>
        <h1 className="text-xl font-semibold text-white">Деталі</h1>
      </div>

      {/* Basic Information Section */}
      <Collapsible defaultOpen className="border border-gray-800 rounded-md text-[var(--foreground)] border-none shadow-none rounded-lg bg-[#121315]">
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-gray-400 hover:bg-[#1c1d20]">
          <span>Базові</span>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className=" border-gray-800">
          <div className="p-4 space-y-6">
            {/* Name */}
            <div>
              <Label className="text-xs text-gray-500">Найменування</Label>
              <div className="mt-1">
                <Input value="Phone 123" readOnly className="bg-[#1c1d20] border-none text-sm rounded-lg text-gray-400" />
              </div>
            </div>

            {/* Category and Unit */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <Label className="text-xs text-gray-500">Категорія</Label>
                <div className="mt-1">
                  <Input
                    value="Мобільні телефони"
                    readOnly
                    className="bg-[#1c1d20] border-none text-sm text-gray-400 rounded-lg"
                  />
                </div>
              </div>
              <div>
                <Label className="text-xs text-gray-500">Одиниця виміру</Label>
                <div className="mt-1">
                  <Input value="Item" readOnly className="bg-[#1c1d20] border-none text-sm text-gray-400 rounded-lg" />
                </div>
              </div>
            </div>

            {/* IDs */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <Label className="text-xs text-gray-500">ID товару</Label>
                <div className="mt-1">
                  <Input value="123442155" readOnly className="bg-[#1c1d20] border-none text-sm text-gray-400 rounded-lg" />
                </div>
              </div>
              <div>
                <Label className="text-xs text-gray-500">Внутрішній ідентифікатор</Label>
                <div className="mt-1">
                  <Input value="123442155" readOnly className="bg-[#1c1d20] border-none text-sm text-gray-400 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Image Path */}
            <div>
              <Label className="text-xs text-gray-500">Зображення товару</Label>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 bg-[#1c1d20] rounded-md px-3 py-1.5">
                  <p className="text-xs text-gray-400 font-mono">
                    mintflavor-mdj-u-high-contrast-vaporwave-colorscheme-full-body-holding-a-m-1a892fc3-9f1a-4c3f-8cf0-7ed357d9ba3d
                  </p>
                </div>
                <Button
                  variant="ghost"
                  className="h-8 w-8 p-0 hover:bg-[#1c1d20]"
                  onClick={() =>
                    handleCopy(
                      "mintflavor-mdj-u-high-contrast-vaporwave-colorscheme-full-body-holding-a-m-1a892fc3-9f1a-4c3f-8cf0-7ed357d9ba3d",
                    )
                  }
                >
                  <Copy className="h-4 w-4 text-gray-400" />
                  <span className="sr-only">Copy path</span>
                </Button>
              </div>
            </div>

            {/* Tags */}
        

            <div>
      <Label className="text-xs text-gray-500">Теги</Label>
      <Input
        readOnly
        className="bg-[#1c1d20] border-none text-sm text-gray-400"
        value={tags.join(" ")}
      />
    </div>



<div>
                <Label className="text-xs text-gray-500">Опис товару</Label>
                <div className="mt-1">
                  <Textarea readOnly className="bg-[#1c1d20] border-none text-sm text-gray-400" />
                </div>
              </div>


            {/* PLU and EAN */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <Label className="text-xs text-gray-500">PLU</Label>
                <div className="mt-1">
                  <Input readOnly className="bg-[#1c1d20] border-none text-sm text-gray-400 rounded-lg" />
                </div>
              </div>
              <div>
                <Label className="text-xs text-gray-500">EAN</Label>
                <div className="mt-1">
                  <Input readOnly className="bg-[#1c1d20] border-none text-sm text-gray-400 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
   

      {/* Price Section */}
      <Collapsible className="border border-gray-800 rounded-md bg-[#121315] text-[var(--foreground)] border-none shadow-none rounded-lg" >
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-gray-400 hover:bg-[#1c1d20]">
          <span>Ціна</span>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className=" border-gray-800">
          <div className="p-4 space-y-6">
            {/* Price without VAT and VAT */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <Label className="text-xs text-gray-500">Ціна без ПДВ</Label>
                <div className="mt-1 relative">
      <Input
        value="123.55"
        readOnly
        className="bg-[#1c1d20] border-none text-sm text-gray-400 pr-10 rounded-lg"
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs text-gray-500 pointer-events-none">
        $ <ChevronRight className="w-4 h-4" />
      </span>
    </div>
              </div>
              <div>
                <Label className="text-xs text-gray-500">ПДВ</Label>
                <div className="mt-1 relative">
                  <Input 
                    value="12%"
                    readOnly
                    className="bg-[#1c1d20] border-none text-sm text-gray-400 pr-8 rounded-lg"
                  />
                  
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500"><ChevronRight className="w-4 h-4" /></span>
                </div>
              </div>
            </div>

            {/* Second Price without VAT */}
            <div>
              <Label className="text-xs text-gray-500">Ціна без ПДВ</Label>
              <div className="mt-1 relative">
                <Input 
                  value="123.55"
                  readOnly
                  className="bg-[#1c1d20] border-none text-sm text-gray-400 pr-8 rounded-lg"
                />
 <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs text-gray-500 pointer-events-none">
        $ <ChevronRight className="w-4 h-4" />
      </span>              </div>
            </div>

            {/* Markup and Cash */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <Label className="text-xs text-gray-500">Кешбек %


                    
                </Label>
                <div className="mt-1 relative">
                  <Input 
                    value="10%"
                    readOnly
                    className="bg-[#1c1d20] border-none text-sm text-gray-400 pr-8 rounded-lg"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500"> <ChevronRight className="w-4 h-4" /></span>
                </div>
              </div>
              <div>
                <Label className="text-xs text-gray-500">Кешбек</Label>
                <div className="mt-1 relative">
                  <Input 
                    value="12"
                    readOnly
                    className="bg-[#1c1d20] border-none text-sm text-gray-400 pr-8 rounded-lg"
                  />
 <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs text-gray-500 pointer-events-none">
        $ <ChevronRight className="w-4 h-4" />
      </span>                </div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Warehouse Section */}
      <Collapsible className="border border-gray-800 rounded-md bg-[#121315] text-[var(--foreground)] border-none shadow-none rounded-lg">
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-gray-400 hover:bg-[#1c1d20]">
          <span>Складські приміщення</span>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="border-t border-gray-800">
          <div className="p-10 text-center">
            <p className="text-sm text-gray-400">В розробці...</p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
