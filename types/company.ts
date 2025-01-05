export interface CompanyAdvantage {
    icon: string;
    text: string;
  }
  
  export interface CompanyContact {
    address: string;
    phone: string;
    email: string;
  }
  
  export interface Company {
    id: string;
    name: string;
    logoUrl: string;
    bannerUrl: string;
    description: string;
    advantages: CompanyAdvantage[];
    contacts: CompanyContact;
    isActive: boolean;
  }
  
  


  