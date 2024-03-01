import { useRestaurant } from "../../hooks/hooks"
import { priceLength } from "../../constants/constant"

export const SlideBar = () => {
  const { filterPageData } = useRestaurant()
  const { facilities, districts } = filterPageData
  const renderCheckbox = (input, limit, key, title = "title") => {
    return (
      <>
        <div className="font-semibold text-xl">{title}</div>
        {input &&
          input.map((item, index) => {
            return (
              index < limit && (
                <div className="form-control">
                  <label className="cursor-pointer label flex gap-2 max-w-fit">
                    <input type="checkbox" className="w-5" value={item.id} />
                    <span className="label-text">{item[key]}</span>
                  </label>
                </div>
              )
            )
          })}
        {input && input.length > limit && (
          <div className="text-blue-600 text-sm cursor-pointer">
            ดูเพิ่มเติม ({input.length} ประเภท)
          </div>
        )}
      </>
    )
  }
  const showDistricts = renderCheckbox(districts, 6, "districtNameTh", "เขต")
  const showFacilities = renderCheckbox(
    facilities,
    4,
    "facilityName",
    "คุณสมบัติ"
  )
  const showPriceLength = renderCheckbox(priceLength, 5, "price", "ราคา")
  return (
    <>
      <div className="bg-white rounded-lg p-4  flex flex-col gap-2">
        {/* radio */}
        <div className="flex flex-col">
          <div className="font-semibold text-xl">เรตติ้ง</div>
          <div className="form-control  ">
            <label className="label cursor-pointer flex gap-2 align-middle items-center">
              <input
                type="radio"
                name="rating"
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
