


'use client'
import { PortfolioHeader } from "./PortfolioItems/PortfolioHeader";
import { LeftPanel } from "./PortfolioItems/Panels/LeftPanel";
import { RightPanel } from "./PortfolioItems/Panels/RightPanel";

import { User } from '@supabase/supabase-js'
import { UserProfile } from '@/types/database'


interface HomePageContentProps {
  session: {
    user: User
  }
  profile: UserProfile
}

  export default function Settings({ session, profile }: HomePageContentProps) {

  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white p-2">
      <PortfolioHeader />
      <main className="p-4 flex flex-col md:flex-row gap-6 mt-5 pt-5">
        <LeftPanel />
        <RightPanel />
      </main>
    </div>
  );
}

