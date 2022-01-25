import Head from "next/head"
import Header from "../src/components/Header"
import ListEntrys from "../src/components/ListEntrys"
import Income from "../src/components/Income"
import OutGone from "../src/components/OutGone"
import Results from "../src/components/Results"

const Home = () => {
  return (
    <div className="w-3/4 mx-auto">
      <Head>
        <title> Accounting App By Borges </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header pageTitle="Dashboard" />
      <table className="w-full ">
        <thead>
          <tr>
            <th className="border-2 border-sky-200 w-1/2 p-2 font-bold text-2xl">
              Recettes
            </th>
            <th className="border-2 border-sky-200 w-1/2 p-2 font-bold text-2xl">
              Dépenses
            </th>
          </tr>
        </thead>
        <tbody>
          <ListEntrys />
          <tr>
            <td className="border-2 w-1/2 p-2 font-bold text-2xl color-green-200 border-sky-200">
              <p>Recettes totales</p>
              <Income />
            </td>
            <td className="border-2 w-1/2 p-2 font-bold text-2xl border-sky-200">
              <p> Dépenses totales </p>
              <OutGone />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td
              colSpan="2"
              className="border-2 w-full p-2 font-bold text-2xl border-sky-200"
            >
              <p> Résultats </p>
              <Results />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
export default Home
