import { FC } from 'react'
import { motion } from 'framer-motion'
import { HiMenu } from 'react-icons/hi'
import { DopLink } from '@components/Links'
import Image from 'next/image'
import Link from 'next/link';

const routes = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre nosotros', path: '/sobre-nosotros' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Noticias', path: '/noticias' },
]
export const DopNav: FC = () => {
    return (
        <motion.div animate={{
            y: [-100, 0]
        }} className='h-1/6 '>
            <nav className="h-full flex justify-between items-center xl:px-16">

                <div className='logo w-32 md:w-40'>
                    <Link href='/'>
                        <a>
                            <Image className='cursor-pointer' src='/Dopcoin_logo.svg' height='75px' width='' />
                        </a>
                    </Link>
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
            </nav>
        </motion.div>
    )
}