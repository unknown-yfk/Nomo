

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import Pagination from '@/components/ui/Pagination/Pagination'
import CashbackItem from './CashbackItem'
import { CarouselScroll } from '../carousel/scrollingCarousel'
import { CarouselSingle } from '../carousel/singleCorousel'
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import CashbackModal from '../modal/CashBackModal/cashBackModal'
import FilterModal from '../modal/filterModal'

const mockData = [
  {
    id: 1,
    name: 'Hyatt Regency',
    logoUrl: '/cashback/item.svg',
    discount: 15,
    category: 'Hotels',
    description: 'Luxury hotel chain with premium amenities',
    isActive: true,
  },
  {
    id: 2,
    name: 'Hyatt Place',
    logoUrl: '/cashback/item.svg',
    discount: 10,
    category: 'Restaurants',
    description: 'Business-friendly hotel chain',
    isActive: true,
  },
  ...Array(45)
    .fill(null)
    .map((_, index) => ({
      id: index + 3,
      name: `Hotel ${index + 3}`,
      logoUrl: '/cashback/item.svg',
      discount: 15,
      category: 'Hotels',
      description: 'Sample hotel description',
      isActive: true,
    })),
]

const ITEMS_PER_PAGE = 15

const Cashback = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const totalItems = mockData.length
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE

  const filteredItems = mockData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const currentItems = filteredItems.slice(startIndex, endIndex)

  const handleAddDeal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleOpenFilterModal = () => {
    setIsFilterModalOpen(true)
  }

  const handleCloseFilterModal = () => {
    setIsFilterModalOpen(false)
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="p-4 md:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden relative rounded-xl shadow-lg">
              <CarouselSingle />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Найкращі пропозиції
            </h2>
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">
                Популярні бренди
              </h3>
              <div className="overflow-hidden">
                <CarouselScroll />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 md:mb-0">
                ОНЛАЙН КЕШБЕК
              </h1>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  className="flex p-2 items-center space-x-2 border-accent text-accent hover:bg-accent hover:text-white"
                  onClick={handleOpenFilterModal}
                >
                  <Filter size={20} />
                  <span>Фільтри</span>
                </Button>
              </div>

            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {currentItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CashbackItem {...item} />
                </motion.div>
              ))}
              <Card className="min-h-[250px] w-full flex justify-center items-center border-dashed border-2 border-gray-300 hover:border-accent transition-colors duration-300 self-center">
                <CardContent className="flex flex-col items-center justify-center p-4 space-y-4">
                  <button
                    className="w-full h-full flex justify-center items-center text-7xl text-gray-400 hover:text-accent transition-colors duration-300"
                    onClick={handleAddDeal}
                  >
                    +
                  </button>
                </CardContent>
              </Card>
            </motion.div>

          </div>



          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>

      <CashbackModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <FilterModal
        isFilterModalOpen={isFilterModalOpen}
        handleCloseFilterModal={handleCloseFilterModal}
      />
    </main>
  )
}

export default Cashback
