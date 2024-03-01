import { useContext } from "react"
import { RestaurantContext } from "../contexts/RestaurantContext"

export const useRestaurant = () => {
  return useContext(RestaurantContext)
}

export const useRenderCheckbox = () => {
  const renderCheckbox = (input, limit, key, title = "title") => {
    const { setFilterInput } = useRestaurant()
    return (
      <>
        <div className="font-semibold text-xl">{title}</div>
        {input &&
          input.map((item, index) => {
            return (
              index < limit && (
                <div className="form-control" key={item.id}>
                  <label className="cursor-pointer label flex gap-2 max-w-fit">
                    <input
                      type="checkbox"
                      className="w-5"
                      value={item.id}
                      onChange={(e) => {
                        setFilterInput((prev) => ({
                          ...prev,
                          [key]:
                            prev[key] && prev[key].includes(e.target.value)
                              ? prev[key].filter(
                                  (item) => item !== e.target.value
                                )
                              : [...(prev[key] || []), e.target.value],
                        }))
                      }}
                    />
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
  return { renderCheckbox }
}
