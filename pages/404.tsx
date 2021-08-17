
import Image from 'next/image'
import Link from 'next/link'

import { IoArrowBackOutline } from 'react-icons/io5'

const NotFound = () => {
    return (
        <div className='h-screen flex items-center justify-center flex-col'>
            <Image className='cursor-pointer' src='/Dopcoin_logo.svg' height='75px' width='' />
            <h1>Lo sentimos!, no disponible en estos momentos</h1>

            <Link href='/'>
                <a className='dop-text py-2 flex items-center justify-center'> <IoArrowBackOutline size={24} className='text-gray-800'/> Volver</a>
            </Link>
        </div>
    )
}

export default NotFound