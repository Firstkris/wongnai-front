import { useRestaurant, useRenderCheckbox } from "../../hooks/hooks.jsx"
import { priceLength } from "../../constants/constant"

export const SlideBar = () => {
  const { filterPageData, setFilterInput, filterInput } = useRestaurant()
  const { renderCheckbox } = useRenderCheckbox()
  const { facilities, districts } = filterPageData

  const clearFilters = () => {
    setFilterInput({})
  }
  // const renderCheckbox = (input, limit, key, title = "title")
  const showDistricts = renderCheckbox(districts, 6, "districtNameTh", "เขต")
  const showFacilities = renderCheckbox(
    facilities,
    4,
    "facilityName",
    "คุณสมบัติ"
  )
  const showPriceLength = renderCheckbox(priceLength, 5, "price", "ราคา")
  console.log(filterPageData)

  return (
    <>
      <div className="bg-white rounded-lg p-4  flex flex-col gap-2 w-60">
        {
          // Object.keys(filterInput).length !== 0
          (filterInput.rating && filterInput.rating?.length != 0) ||
          (filterInput.price && filterInput.price?.length != 0) ||
          (filterInput.facilityName && filterInput.facilityName?.length != 0) ||
          (filterInput?.districtNameTh &&
            filterInput.districtNameTh?.length != 0) ? (
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-baseline">
                <div className="font-semibold text-xl cursor-default">
                  ตัวกรอง
                </div>
                <a
                  className="text-blue-600 cursor-pointer hover:underline"
                  onClick={clearFilters}
                >
                  ลบตัวกรอง
                </a>
              </div>
              <div className="flex flex-wrap gap-1">
                {filterInput &&
                  Object.keys(filterInput)?.map((filter, index) => {
                    console.log(filterInput)
                    return (
                      <>
                        {filterInput?.[filter]?.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="flex border max-w-fit px-2 py-1 text-sm rounded-full cursor-pointer hover:bg-gray_primary"
                            >
                              {item === 3.5
                                ? "⭐️ ⭐️ ⭐️ ☆"
                                : item === 4
                                ? "⭐️ ⭐️ ⭐️ ⭐️"
                                : item}
                              {/* {item} */}
                            </div>
                          )
                        })}
                      </>
                    )
                  })}
                {/* {filterInput?.districtNameTh &&
                  filterInput?.districtNameTh?.map((district) => {
                    return (
                      <div className="flex border max-w-fit px-2 py-1 text-sm rounded-full cursor-pointer hover:bg-gray_primary">
                        {district}
                      </div>
                    )
                  })} */}
              </div>
            </div>
          ) : null
        }
        {/* radio */}
        <div className="flex flex-col gap-1">
          <div className="font-semibold text-xl">เรตติ้ง</div>
          <div className="form-control  ">
            <label className="label cursor-pointer flex gap-2 align-middle items-center">
              <input
                type="radio"
                name="rating"
                onChange={() =>
                  setFilterInput((prev) => ({ ...prev, rating: [3.5] }))
                }
                className="radio  checked:bg-red-500 w-4 h-4"
              />
              <span className="label-text">3.5+</span>
            </label>
          </div>
          <div className="form-control  ">
            <label className="label cursor-pointer flex gap-2 align-middle items-center">
              <input
                type="radio"
                name="rating"
                onChange={() =>
                  setFilterInput((prev) => ({
                    ...prev,
                    rating: [4],
                  }))
                }
                className="radio checked:bg-red-500 w-4 h-4"
              />
              <span className="label-text">4+</span>
            </label>
          </div>
        </div>
        {/* <check box /> */}
        <div className="flex flex-col gap-2">{showDistricts}</div>
        {/* end check */}
        <div className="flex flex-col gap-2">{showFacilities}</div>
        {/* end */}
        <div className="flex flex-col gap-2">{showPriceLength}</div>
      </div>
    </>
  )
}
