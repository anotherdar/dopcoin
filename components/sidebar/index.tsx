import { FC } from "react"
import { DopLink } from '@components/Links';
import { motion } from 'framer-motion'

type props = {
    isOpen: boolean
    onClose: (status: boolean) => void
}

const routes = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre nosotros', path: '/sobre-nosotros' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Noticias', path: '/noticias' },
]

export const Sidebar: FC<props> = ({ isOpen, onClose }) => {
    return (
        isOpen ? (
            <button className='dropdown' tabIndex={-1} onClick={() => {
                onClose(false)
            }} >
                <motion.div animate={{
                    x: [-1000, 0]
                }} className='h-screen w-52 bg-white flex flex-col items-center justify-center fixed top-0 left-0 z-50'>
                    <ul className='text-left text-4xl'>
                        {routes.map(r => {
                            return <li key={r.name}>
                                <DopLink {...r} />
                            </li>
                        })}
                        <li>
                            <DopLink name='Contacto' path='/contacto' />
                        </li>
                    </ul>
                </motion.div>
            </button>
        ) : <> </>
    )
}
