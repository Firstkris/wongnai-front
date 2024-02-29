export const FilterPage = () => {
  return (
    //layout
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 bg-white py-4 my-1 md:px-10 px-4">
        <h3 className="text-gray_secondary">breadClumb</h3>
        <div className="font-semibold text-3xl">
          ร้านอาหารยอดนิยม ในกรุงเทพมหานครอมรรัตนโกสินทร์
        </div>
      </div>

      <div className="md:mx-10  bg-pink-200 ">
        <div className=" flex justify-around gap-4">
          <div className=" bg-slate-200 w-1/2">
            {/* allfilters */}
            filter
          </div>
          <div className="flex flex-col w-full bg-slate-400 gap-4">
            <div className="flex bg-black h-28">
              show photo pagination
              {/* show photo pagination */}
            </div>
            <div className="flex flex-col gap-4">
              {/* restaurants */}
              <div>restaurants</div>
              <div>restaurants</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
