import Select from "../Select"
export const SlideBar = () => {
  return (
    <>
      <div className="bg-white rounded-lg p-4 ">
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
        <div className="flex flex-col gap-2">
          <div className="font-semibold text-xl">เขต/ย่ายบ่</div>
          {[1, 2, 3, 4, 5].map((index) => (
            <>
              <div className="form-control">
                <label className="cursor-pointer label flex gap-2">
                  <input type="checkbox" defaultChecked className="w-5" />
                  <span className="label-text">districts name</span>
                </label>
              </div>
            </>
          ))}
          <div className="text-blue-600">ดูเพิ่มเติม</div>
        </div>
        {/* end check */}
        <div className="flex flex-col gap-2">
          <div className="font-semibold text-xl">เขต/ย่ายบ่</div>
          {[1, 2, 3, 4, 5].map((index) => (
            <>
              <div className="form-control">
                <label className="cursor-pointer label flex gap-2">
                  <input type="checkbox" defaultChecked className="w-5" />
                  <span className="label-text">districts name</span>
                </label>
              </div>
            </>
          ))}
          <div className="text-blue-600">ดูเพิ่มเติม</div>
        </div>
        {/* end check */}
        <div className="flex flex-col gap-2">
          <div className="font-semibold text-xl">เขต/ย่ายบ่</div>
          {[1, 2, 3, 4, 5].map((index) => (
            <>
              <div className="form-control">
                <label className="cursor-pointer label flex gap-2">
                  <input type="checkbox" defaultChecked className="w-5" />
                  <span className="label-text">districts name</span>
                </label>
              </div>
            </>
          ))}
          <div className="text-blue-600">ดูเพิ่มเติม</div>
        </div>
      </div>
    </>
  )
}
