export interface Company {
    id: string
    name: string
    logoUrl: string
    bannerUrl: string
    description: string
    advantages: Array<{ icon: string; text: string }>
    contacts: {
      address: string
      phone: string
      email: string
    }
    isActive: boolean
  }
  
  export async function getCompanyData(id: string): Promise<Company | null> {
    // Simulate an API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
  
    const baseCompany: Omit<Company, 'id'> = {
      name: 'Hyatt Regency',
      logoUrl: '/cashback/item.svg',
      bannerUrl: '/company/image.png',
      description:
        'Hyatt Regency - це готель класу люкс, який пропонує високоякісні послуги та комфортне проживання. Наші номери обладнані всім необхідним для вашого комфортного перебування.',
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
    }
  
    // Define a dynamic set of companies
    const companies: Record<string, Company> = {
      '1': { id: '1', ...baseCompany },
      '2': { id: '2', ...baseCompany },
      '3': { id: '3', ...baseCompany },
    }
  
    return companies[id] || null
  }
  
  