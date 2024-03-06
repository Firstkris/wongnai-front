export const ButtonRestaurantPage = ({
  children,
  color = "bg-gray-200 hover:bg-gray-300",
  textColor = "text-black",
  onClick,
}) => {
  return (
    <button
      className={`flex ${color} ${textColor} rounded-md px-2 py-1 gap-1  items-center`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
