// // // // import { notFound } from 'next/navigation'
// // // // // import { CompanyEditForm } from './company-edit-form'
// // // // // import { CompanyEditForm } from '@/components/elements/company/Edit/company-edit-form'
// // // // import CompanyEditForm from '@/components/elements/company/Edit/company-edit-form'
// // // // async function getCompany(id: string) {
// // // //   // This is a placeholder function. In a real application, you would fetch the data from your API
// // // //   // For demonstration, we're returning mock data
// // // //   const company = {
// // // //     id,
// // // //     name: 'Acme Corporation',
// // // //     description: 'A leading provider of innovative solutions',
// // // //     logoUrl: '/placeholder.svg',
// // // //     bannerUrl: '/placeholder.svg',
// // // //     isActive: true,
// // // //     location: 'New York, NY',
// // // //     rating: 4.5,
// // // //     reviewCount: 100,
// // // //     contacts: {
// // // //       address: '123 Main St, New York, NY 10001',
// // // //       phone: '+1 (555) 123-4567',
// // // //       email: 'contact@acme.com',
// // // //     },
// // // //   }

// // // //   return company
// // // // }

// // // // export default async function EditCompanyPage({ params }: { params: { id: string } }) {
// // // //   const company = await getCompany(params.id)

// // // //   if (!company) {
// // // //     notFound()
// // // //   }

// // // //   return (
// // // //     <div className="container mx-auto px-4 py-8">
// // // //       <h1 className="text-2xl font-bold mb-6">Edit Company</h1>
// // // //       <CompanyEditForm company={company} />
// // // //     </div>
// // // //   )
// // // // }

// // // import { notFound } from 'next/navigation'
// // // import CompanyEditForm from '@/components/elements/company/Edit/company-edit-form'

// // // async function getCompany(id: string) {
// // //   // This is a placeholder function. In a real application, you would fetch the data from your API
// // //   // For demonstration, we're returning mock data
// // //   const company = {
// // //     id,
// // //     name: 'Acme Corporation',
// // //     description: 'A leading provider of innovative solutions',
// // //     logoUrl: '/placeholder.svg',
// // //     bannerUrl: '/placeholder.svg',
// // //     isActive: true,
// // //     location: 'New York, NY',
// // //     rating: 4.5,
// // //     reviewCount: 100,
// // //     contacts: {
// // //       address: '123 Main St, New York, NY 10001',
// // //       phone: '+1 (555) 123-4567',
// // //       email: 'contact@acme.com',
// // //     },
// // //   }

// // //   return company
// // // }

// // // export default async function EditCompanyPage({ params }: { params: { id: string } }) {
// // //   const company = await getCompany(params.id)

// // //   if (!company) {
// // //     notFound()
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-[#1C1C1C] text-white">
// // //       <div className="container mx-auto">
// // //         {/* <h1 className="text-3xl font-bold mb-6">Edit Company</h1> */}
// // //         <CompanyEditForm params={{ id: params.id }} />
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // import { notFound } from 'next/navigation';
// // import CompanyEditForm from '@/components/elements/company/Edit/company-edit-form';

// // async function getCompany(id: string) {
// //   // Replace this mock data with a real API call or database query
// //   const company = {
// //     id,
// //     name: 'Acme Corporation',
// //     description: 'A leading provider of innovative solutions',
// //     logoUrl: '/placeholder.svg',
// //     bannerUrl: '/placeholder.svg',
// //     isActive: true,
// //     location: 'New York, NY',
// //     rating: 4.5,
// //     reviewCount: 100,
// //     contacts: {
// //       address: '123 Main St, New York, NY 10001',
// //       phone: '+1 (555) 123-4567',
// //       email: 'contact@acme.com',
// //     },
// //   };

// //   return company || null; // Return `null` if no company is found
// // }

// // // export default async function EditCompanyPage({
// // //   params,
// // // }: {
// // //   params: { id: string };
// // // }) {
// // //   const company = await getCompany(params.id);

// // //   // Handle the case where the company is not found
// // //   if (!company) {
// // //     notFound();
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-[#1C1C1C] text-white">
// // //       <div className="container mx-auto">
// // //         <CompanyEditForm params={{ id: params.id }} />
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // // export default async function EditCompanyPage({
// // //   params,
// // // }: {
// // //   params: { id: string };
// // // }) {
// // //   const company = await getCompany(params.id);

// // //   if (!company) {
// // //     notFound();
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-[#1C1C1C] text-white">
// // //       <div className="container mx-auto">
// // //         <CompanyEditForm params={{ id: params.id }} />
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // type EditPageProps = {
// //   params: { id: string };
// // };

// // export default async function EditCompanyPage({ params }: EditPageProps) {
// //   const resolvedParams = await params; // Await the params object
// //   const { id } = resolvedParams;

// //   const company = await getCompany(id);

// //   if (!company) {
// //     notFound();
// //   }

// //   return (
// //     <div className="min-h-screen bg-[#1C1C1C] text-white">
// //       <div className="container mx-auto">
// //         <CompanyEditForm params={{ id }} />
// //       </div>
// //     </div>
// //   );
// // }
// 'use client'

// import { use } from 'react'
// import { useRouter } from 'next/navigation'
// import { Button } from "@/components/ui/button"
// import { ArrowLeft } from 'lucide-react'

// interface EditPageProps {
//   params: Promise<{ id: string }>
// }

// export default function EditCompanyPage({ params }: EditPageProps) {
//   const { id } = use(params)
//   const router = useRouter()

//   const handleBack = () => {
//     router.back()
//   }

//   return (
//     <div className="min-h-screen bg-[#1C1C1C] p-4">
//       <div className="max-w-md mx-auto">
//         <Button
//           onClick={handleBack}
//           variant="ghost"
//           className="mb-4 text-white"
//           // size="sm"
//         >
//           <ArrowLeft className="mr-2 h-4 w-4" />
//           Back
//         </Button>
//         <div className="bg-white rounded-lg shadow-lg p-6">
//           <h1 className="text-2xl font-bold mb-4">Edit Company {id}</h1>
//           <p className="text-gray-600">Edit form will go here</p>
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'

import { use } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
// import CompanyEditForm from '@/components/CompanyEditForm'
import CompanyEditForm from '@/components/elements/company/Edit/company-edit-form'

interface EditPageProps {
  params: Promise<{ id: string }>
}

export default function EditCompanyPage({ params }: EditPageProps) {
  const { id } = use(params)
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
  <div>

    <CompanyEditForm params={{ id }} />
  </div>
  
  )
}
