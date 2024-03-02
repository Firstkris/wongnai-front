import { useRestaurant } from "../../hooks/hooks"
import { FilterTag } from "./FilterTag"
export const FilterTags = () => {
  const { filterPageData, filterInput, clearFilters } = useRestaurant()
  return (
    // filter
    (filterInput.rating && filterInput.rating?.length != 0) ||
      (filterInput.priceLength && filterInput.priceLength?.length != 0) ||
      (filterInput.facilityName && filterInput.facilityName?.length != 0) ||
      (filterInput?.districtNameTh &&
        filterInput.districtNameTh?.length != 0) ? (
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-baseline">
          <div className="font-semibold text-xl cursor-default">ตัวกรอง</div>
          <a
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={clearFilters}
          >
            ลบตัวกรอง
          </a>
        </div>
        <div className="flex flex-wrap gap-1">
          {filterInput?.districtNameTh &&
            filterInput?.districtNameTh?.map((district) => {
              return (
                <FilterTag
                  key={district}
                  text={filterPageData.districts[district - 1].districtNameTh}
                />
              )
            })}
          {filterInput?.rating &&
            filterInput?.rating?.map((rating) => {
              return (
                <FilterTag
                  key={rating}
                  text={
                    rating == 3.5
                      ? "⭐️ ⭐️ ⭐️ ☆"
                      : rating == 4
                      ? "⭐️ ⭐️ ⭐️ ⭐️"
                      : rating
                  }
                />
              )
            })}
          {filterInput?.priceLength &&
            filterInput?.priceLength?.map((price) => {
              return <FilterTag key={price} text={price} />
            })}
          {filterInput?.facilityName &&
            filterInput?.facilityName?.map((facility) => {
              return (
                <FilterTag
                  key={facility}
                  text={filterPageData.facilities[facility - 1].facilityName}
                />
              )
            })}
        </div>
      </div>
    ) : null
  )
}
