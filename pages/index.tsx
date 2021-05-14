import Head from 'next/head'
import Link from 'next/link'

import Isometric from 'assets/Isometric.svg'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dopcoin – La Mejor Opción para Comprar y Vender Activos Digitales.</title>
        <link rel="icon" href="/Dopcoin.png" />
      </Head>

      <header className="h-screen container m-auto p-10">
        <nav className="h-1/6">
          <div className='logo'>

          </div>
          <ul className='menu'>
            <li>

            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>

        <div className="h-5/6">
          <div className="h-full grid grid-cols-2">
            <div className=''>

            </div>
            <div className='flex justify-center items-center'>
              <Isometric />
            </div>
          </div>
        </div>
      </header>
      <section className="h-screen container m-auto">

      </section>
      <section className="h-screen container m-auto">

      </section>
    </>
  )
}
