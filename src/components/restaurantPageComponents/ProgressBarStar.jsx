export const ProgressBarStar = ({ star = "★", progress = "w-[0%]" }) => {
  return (
    <div className="flex justify-center w-full h-fit gap-2 ">
      <span className="text-xs">{star}</span>
      <div className="w-full pt-1.5">
        <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
          <div
            className={`bg-blue-600 h-1.5  rounded-full dark:bg-blue-500`}
            style={{ width: progress + "%" }}
          ></div>
        </div>
      </div>
    </div>
  )
}
