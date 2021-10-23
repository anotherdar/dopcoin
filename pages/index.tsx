import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { DopCard, TDopCard } from '@components/Card'
import { DopNav } from '@components/Navigation'
import { Footer } from '@components/Footer'
import { DopHead } from '@components/DopHead'
import { Routes } from 'utils/routes'



const cardInfos: Array<TDopCard> = [
  {
    img: '/Wallet.svg',
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
      <DopHead title='Dopcoin – La Mejor Opción para Comprar y Vender Activos Digitales.'>
        <meta name="description" content="La mejor opción para comprar y vender activos digitales de forma rápida, sencilla y segura." />
      </DopHead>
      {/* header */}
      <header className="h-screen m-auto px-5 md:px-10 xl:px-16 overflow-hidden">
        {/* nav menu */}
        <DopNav />

        <div className="container mx-auto h-5/6 xl:p-10">
          <div className="h-full grid grid-rows-2 md:grid-rows-none md:grid-cols-2">
            <div className='flex flex-col justify-center items-center md:px-5 xl:px-10'>
              <motion.h1 animate={{
                x: [-1000, 0]
              }} className='leading-6 text-center md:text-justify text-lg md:text-xl xl:text-4xl font-semibold text-gray-800'>La mejor opción para comprar y vender activos digitales de forma rápida, sencilla y segura.</motion.h1>
              <motion.div animate={{
                y: [1000, 0]
              }} className='controls w-full py-5 md:py-8 flex justify-center items-center md:justify-start'>
                <Link href={Routes.signUp}>
                  <a className='rounded-md uppercase border-2 border-transparent dop-bg text-white py-2 px-3 md:px-5 mr-5 text-xs md:font-normal hover:bg-blue-500 transition-colors duration-300'>
                    Crear Cuenta
                  </a>
                </Link>
                <Link href={Routes.signIn}>
                  <a className='rounded-md uppercase border-solid border-2 dop-border dop-text py-2 px-3 md:px-5 text-xs md:font-normal hover:bg-blue-500 hover:text-white transition-colors duration-300'>
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

      <section className="md:h-screen md:grid md:grid-cols-2 xl:h-full">
        <div className='md:flex justify-center items-center hidden md:visible'>
          <div className="w-60 xl:w-96">
            <Image src='/Team.svg' height='500px' width='500px' />
          </div>
        </div>
        <div className='dop-bg w-full h-full flex flex-col items-center md:block p-10'>
          <div className='visible md:hidden'>
            <Image src='/Team.svg' height='250px' width='250px' />
          </div>
          <div className='xl:w-1/2 xl:py-32 py-5 text-center md:h-full md:flex justify-center items-center flex-col'>
            <h1 className="text-white text-lg my-4 font-mediun md:text-xl md:font-bold">Dopcoin</h1>

            <p className="text-white text-center font-semibold">¿Cómo nació la idea de DopCoin?</p>

            <p className="text-center my-4 text-white font-light text-sm">Desde siempre el equipo de <b className='font-semibold'>DopCoin</b> y sus fundadores se ha sentido atraído por el internet y sus inmensas ideas, como milenial en búsquedas diarias de cosas nuevas encontramos el mundo de las criptomonedas, específicamente que algunas empresas empezaban aceptar bitcoins como medio de pago. Cuando el interés creció fue cuando leímos sobre cómo funcionaba La ''Descentralización'' más acerca de esta tecnología llamada Blockchain.</p>
            
            <div className='go-to'>
                <Link href='/sobre-nosotros'>
                    <a>
                      <div className='py-2 px-11 bg-white dop-text rounded-sm shadow-md hover:text-blue-500'>
                        <p>Leer mas!</p>
                      </div>
                    </a>
                </Link>
            </div>

          </div>
        </div>
      </section>
      {/*  */}
      <section className="bg-gray-100 p-5 py-10">
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
      <Footer />
    </div>
  )
}
