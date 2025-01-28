

import React from 'react'
import { MainContents } from './BusinessItems/app_content'

const Business = () => {
  return (
    <div>
      <main className="flex-1 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-800 scrollbar-thumb-rounded-lg">
      <MainContents />
      </main>
    </div>

  )
}

export default Business