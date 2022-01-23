import AppContext from "./AppContext"
import { useContext } from "react"

const OutGone = () => {
  const { totalOutgoing } = useContext(AppContext)
  return <p className="text-red-600">{totalOutgoing} €</p>
}

export default OutGone
