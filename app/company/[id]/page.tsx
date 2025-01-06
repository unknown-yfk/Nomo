


// // // // import CompanyPage from '@/components/elements/company/Company'



// // // // export default function Page({ params }: { params: { id: string } }) {
// // // //   return <CompanyPage id={params.id} />
// // // // }




// // // 'use client'

// // // import { useEffect, useState } from 'react'
// // // import { notFound } from 'next/navigation'
// // // import Image from 'next/image'

// // // interface CompanyCardData {
// // //   id: string
// // //   name: string
// // //   logoUrl: string
// // //   discount: number
// // //   isActive: boolean
// // // }

// // // interface CompanyPageProps {
// // //   params: { id: string }
// // // }

// // // async function getCompanyCardData(id: string): Promise<CompanyCardData | null> {
// // //   // Simulating an API call
// // //   await new Promise(resolve => setTimeout(resolve, 1000))

// // //   const companies: Record<string, CompanyCardData> = {
// // //     '1': {
// // //       id: '1',
// // //       name: 'Hyatt Regency',
// // //       logoUrl: '/cashback/item.svg',
// // //       discount: 10,
// // //       isActive: true,
// // //     },
// // //     '2': {
// // //       id: '2',
// // //       name: 'Marriott',
// // //       logoUrl: '/cashback/item2.svg',
// // //       discount: 8,
// // //       isActive: true,
// // //     },
// // //     '3': {
// // //       id: '3',
// // //       name: 'Hilton',
// // //       logoUrl: '/cashback/item3.svg',
// // //       discount: 12,
// // //       isActive: false,
// // //     },
// // //   }

// // //   return companies[id] || null
// // // }

// // // export default function CompanyPage({ params }: CompanyPageProps) {
// // //   const [company, setCompany] = useState<CompanyCardData | null>(null)
// // //   const [loading, setLoading] = useState(true)

// // //   useEffect(() => {
// // //     const fetchCompany = async () => {
// // //       const data = await getCompanyCardData(params.id)
// // //       setCompany(data)
// // //       setLoading(false)
// // //     }

// // //     fetchCompany()
// // //   }, [params.id])

// // //   if (loading) {
// // //     return (
// // //       <div className="min-h-screen bg-[#1C1C1C] text-white flex items-center justify-center">
// // //         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
// // //       </div>
// // //     )
// // //   }

