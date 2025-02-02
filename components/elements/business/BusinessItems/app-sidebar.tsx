

// // // "use client"

// // // import Link from "next/link"
// // // import { usePathname } from "next/navigation"
// // // import { BarChart3, Box, Building2, CircleDollarSign, FileText, LayoutDashboard, Users } from "lucide-react"
// // // import { Button } from "@/components/ui/button"
// // // import {
// // //   Sidebar,
// // //   SidebarContent,
// // //   SidebarFooter,
// // //   SidebarHeader,
// // //   SidebarMenu,
// // //   SidebarMenuItem,
// // //   SidebarRail,
// // // } from "@/components/ui/sidebar"
// // // import { OperationModal } from "./Dialog/operation-modal"
// // // import { useState } from "react"

// // // const sidebarItems = [
// // //   { title: "Аналітика", icon: BarChart3, path: "/business" },
// // //   { title: "Проєкти", icon: Box, path: "/business/products" },
// // //   { title: "Постачальники", icon: Building2, path: "/business/suppliers" },
// // //   { title: "Склад", icon: FileText, path: "/business/inventory" },
// // //   { title: "Співробітники", icon: Users, path: "/business/employees" },
// // //   { title: "Продажі", icon: CircleDollarSign, path: "/business/sales" },
// // // ]

// // // export function AppSidebar() {
// // //   const [isCollapsed, setIsCollapsed] = useState(false)
// // //   const pathname = usePathname()

// // //   const [isModalOpen, setIsModalOpen] = useState(false)

// // //   return (
// // //     // <Card className="bg-[#121315] text-[var(--foreground)] border-none shadow-none rounded-lg">

// // //     <Sidebar className="p-5 border-r border-border bg-[#121315] border-none shadow-none rounded-lg text-white w-[250px] flex flex-col justify-between">
// // //       {/* Sidebar Header */}
// // //       <SidebarHeader className="border-b border-border p-4 bg-[#121315]">
// // //         <div className={`flex items-center gap-2 px-2 ${isCollapsed ? "justify-center" : ""}`}>
// // //           <div className="h-10 w-10 rounded-lg bg-[#FF8D2A] flex items-center justify-center flex-shrink-0">
// // //             <span className="text-white font-bold text-xl">N</span>
// // //           </div>
// // //           {!isCollapsed && (
// // //             <div className="flex flex-col">
// // //               <span className="text-lg font-semibold">Nomocash</span>
// // //               <span className="text-sm text-[#FF8D2A]">Business</span>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </SidebarHeader>

// // //       {/* Sidebar Content */}
// // //       <SidebarContent className="bg-[#121315] flex-grow">
// // //         <SidebarMenu>
// // //           {sidebarItems.map((item) => (
// // //             <SidebarMenuItem key={item.title}>
// // //               <Button
// // //                 asChild
// // //                 variant="ghost"
// // //                 className={`w-full justify-start gap-2 p-3 rounded-lg ${
// // //                   pathname === item.path ? "text-[#FF8D2A] " : "hover:bg-[#FF8D2A]"
// // //                 } ${isCollapsed ? "justify-center" : ""}`}
// // //               >
// // //                 <Link href={item.path}>
// // //                   <item.icon className="h-5 w-5 flex-shrink-0" />
// // //                   {!isCollapsed && <span className="text-sm">{item.title}</span>}
// // //                 </Link>
// // //               </Button>
// // //             </SidebarMenuItem>
// // //           ))}
// // //         </SidebarMenu>
// // //       </SidebarContent>

// // //       {/* Sidebar Footer */}
// // //       <SidebarFooter className="p-4 bg-[#121315] flex flex-col gap-3 border-t border-border">
// // //         {!isCollapsed && (
// // //           <>
// // //             <Button
// // //               variant="default"
// // //               className="bg-[#FF8D2A] text-white w-full p-3  rounded-lg hover:bg-orange-600"
// // //               onClick={() => setIsModalOpen(true)}
// // //             >
// // //               Скачувати
// // //             </Button>
// // //             <OperationModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
// // //             <Button variant="default" className="bg-[#FF8D2A] text-white w-full p-3 rounded-lg hover:bg-orange-600">
// // //               Дані
// // //             </Button>
// // //           </>
// // //         )}
// // //       </SidebarFooter>

// // //       {/* Sidebar Rail */}
// // //       <SidebarRail />
// // //     </Sidebar>
// // //   )
// // // }

