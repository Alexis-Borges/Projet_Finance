import AppContext from "./AppContext"
import { useContext } from "react"

const Income = () => {
  const { totalIncoming } = useContext(AppContext)
  return <p className="text-green-600">{totalIncoming} €</p>
}

export default Income
