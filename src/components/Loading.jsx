import Lottie from "lottie-react"
import groovyWalk from "../data/groovyWalk.json"

const style = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  height: 300,
}

export const Loading = () => {
  return (
    <div className=" flex justify-center items-center h-screen">
      <Lottie animationData={groovyWalk} style={style} />
    </div>
  )
}
