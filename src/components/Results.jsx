import AppContext from "./AppContext"
import { useContext } from "react"

const Results = () => {
  const { totalIncoming, totalOutgoing } = useContext(AppContext)
  const color =
    totalIncoming + totalOutgoing > 0 ? "text-green-600" : "text-red-600"
  return <p className={color}>{totalIncoming + totalOutgoing} €</p>
}

export default Results
