import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-sans-serif text-sm lg:flex">
        <nav className="flex justify-end flex-wrap p-6">
          <ul className="flex">
            <li className="mr-6">
              <a className="text-white-400 hover:text-yellow-700" href="#">About</a>
            </li>
            <li className="mr-6">
              <a className="text-white-400 hover:text-yellow-700" href="#">Projects</a>
            </li>
            <li className="mr-6">
              <a className="text-white-400 hover:text-yellow-700" href="#">Contact</a>
            </li>
          </ul>
        </nav> 
        </div> */}
        <div className="bg-yellow-700 h-screen p-6">
          <h1 className="text-6xl font-bold">Coming Soon!</h1>
        </div>
        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <p className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
            © 2023 Nyukeit. Built with ☕ and pride in Aix-en-Provence.
          </p>
        </div> */}
    </main>
  )
}
