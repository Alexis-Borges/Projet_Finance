import Link from "next/link"

const Header = ({ pageTitle }) => {
  return (
    <header className="flex justify-between border-4 border-sky-500 px-10 m-5 p-5 rounded-xl">
      <h1 className="font-bold text-4xl">{pageTitle}</h1>
      <nav className="text-2xl">
        <Link href="/">
          <a className="p-2 hover:bg-gray-300 rounded-xl"> Journal </a>
        </Link>
        <Link href="/entry">
          <a className="p-2 hover:bg-gray-300 rounded-xl" h->
            Add Entry
          </a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
