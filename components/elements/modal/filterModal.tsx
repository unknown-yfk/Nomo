
interface FilterModalProps {
  isFilterModalOpen: boolean;
  handleCloseFilterModal: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isFilterModalOpen, handleCloseFilterModal }) => {
  if (!isFilterModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-lg font-bold text-accent mb-6 text-start">Фільтри</h2>
        <form className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Categories:</h3>
              <div className="space-y-2">
                {["Electronic", "Clothing", "Travel", "Beauty and Health", "Games and Entertainment"].map((category) => (
                  <label key={category} className="flex items-center text-gray-700">
                    <input type="checkbox" value={category} className="mr-2" />
                    {category}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Sorting Options:</h3>
              <div className="space-y-2">
                {["By maximum cashback", "By minimum cashback", "By new companies"].map((sortOption) => (
                  <label key={sortOption} className="flex items-center text-gray-700">
                    <input type="checkbox" value={sortOption} className="mr-2" />
                    {sortOption}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Offers:</h3>
            <div className="grid grid-cols-2 gap-4">
              {["New", "Hits"].map((offerType) => (
                <label key={offerType} className="flex items-center text-gray-700">
                  <input type="checkbox" value={offerType} className="mr-2" />
                  {offerType}
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              onClick={handleCloseFilterModal}
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-accent text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleCloseFilterModal}
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterModal;
