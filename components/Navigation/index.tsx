import { FC } from 'react'
import { motion } from 'framer-motion'
import { HiMenu } from 'react-icons/hi'
import { DopLink } from '@components/Links'
import Image from 'next/image'

const routes = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre nosotros', path: '/sobre-nosotros' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Noticias', path: '/noticias' },
]
export const DopNav: FC = () => {
    return (
        <motion.nav animate={{
            y: [-100, 0]
        }} className="h-1/6  flex justify-between items-center">
            <div className='logo w-32 md:w-40 xl:ml-16'>
                <Image src='/Dopcoin_logo.svg' height='75px' width='' />
            </div>

            <button className='md:hidden'>
                <HiMenu size='2em' className="text-gray-800" />
            </button>

            {/* options */}
            <ul className='hidden md:flex'>
                {routes.map(r => {
                    return <li key={r.name}>
                        <DopLink {...r} />
                    </li>
                })}
                <li>
                    <DopLink isBtn name='Contacto' path='/contacto' />
                </li>
            </ul>
        </motion.nav>
    )
}