// // "use client"

// // import Link from "next/link"
// // import { usePathname } from "next/navigation"
// // import {
// //   BarChart3,
// //   Box,
// //   Building2,
// //   CircleDollarSign,
// //   FileText,
// //   Users,
// //   Settings,
// //   BookOpen,
// //   Users2,
// //   ArrowDownToLine,
// // } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import {
// //   Sidebar,
// //   SidebarContent,
// //   SidebarFooter,
// //   SidebarHeader,
// //   SidebarMenu,
// //   SidebarMenuItem,
// //   SidebarRail,
// // } from "@/components/ui/sidebar"
// // import { OperationModal } from "./Dialog/operation-modal"
// // import { useState } from "react"

// // const sidebarItems = [
// //   { title: "Аналітика", icon: BarChart3, path: "/business" },
// //   { title: "Панель приладів", icon: Settings, path: "/business/dashboard" },
// //   { title: "Продукти", icon: Box, path: "/business/products" },
// //   { title: "Постачальники", icon: Building2, path: "/business/suppliers" },
// //   { title: "Склад", icon: FileText, path: "/business/inventory" },
// //   { title: "Співробітники", icon: Users, path: "/business/employees" },
// //   { title: "Продажі", icon: CircleDollarSign, path: "/business/sales" },
// //   { title: "Бухгалтерський облік", icon: BookOpen, path: "/business/accounting" },
// //   { title: "Клієнти", icon: Users2, path: "/business/clients" },
// //   { title: "Інтеграції", icon: ArrowDownToLine, path: "/business/integrations" },
// // ]

// // export function AppSidebar() {
// //   const [isCollapsed, setIsCollapsed] = useState(false)
// //   const pathname = usePathname()

// //   const [isModalOpen, setIsModalOpen] = useState(false)

// //   return (
// //     <Sidebar className="p-5 border-r border-border bg-[#121315] border-none shadow-none rounded-lg text-white w-[250px] flex flex-col justify-between">
// //       {/* Sidebar Header */}
// //       <SidebarHeader className="border-b border-border p-4 bg-[#121315]">
// //         <div className={`flex items-center gap-2 px-2 ${isCollapsed ? "justify-center" : ""}`}>
// //           <div className="h-10 w-10 rounded-lg bg-[#FF8D2A] flex items-center justify-center flex-shrink-0">
// //             <span className="text-white font-bold text-xl">N</span>
// //           </div>
// //           {!isCollapsed && (
// //             <div className="flex flex-col">
// //               <span className="text-lg font-semibold">Nomocash</span>
// //               <span className="text-sm text-[#FF8D2A]">Business</span>
// //             </div>
// //           )}
// //         </div>
// //       </SidebarHeader>

// //       {/* Sidebar Content */}
// //       <SidebarContent className="bg-[#121315] flex-grow">
// //         <SidebarMenu>
// //           {sidebarItems.map((item) => (
// //             <SidebarMenuItem key={item.title}>
// //               <Button
// //                 asChild
// //                 variant="ghost"
// //                 className={`w-full justify-start gap-2 p-3 rounded-lg ${
// //                   pathname === item.path ? "text-[#FF8D2A] " : "hover:bg-[#FF8D2A] hover:text-white"
// //                 } ${isCollapsed ? "justify-center" : ""}`}
// //               >
// //                 <Link href={item.path}>
// //                   <item.icon className="h-5 w-5 flex-shrink-0" />
// //                   {!isCollapsed && <span className="text-sm">{item.title}</span>}
// //                 </Link>
// //               </Button>
// //             </SidebarMenuItem>
// //           ))}
// //         </SidebarMenu>
// //       </SidebarContent>

// //       {/* Sidebar Footer */}
// //       <SidebarFooter className="p-4 bg-[#121315] flex flex-col gap-3 border-t border-border">
// //         {!isCollapsed && (
// //           <>
// //             <Button
// //               variant="default"
// //               className="bg-[#FF8D2A] text-white w-full p-3  rounded-lg hover:bg-orange-600"
// //               onClick={() => setIsModalOpen(true)}
// //             >
// //               Скачувати
// //             </Button>
// //             <OperationModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
// //             <Button variant="default" className="bg-[#FF8D2A] text-white w-full p-3 rounded-lg hover:bg-orange-600">
// //               Дані
// //             </Button>
// //           </>
// //         )}
// //       </SidebarFooter>

