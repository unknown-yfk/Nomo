// "use client"

// import { SidebarProvider } from "@/components/ui/sidebar"
// import { AppSidebar } from "./BusinessItems/app-sidebar"
// import { AppHeader } from "./BusinessItems/app-header"
// import { MainContents } from "./BusinessItems/app_content"
// import { usePathname } from "next/navigation"
// import { AnalyticsContent } from "./BusinessItems/AnalyticsContent"
// import { ProjectsContent } from "./BusinessItems/ProjectsContent"

// export default function Business() {
//   const pathname = usePathname()

//   const renderContent = () => {
//     switch (pathname) {
//       case "/business":
//         return <MainContents />
//       case "/business/analytics":
//         return <AnalyticsContent />
//       case "/business/projects":
//         return <ProjectsContent />
//       // Add more cases for other routes
//       default:
//         return <MainContents />
//     }
//   }

//   return (
//     <SidebarProvider>
//       <div className="flex h-screen w-full bg-[#0c0d10] text-foreground">
//         <AppSidebar />
//         <div className="flex flex-col flex-1 overflow-hidden">
//           <AppHeader />
//           <main className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-800 scrollbar-thumb-rounded-lg">
//             {renderContent()}
//           </main>
//         </div>
//       </div>
//     </SidebarProvider>
//   )
// }


import React from 'react'
import { MainContents } from './BusinessItems/app_content'

const Business = () => {
  return (
    <div>Business


      <main className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-800 scrollbar-thumb-rounded-lg">
      <MainContents />
      </main>
    </div>

  )
}

export default Business