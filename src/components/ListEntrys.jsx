import React from "react"
import AppContext from "./AppContext"
import { useContext } from "react"

const ListEntrys = () => {
  const { datas } = useContext(AppContext)
  return (
    <>
      {datas.map(({ amount, description }, id) => (
        <tr key={id} className={id % 2 === 1 ? "bg-gray-100" : null}>
          {amount > 0 ? (
            <>
              <td className="border-2 border-sky-200 w-1/2 p-2 text-right">
                <p className="text-2xl text-green-600"> {amount} €</p>
                <p className="text-2xl break-all"> {description} </p>
              </td>
              <td className="border-2 border-sky-200 w-1/2 p-2"></td>
            </>
          ) : (
            <>
              <td className="border-2 border-sky-200 w-1/2 p-2"> </td>
              <td className="border-2 border-sky-200 w-1/2 p-2 text-right">
                <p className="text-2xl text-red-600"> {amount} €</p>
                <p className="text-2xl break-all"> {description} </p>
              </td>
            </>
          )}
        </tr>
      ))}
    </>
  )
}

export default ListEntrys
