import { useContext } from "react"
import { RestaurantContext } from "../contexts/RestaurantContext"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
export const useRestaurant = () => {
  return useContext(RestaurantContext)
}

export const useRenderCheckbox = () => {
  const renderCheckbox = (input, limit, key, title = "title") => {
    const { setFilterInput, filterInput, fetchFilterData } = useRestaurant()

    const handleChangeCheckbox = (e) => {
      setFilterInput((prev) => ({
        ...prev,
        [key]:
          prev[key] && prev[key].includes(e.target.value)
            ? prev[key].filter((item) => item !== e.target.value)
            : [...(prev[key] || []), e.target.value],
      }))
    }
    // const href = `/
    //         restaurants/filter?${Object.keys(filterInput)
    //           .map(
    //             (key) =>
    //               `${key}` + "=" + filterInput[key].map((item) => `${item}`)
    //           )
    //           .join("&")}`
    // const navigator = useNavigate()
    // useEffect(() => {
    //   return () => navigator(href)
    // }, [filterInput])
    const { districtNameTh, facilityName, rating, price } = filterInput
    return (
      <>
        <div className="font-semibold text-xl cursor-default">{title}</div>
        {input &&
          input.map((item, index) => {
            const check =
              filterInput[key] && filterInput[key].includes(item.id.toString())
                ? true
                : false

            return (
              index < limit && (
                <div className="form-control" key={item.id}>
                  {/* <Link to={`restaurants/filter?${}`}> */}
                  <label className="cursor-pointer label flex gap-2 max-w-fit">
                    <input
                      type="checkbox"
                      className="w-5"
                      value={item.id}
                      checked={check}
                      onChange={handleChangeCheckbox}
                    />
                    <span className="label-text">{item[key]}</span>
                  </label>
                  {/* </Link> */}
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
  return { renderCheckbox }
}
