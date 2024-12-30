import React from "react"

type CashbackModalProps = {
  isOpen: boolean
  onClose: () => void
}

const CashbackModal: React.FC<CashbackModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full">
        <p className="mt-4 text-yellow-600">Would you like to add a cashback deal?</p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            className="bg-gray-300 text-black px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded">
            Add Deal
          </button>
        </div>
      </div>
    </div>
  )
}

export default CashbackModal
