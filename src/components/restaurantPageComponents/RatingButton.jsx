export const RatingButton = ({ children, onClick, isSelected }) => {
  return (
    <div
      className={`py-1 px-2 bg-gray_primary hover:bg-gray-200 border rounded-md min-w-fit cursor-pointer flex text-center gap-1`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