// //       {/* Sidebar Rail */}
// //       <SidebarRail />
// //     </Sidebar>
// //   )
// // }

// "use client"

// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import {
//   BarChart3,
//   Box,
//   Building2,
//   CircleDollarSign,
//   FileText,
//   Users,
//   Settings,
//   BookOpen,
//   Users2,
//   ArrowDownToLine,
//   ChevronRight,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarRail,
// } from "@/components/ui/sidebar"
// import { OperationModal } from "./Dialog/operation-modal"
// import { useState } from "react"

// const sidebarItems = [
//   { title: "Аналітика", icon: BarChart3, path: "/business", hasDropdown: true },
//   { title: "Панель приладів", icon: Settings, path: "/business/", hasDropdown: true },
//   { title: "Продукти", icon: Box, path: "/business/products", hasDropdown: true },
//   { title: "Постачальники", icon: Building2, path: "/business/suppliers" },
//   { title: "Склад", icon: FileText, path: "/business/inventory" },
//   { title: "Співробітники", icon: Users, path: "/business/employees" },
//   { title: "Продажі", icon: CircleDollarSign, path: "/business/sales" },
//   { title: "Бухгалтерський облік", icon: BookOpen, path: "/business/accounting" },
//   { title: "Клієнти", icon: Users2, path: "/business/clients" },
//   { title: "Інтеграції", icon: ArrowDownToLine, path: "/business/integrations" },
// ]

// export function AppSidebar() {
//   const [isCollapsed, setIsCollapsed] = useState(false)
//   const pathname = usePathname()

//   const [isModalOpen, setIsModalOpen] = useState(false)

//   return (
//     <Sidebar className="border-r border-border bg-[#121315] border-none shadow-none text-white w-[250px] flex flex-col justify-between">
//       {/* Sidebar Header */}
//       <SidebarHeader className="border-b border-border py-3 px-4 bg-[#121315]">
//         <div className={`flex items-center gap-3 ${isCollapsed ? "justify-center" : ""}`}>
//           <div className="h-8 w-8 rounded-lg bg-[#FF8D2A] flex items-center justify-center flex-shrink-0">
//             <span className="text-white font-bold text-lg">N</span>
//           </div>
//           {!isCollapsed && (
//             <div className="flex flex-col">
//               <span className="text-base font-semibold">Nomocash</span>
//               <span className="text-sm text-[#FF8D2A]">Business</span>
//             </div>
//           )}
//         </div>
//       </SidebarHeader>

//       {/* Sidebar Content */}
//       <SidebarContent className="bg-[#121315] flex-grow py-2">
//         <SidebarMenu>
//           {sidebarItems.map((item) => (
//             <SidebarMenuItem key={item.title}>
//               <Button
//                 asChild
//                 variant="ghost"
//                 className={`w-full justify-between gap-2 px-4 py-2 rounded-none text-zinc-400   hover:bg-[#FF8D2A] hover:text-white group ${
//                   pathname === item.path ? "text-[#FF8D2A]" : ""
//                 } ${isCollapsed ? "justify-center" : ""}`}
//               >
//                 <Link href={item.path} className="flex items-center w-full p-5">
//                   <div className="flex items-center gap-3 flex-1">
//                     <item.icon className="h-4 w-4 flex-shrink-0" />
//                     {!isCollapsed && <span className="text-sm flex-grow text-left">{item.title}</span>}
//                   </div>
//                   {!isCollapsed && item.hasDropdown && <ChevronRight className="h-4 w-4" />}
//                 </Link>
//               </Button>
//             </SidebarMenuItem>
//           ))}
//         </SidebarMenu>
//       </SidebarContent>

//       {/* Sidebar Footer */}
//       <SidebarFooter className="px-4 py-3 bg-[#121315] flex flex-col gap-2 border-t border-border">
//         {!isCollapsed && (
//           <>
//             <Button
//               variant="default"
//               className="bg-[#FF8D2A] text-white w-full py-2 px-3 rounded hover:bg-orange-600"
//               onClick={() => setIsModalOpen(true)}
//             >
//               Скачувати
//             </Button>
//             <OperationModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
//             <Button variant="default" className="bg-[#FF8D2A] text-white w-full py-2 px-3 rounded hover:bg-orange-600">
//               Дані
//             </Button>
//           </>
//         )}
//       </SidebarFooter>

//       {/* Sidebar Rail */}
//       <SidebarRail />
//     </Sidebar>
//   )
// }



