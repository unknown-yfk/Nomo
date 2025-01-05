// import { notFound } from 'next/navigation'
// // import { CompanyEditForm } from './company-edit-form'
// // import { CompanyEditForm } from '@/components/elements/company/Edit/company-edit-form'
// import CompanyEditForm from '@/components/elements/company/Edit/company-edit-form'
// async function getCompany(id: string) {
//   // This is a placeholder function. In a real application, you would fetch the data from your API
//   // For demonstration, we're returning mock data
//   const company = {
//     id,
//     name: 'Acme Corporation',
//     description: 'A leading provider of innovative solutions',
//     logoUrl: '/placeholder.svg',
//     bannerUrl: '/placeholder.svg',
//     isActive: true,
//     location: 'New York, NY',
//     rating: 4.5,
//     reviewCount: 100,
//     contacts: {
//       address: '123 Main St, New York, NY 10001',
//       phone: '+1 (555) 123-4567',
//       email: 'contact@acme.com',
//     },
//   }

//   return company
// }

// export default async function EditCompanyPage({ params }: { params: { id: string } }) {
//   const company = await getCompany(params.id)

//   if (!company) {
//     notFound()
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-6">Edit Company</h1>
//       <CompanyEditForm company={company} />
//     </div>
//   )
// }

import { notFound } from 'next/navigation'
import CompanyEditForm from '@/components/elements/company/Edit/company-edit-form'

async function getCompany(id: string) {
  // This is a placeholder function. In a real application, you would fetch the data from your API
  // For demonstration, we're returning mock data
  const company = {
    id,
    name: 'Acme Corporation',
    description: 'A leading provider of innovative solutions',
    logoUrl: '/placeholder.svg',
    bannerUrl: '/placeholder.svg',
    isActive: true,
    location: 'New York, NY',
    rating: 4.5,
    reviewCount: 100,
    contacts: {
      address: '123 Main St, New York, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'contact@acme.com',
    },
  }

  return company
}

export default async function EditCompanyPage({ params }: { params: { id: string } }) {
  const company = await getCompany(params.id)

  if (!company) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      <div className="container mx-auto">
        {/* <h1 className="text-3xl font-bold mb-6">Edit Company</h1> */}
        <CompanyEditForm params={{ id: params.id }} />
      </div>
    </div>
  )
}
