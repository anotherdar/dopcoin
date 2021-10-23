
import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => {
    return (
        <div className='h-screen flex items-center justify-center flex-col'>
            <Image src='/Dopcoin_logo.svg' height='75px' width='' />
            <h1 className='dop-text text-9xl my-4'>404</h1>
            <h1 className=''>Lo sentimos!, no disponible en estos momentos</h1>

            <Link href='/'>
                <a className='dop-text py-1 px-8 rounded flex items-center justify-center my-6 text-white dop-bg'>
                    <span className='text-white'>inicio</span>
                </a>
            </Link>
        </div>
    )
}

export default NotFound