// // //   if (!company) {
// // //     notFound()
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-[#1C1C1C] flex items-center justify-center p-4">
// // //       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
// // //         <div className="flex items-center space-x-4 mb-4">
// // //           <Image src={company.logoUrl} alt={company.name} width={64} height={64} className="rounded-full" />
// // //           <div>
// // //             <h1 className="text-2xl font-bold text-gray-800">{company.name}</h1>
// // //             <p className="text-gray-600">ID: {company.id}</p>
// // //           </div>
// // //         </div>
// // //         <div className="mt-4">
// // //           <p className="text-3xl font-bold text-green-600">{company.discount}% Cashback</p>
// // //           <p className={`text-sm mt-2 ${company.isActive ? 'text-green-500' : 'text-red-500'}`}>
// // //             {company.isActive ? 'Active' : 'Inactive'}
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // 'use client'

// // import { useEffect, useState, use } from 'react'
// // import { notFound } from 'next/navigation'
// // import Image from 'next/image'

// // interface CompanyCardData {
// //   id: string
// //   name: string
// //   logoUrl: string
// //   discount: number
// //   isActive: boolean
// // }

// // interface CompanyPageProps {
// //   params: Promise<{ id: string }>
// // }

// // async function getCompanyCardData(id: string): Promise<CompanyCardData | null> {
// //   // Simulating an API call
// //   await new Promise(resolve => setTimeout(resolve, 1000))

// //   const companies: Record<string, CompanyCardData> = {
// //     '1': {
// //       id: '1',
// //       name: 'Hyatt Regency',
// //       logoUrl: '/cashback/item.svg',
// //       discount: 10,
// //       isActive: true,
// //     },
// //     '2': {
// //       id: '2',
// //       name: 'Marriott',
// //       logoUrl: '/cashback/item2.svg',
// //       discount: 8,
// //       isActive: true,
// //     },
// //     '3': {
// //       id: '3',
// //       name: 'Hilton',
// //       logoUrl: '/cashback/item3.svg',
// //       discount: 12,
// //       isActive: false,
// //     },
// //   }

// //   return companies[id] || null
// // }

// // export default function CompanyPage({ params }: CompanyPageProps) {
// //   const { id } = use(params)
// //   const [company, setCompany] = useState<CompanyCardData | null>(null)
// //   const [loading, setLoading] = useState(true)

// //   useEffect(() => {
// //     const fetchCompany = async () => {
// //       const data = await getCompanyCardData(id)
// //       setCompany(data)
// //       setLoading(false)
// //     }

// //     fetchCompany()
// //   }, [id])

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-[#1C1C1C] text-white flex items-center justify-center">
// //         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
// //       </div>
// //     )
// //   }

// //   if (!company) {
// //     notFound()
// //   }

// //   return (
// //     <div className="min-h-screen bg-[#1C1C1C] flex items-center justify-center p-4">
// //       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
// //         <div className="flex items-center space-x-4 mb-4">
// //           <Image src={company.logoUrl} alt={company.name} width={64} height={64} className="rounded-full" />
// //           <div>
// //             <h1 className="text-2xl font-bold text-gray-800">{company.name}</h1>
// //             <p className="text-gray-600">ID: {company.id}</p>
// //           </div>
// //         </div>
// //         <div className="mt-4">
// //           <p className="text-3xl font-bold text-green-600">{company.discount}% Cashback</p>
// //           <p className={`text-sm mt-2 ${company.isActive ? 'text-green-500' : 'text-red-500'}`}>
// //             {company.isActive ? 'Active' : 'Inactive'}
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// 'use client'

// import { useEffect, useState, use } from 'react'
// import { notFound, useRouter } from 'next/navigation'
// import Image from 'next/image'
// import { Pencil } from 'lucide-react'
// import { Button } from "@/components/ui/button"

// interface CompanyCardData {
//   id: string
//   name: string
//   logoUrl: string
//   discount: number
//   isActive: boolean
// }

// interface CompanyPageProps {
//   params: Promise<{ id: string }>
// }

// async function getCompanyCardData(id: string): Promise<CompanyCardData | null> {
//   // Simulating an API call
//   await new Promise(resolve => setTimeout(resolve, 1000))

//   const companies: Record<string, CompanyCardData> = {
//     '1': {
//       id: '1',
//       name: 'Hyatt Regency',
//       logoUrl: '/cashback/item.svg',
//       discount: 10,
//       isActive: true,
//     },
//     '2': {
//       id: '2',
//       name: 'Marriott',
//       logoUrl: '/cashback/item2.svg',
//       discount: 8,
//       isActive: true,
//     },
//     '3': {
//       id: '3',
//       name: 'Hilton',
//       logoUrl: '/cashback/item3.svg',
//       discount: 12,
//       isActive: false,
//     },
//   }

//   return companies[id] || null
// }

// export default function CompanyPage({ params }: CompanyPageProps) {
//   const { id } = use(params)
//   const router = useRouter()
//   const [company, setCompany] = useState<CompanyCardData | null>(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchCompany = async () => {
//       const data = await getCompanyCardData(id)
//       setCompany(data)
//       setLoading(false)
//     }

//     fetchCompany()
//   }, [id])

//   const handleEdit = () => {
//     router.push(`/company/${id}/edit`)
//   }

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#1C1C1C] text-white flex items-center justify-center">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
//       </div>
//     )
//   }

//   if (!company) {
//     notFound()
//   }

//   return (
//     <div className="min-h-screen bg-[#1C1C1C] flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center space-x-4">
//             <Image src={company.logoUrl} alt={company.name} width={64} height={64} className="rounded-full" />
//             <div>
//               <h1 className="text-2xl font-bold text-gray-800">{company.name}</h1>
//               <p className="text-gray-600">ID: {company.id}</p>
//             </div>
//           </div>
//           <Button
//             onClick={handleEdit}
//             variant="outline"
//             size="icon"
//             className="h-10 w-10"
//             aria-label="Edit company"
//           >
//             <Pencil className="h-4 w-4" />
//           </Button>
//         </div>
//         <div className="mt-4">
//           <p className="text-3xl font-bold text-green-600">{company.discount}% Cashback</p>
//           <p className={`text-sm mt-2 ${company.isActive ? 'text-green-500' : 'text-red-500'}`}>
//             {company.isActive ? 'Active' : 'Inactive'}
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'

import { useEffect, useState, use } from 'react'
import { notFound } from 'next/navigation'
// import CompanyItem from '@/components/CompanyItem'
import CompanyItem from '@/components/elements/company/CompanyItem'
import { Company } from '@/types/company'

interface CompanyPageProps {
  params: Promise<{ id: string }>
}

async function getCompanyData(id: string): Promise<Company | null> {
  // Simulating an API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  const companies: Record<string, Company> = {
    '1': {
      id: '1',
      name: 'Hyatt Regency',
      logoUrl: '/cashback/item.svg',
      bannerUrl: '/company/image.png',
      description: 'Hyatt Regency - це готель класу люкс, який пропонує високоякісні послуги та комфортне проживання. Наші номери обладнані всім необхідним для вашого комфортного перебування.',
      advantages: [
        { icon: 'clock', text: 'Послуги 24/7' },
        { icon: 'shield', text: 'Захищеність з оплати' },
        { icon: 'map', text: 'Зручність доступу та бар' },
        { icon: 'spa', text: 'Spa & Оздоровлення' },
      ],
      contacts: {
        address: 'вулиці Володимирська, 24, Київ',
        phone: '+380661234567',
        email: 'kyiv@hyatt.com',
      },
      isActive: true,
    },

    '2': {
      id: '2',
      name: 'Hyatt Regency',
      logoUrl: '/cashback/item.svg',
      bannerUrl: '/company/image.png',
      description: 'Hyatt Regency - це готель класу люкс, який пропонує високоякісні послуги та комфортне проживання. Наші номери обладнані всім необхідним для вашого комфортного перебування.',
      advantages: [
        { icon: 'clock', text: 'Послуги 24/7' },
        { icon: 'shield', text: 'Захищеність з оплати' },
        { icon: 'map', text: 'Зручність доступу та бар' },
        { icon: 'spa', text: 'Spa & Оздоровлення' },
      ],
      contacts: {
        address: 'вулиці Володимирська, 24, Київ',
        phone: '+380661234567',
        email: 'kyiv@hyatt.com',
      },
      isActive: true,
    },
    '3': {
      id: '3',
      name: 'Hyatt Regency',
      logoUrl: '/cashback/item.svg',
      bannerUrl: '/company/image.png',
      description: 'Hyatt Regency - це готель класу люкс, який пропонує високоякісні послуги та комфортне проживання. Наші номери обладнані всім необхідним для вашого комфортного перебування.',
      advantages: [
        { icon: 'clock', text: 'Послуги 24/7' },
        { icon: 'shield', text: 'Захищеність з оплати' },
        { icon: 'map', text: 'Зручність доступу та бар' },
        { icon: 'spa', text: 'Spa & Оздоровлення' },
      ],
      contacts: {
        address: 'вулиці Володимирська, 24, Київ',
        phone: '+380661234567',
        email: 'kyiv@hyatt.com',
      },
      isActive: true,
    },
    // ... (other company data entries)
  }

  return companies[id] || null
}

export default function CompanyPage({ params }: CompanyPageProps) {
  const { id } = use(params)
  const [company, setCompany] = useState<Company | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCompany = async () => {
      const data = await getCompanyData(id)
      setCompany(data)
      setLoading(false)
    }

    fetchCompany()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1C1C1C] text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
      </div>
    )
  }

  if (!company) {
    notFound()
  }

  return <CompanyItem company={company} />
}

