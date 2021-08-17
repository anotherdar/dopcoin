import { Account } from "@components/Account";
import { DopButton } from "@components/Buttons";
import { AccountLayout } from "@layouts/Accounts";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsFillPersonFill } from 'react-icons/bs'
import { FaKey } from 'react-icons/fa'
import { Routes } from "utils/routes";

export default function Page() {
    return (
        <AccountLayout title='Iniciar sesion'>
            <motion.div animate={{y: [1000, 0]}} className='dop-bg p-2 mt-10 rounded-lg h-5/6 xl:w-3/5 w-11/12 md:flex shadow-lg mb-20'>
                <div className='hidden w-3/5 md:flex items-center justify-center'>
                    <h1 className='text-white text-xl'>¡Bienvenido!</h1>
                </div>
                <div className='relative w-full h-full md:w-2/5 bg-white rounded-sm shadow-md flex flex-col justify-evenly items-center'>
                    <div className='absolute -top-10'>
                        <Account />
                    </div>
                    <div className='text-center p-2 pt-10 md:py-10'>
                        <h1 className='dop-text font-semibold text-lg'>Iniciar sesión</h1>
                        <p className='md:hidden text-xs text-gray-800'>Bienvenido de vuelta</p>
                    </div>
                    <div className='px-5 w-full text-center'>
                        <label className='flex items-center border-b-2 dop-border p-2 mb-7 bg-gray-200 rounded-sm'>
                            <BsFillPersonFill className='mr-2 text-gray-500'/>
                            <input className='bg-transparent outline-none w-full h-full text-sm text-gray-900' placeholder='Usuario o correo'/>
                        </label>
                        <label className='flex items-center border-b-2 dop-border p-2 mb-7 bg-gray-200 rounded-sm'>
                            <FaKey className='mr-2 text-gray-500'/>
                            <input type='password' className='bg-transparent outline-none w-full h-full text-sm text-gray-900' placeholder='Contraseña'/>
                        </label>
                        <div className='py-3'>
                            <Link href={Routes.forgotPassword}><a className='text-xs text-gray-400 font-semibold text-center my-3'>¿Has olvidado tu <span className='dop-text'>contraseña</span>?</a></Link>
                        </div>
                    </div>
                    <div className='w-full flex px-5 flex-col mb-5'>
                        <button className='w-full mb-4 rounded-md uppercase border-2 border-transparent dop-bg text-white py-2 px-3 md:px-5 text-xs md:font-normal hover:bg-blue-600 transition-colors duration-300'>Iniciar sesión</button>
                        <DopButton path={Routes.signUp} name='Crear cuenta'/>
                    </div>
                </div>
            </motion.div>
        </AccountLayout>
    )
}