"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Box,
  Building2,
  CircleDollarSign,
  FileText,
  Users,
  Settings,
  BookOpen,
  Users2,
  ArrowDownToLine,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { OperationModal } from "./Dialog/operation-modal"
import { useState } from "react"

const sidebarItems = [
  // { title: "Аналітика", icon: BarChart3, path: "/business", hasDropdown: true },
  { title: "Аналітика", icon: "/business/side.svg", path: "/business", hasDropdown: true },

  { title: "Панель приладів", icon: "/business/side2.svg", path: "/business/", hasDropdown: true },
  { title: "Продукти", icon: "/business/side3.svg", path: "/business/products", hasDropdown: true },
  { title: "Постачальники", icon: "/business/side4.svg", path: "/business/suppliers" },
  { title: "Склад", icon: "/business/side5.svg", path: "/business/inventory" },
  { title: "Співробітники", icon: "/business/side6.svg", path: "/business/employees" },
  { title: "Продажі", icon: "/business/side7.svg", path: "/business/sales" },
  { title: "Бухгалтерський облік", icon: "/business/side8.svg", path: "/business/accounting" },
  { title: "Клієнти", icon: "/business/side9.svg", path: "/business/clients" },
  { title: "Інтеграції", icon: "/business/side10.svg", path: "/business/integrations" },
]

export function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Sidebar className="border-r  border-border bg-[#121315] leading-[32px] border-none shadow-none text-white w-[257px] flex flex-col justify-between p-0">
      {/* Sidebar Header */}
      <SidebarHeader className=" border-border py-4 pb-5 px-4 bg-[#121315]">
        <div className={`flex items-center gap-3 ${isCollapsed ? "justify-center" : ""}`}>

          {!isCollapsed && (


            <div className="flex items-center justify-end">
              <img src="/business/Logo business.svg" alt="Nomocash Logo" className="w-32 h-auto object-contain" />
            </div>
          )}
        </div>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent className="bg-[#121315] flex-grow py-2">
        <SidebarMenu>
          {sidebarItems.map((item) => (
            <SidebarMenuItem key={item.title} className="px-0">
              <Button
                asChild
                variant="ghost"
                className={`w-full justify-between gap-2 px-4 py-2 rounded-none text-zinc-400 hover:bg-[#FF8D2A] hover:text-white group ${pathname === item.path ? "text-[#FF8D2A]" : ""
                  } ${isCollapsed ? "justify-center" : ""}`}
              >
                {/* <Link href={item.path} className="flex items-center w-full">
                  <div className="flex items-center gap-3 flex-1">
                    <item.icon className="h-4 w-4 flex-shrink-0" />


                    <img src='/business/side.svg' alt="icon" className="h-5 w-5" />

                    {!isCollapsed && <span className="text-sm flex-grow text-left">{item.title}</span>}
                  </div>
                  {!isCollapsed && item.hasDropdown && <ChevronRight className="h-4 w-4" />}
                </Link> */}

                <Link key={item.title} href={item.path} className="flex items-center w-full">
                  <div className="flex items-center gap-3 flex-1">
                    {/* Conditionally render icon */}
                    {typeof item.icon === "string" ? (
                      // Render the SVG image if item.icon is a string (SVG path)
                      <img src={item.icon} alt="icon" className="h-5 w-5" />
                    ) : (
                      // Render the React component if item.icon is a component
                      <span>logo</span>
                    )}

                    {/* Display title */}
                    {!isCollapsed && <span className="text-sm flex-grow text-left">{item.title}</span>}
                  </div>
                  {!isCollapsed && item.hasDropdown && <ChevronRight className="h-4 w-4" />}
                </Link>
              </Button>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className="px-4 py-3 bg-[#121315] flex flex-col gap-2 border-t border-border">
        {!isCollapsed && (
          <>
            <Button
              variant="default"
              className="bg-[#FF8D2A] text-white w-full py-2 px-3 rounded hover:bg-orange-600"
              onClick={() => setIsModalOpen(true)}
            >
              Скачувати
            </Button>
            <OperationModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
            <Button variant="default" className="bg-[#FF8D2A] text-white w-full py-2 px-3 rounded hover:bg-orange-600">
              Дані
            </Button>
          </>
        )}
      </SidebarFooter>

      {/* Sidebar Rail */}
      <SidebarRail />
    </Sidebar>
  )
}

