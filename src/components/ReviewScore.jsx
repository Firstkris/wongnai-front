import { AiFillStar } from "react-icons/ai"

export const ReviewScore = ({ score }) => {
  const formattedScore = parseFloat(score).toFixed(1)
  console.log(score, "score")
  const getBackgroundColorClass = (score) => {
    if (score >= 4.5) {
      return "bg-gradient-to-r from-yellow-500 to-red-600" // Example: red gradient for high scores
    } else if (score >= 3.5) {
      return "bg-gradient-to-r  from-orange-600 to-red-700 " // Example: orange gradient for moderate scores
    } else {
      return "bg-gradient-to-r  from-orange-700 to-red-700 " // Default background color for other scores
    }
  }
  const gradient = getBackgroundColorClass(score)
  return (
    <div
      className={`rounded-lg  px-1.5 py-0.5 font-semibold text-sm text-white ${gradient} flex items-center gap-1`}
    >
      <span>{formattedScore}</span> <AiFillStar />
    </div>
  )
}
