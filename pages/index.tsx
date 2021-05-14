import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { DopCard, TDopCard } from '@components/Card'
import { DopNav } from '@components/Navigation'



const cardInfos: Array<TDopCard> = [
  {
    img: '/wallet.svg',
    path: '/comprar',
    options: [
      'Bitcoins.',
      'Ethereum.',
      'Bitcoin Express.',
      'Compra DOPCOIN.'
    ],
    btnTitle: 'Comprar',
    title: 'Adquiere tus activos digitales de manera segura'
  },
  {
    img: '/Basket.svg',
    path: '/vender',
    options: [
      'Intercabiar DOPCOIN.',
      'Recargas.',
      'Servicios.',
      'Pagar facturas.',
    ],
    btnTitle: 'Vender',
    title: 'Intercambia tus activos digitales por dinero o servicios'
  },
]

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dopcoin – La Mejor Opción para Comprar y Vender Activos Digitales.</title>
        <link rel="icon" href="/Dopcoin.png" />
      </Head>
      {/* header */}
      <header className="h-screen m-auto px-5 md:px-10 overflow-hidden">
        {/* nav menu */}
        <div className='sticky top-0 left-0 bg-white'>
          <DopNav />
        </div>

        <div className="h-5/6 xl:p-10">
          <div className="h-full grid grid-rows-2 md:grid-rows-none md:grid-cols-2">
            <div className='flex flex-col justify-center items-center md:px-5 xl:px-10'>
              <motion.h1 animate={{
                x: [-1000, 0]
              }} className='leading-6 text-center md:text-justify text-lg md:text-xl xl:text-4xl font-semibold text-gray-800'>La mejor opción para comprar y vender activos digitales de forma rápida, sencilla y segura.</motion.h1>
              <motion.div animate={{
                y: [1000, 0]
              }} className='controls w-full py-5 md:py-8 flex justify-center items-center md:justify-start'>
                <Link href='/'>
                  <a className='rounded-md uppercase border-2 border-transparent bg-blue-700 text-white py-2 px-3 md:px-5 mr-5 text-xs md:font-normal hover:bg-blue-600 transition-colors duration-300'>
                    Crear Cuenta
                    </a>
                </Link>
                <Link href='/'>
                  <a className='rounded-md uppercase border-solid border-2 border-blue-700 text-blue-700 py-2 px-3 md:px-5 text-xs md:font-normal hover:bg-blue-700 hover:text-white transition-colors duration-300'>
                    Iniciar sesión
                    </a>
                </Link>
              </motion.div>
            </div>
            <div className='flex justify-center items-center md:px-5 order-first md:order-last w-30 xl:h-auto'>
              <motion.div
                animate={{
                  x: [1000, 0]
                }}
              >
                <Image src='/Isometric.svg' height='500px' width='500px' />
              </motion.div>
            </div>
          </div>
        </div>
      </header>
      <section className="md:h-screen md:grid md:grid-cols-2">
        <div className='md:flex justify-center items-center hidden md:visible'>
          <div className="w-60 xl:w-96">
            <Image src='/Team.svg' height='500px' width='500px' />
          </div>
        </div>
        <div className='bg-blue-700 w-full h-full flex flex-col items-center md:block p-10'>
          <div className='visible md:hidden'>
            <Image src='/Team.svg' height='250px' width='250px' />
          </div>
          <div className='py-5 text-center md:h-full md:flex justify-center items-center flex-col'>
            <h1 className="text-white text-lg my-4 font-mediun md:text-xl md:font-bold">Dopcoin</h1>

            <p className="text-white text-left font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

            <p className="text-justify my-4 text-white font-light text-sm">Turpis pellentesque condimentum aliquam ultricies congue aliquam id. Mauris faucibus sit sapien, aliquam tristique amet. Viverra in suspendisse dolor elit sed sit. Elit cras ultrices pellentesque pretium lorem accumsan.</p>
            <p className="text-justify my-4 text-white font-light text-sm">Elit cras ultrices pellentesque pretium lorem accumsan.Elit cras ultrices pellentesque pretium lorem accumsan.</p>
          </div>
        </div>
      </section>
      <section className="container m-auto bg-gray-100 p-5 py-10">
        <div className='text-center'>
          <h1 className='text-gray-800 text-xl font-bold'>¿Listo para ordenar?</h1>
          <p className='text-gray-700 text-sm font-medium'>Ordenar es facil y sencillo</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center p-5 w-full">
          {
            cardInfos.map(card => {
              return <DopCard key={card.title} {...card} />
            })
          }
        </div>
      </section>
    </div>
  )
}
