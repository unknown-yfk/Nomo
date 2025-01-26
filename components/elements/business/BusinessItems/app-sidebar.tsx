

// "use client"

// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { BarChart3, Box, Building2, CircleDollarSign, FileText, LayoutDashboard, Users } from "lucide-react"
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
//   { title: "Аналітика", icon: BarChart3, path: "/business" },
//   { title: "Проєкти", icon: Box, path: "/business/products" },
//   { title: "Постачальники", icon: Building2, path: "/business/suppliers" },
//   { title: "Склад", icon: FileText, path: "/business/inventory" },
//   { title: "Співробітники", icon: Users, path: "/business/employees" },
//   { title: "Продажі", icon: CircleDollarSign, path: "/business/sales" },
// ]

// export function AppSidebar() {
//   const [isCollapsed, setIsCollapsed] = useState(false)
//   const pathname = usePathname()

//   const [isModalOpen, setIsModalOpen] = useState(false)

//   return (
//     <Sidebar className="p-5 border-r border-border bg-[#0c0d10] text-white w-[250px] flex flex-col justify-between">
//       {/* Sidebar Header */}
//       <SidebarHeader className="border-b border-border p-4 bg-[#0c0d10]">
//         <div className={`flex items-center gap-2 px-2 ${isCollapsed ? "justify-center" : ""}`}>
//           <div className="h-10 w-10 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
//             <span className="text-white font-bold text-xl">N</span>
//           </div>
//           {!isCollapsed && (
//             <div className="flex flex-col">
//               <span className="text-lg font-semibold">Nomocash</span>
//               <span className="text-sm text-orange-500">Business</span>
//             </div>
//           )}
//         </div>
//       </SidebarHeader>

//       {/* Sidebar Content */}
//       <SidebarContent className="bg-[#0c0d10] flex-grow">
//         <SidebarMenu>
//           {sidebarItems.map((item) => (
//             <SidebarMenuItem key={item.title}>
//               <Button
//                 asChild
//                 variant="ghost"
//                 className={`w-full justify-start gap-2 p-3 rounded-lg ${
//                   pathname === item.path ? "text-orange-500 " : "hover:bg-orange-500"
//                 } ${isCollapsed ? "justify-center" : ""}`}
//               >
//                 <Link href={item.path}>
//                   <item.icon className="h-5 w-5 flex-shrink-0" />
//                   {!isCollapsed && <span className="text-sm">{item.title}</span>}
//                 </Link>
//               </Button>
//             </SidebarMenuItem>
//           ))}
//         </SidebarMenu>
//       </SidebarContent>

//       {/* Sidebar Footer */}
//       <SidebarFooter className="p-4 bg-[#0c0d10] flex flex-col gap-3 border-t border-border">
//         {!isCollapsed && (
//           <>
//             <Button variant="default" className="bg-orange-500 text-white w-full p-3 rounded-lg hover:bg-orange-600"
//              onClick={() => setIsModalOpen(true)}
//             >
//               Скачувати
//             </Button>
//             <OperationModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
//             <Button variant="default" className="bg-orange-500 text-white w-full p-3 rounded-lg hover:bg-orange-600">
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
import { BarChart3, Box, Building2, CircleDollarSign, FileText, LayoutDashboard, Users } from "lucide-react"
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
  { title: "Аналітика", icon: BarChart3, path: "/business" },
  { title: "Проєкти", icon: Box, path: "/business/products" },
  { title: "Постачальники", icon: Building2, path: "/business/suppliers" },
  { title: "Склад", icon: FileText, path: "/business/inventory" },
  { title: "Співробітники", icon: Users, path: "/business/employees" },
  { title: "Продажі", icon: CircleDollarSign, path: "/business/sales" },
]

export function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Sidebar className="p-5 border-r border-border bg-[#0c0d10] text-white w-[250px] flex flex-col justify-between">
      {/* Sidebar Header */}
      <SidebarHeader className="border-b border-border p-4 bg-[#0c0d10]">
        <div className={`flex items-center gap-2 px-2 ${isCollapsed ? "justify-center" : ""}`}>
          <div className="h-10 w-10 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="text-lg font-semibold">Nomocash</span>
              <span className="text-sm text-orange-500">Business</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent className="bg-[#0c0d10] flex-grow">
        <SidebarMenu>
          {sidebarItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <Button
                asChild
                variant="ghost"
                className={`w-full justify-start gap-2 p-3 rounded-lg ${
                  pathname === item.path ? "text-orange-500 " : "hover:bg-orange-500"
                } ${isCollapsed ? "justify-center" : ""}`}
              >
                <Link href={item.path}>
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span className="text-sm">{item.title}</span>}
                </Link>
              </Button>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className="p-4 bg-[#0c0d10] flex flex-col gap-3 border-t border-border">
        {!isCollapsed && (
          <>
            <Button
              variant="default"
              className="bg-orange-500 text-white w-full p-3 rounded-lg hover:bg-orange-600"
              onClick={() => setIsModalOpen(true)}
            >
              Скачувати
            </Button>
            <OperationModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
            <Button variant="default" className="bg-orange-500 text-white w-full p-3 rounded-lg hover:bg-orange-600">
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

