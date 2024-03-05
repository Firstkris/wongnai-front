import Lottie from "lottie-react"
import groovyWalk from "../data/groovyWalk.json"

const style = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  height: 300,
}

export const Loading = () => {
  return <Lottie animationData={groovyWalk} style={style} />
}
