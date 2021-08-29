import { Account } from "@components/Account";
import { DopLayout } from "@layouts/Accounts";
import { motion } from "framer-motion";
import { DopButton } from '@components/Buttons';
import { Routes } from 'utils/routes';


export default function Page() {
    return (
        <DopLayout title='Crear cuenta'>
            <motion.div animate={{ y: [1000, 0] }} className='mt-10 dop-bg p-2 rounded-lg h-5/6 xl:w-3/5 w-full md:flex shadow-lg'>
                <div className='hidden w-3/5 md:flex items-center justify-center'>
                    <h1 className='text-white text-xl'>¡Encantado de conocerte!</h1>

                    <div className=''>

                    </div>
                </div>
                <div className='relative w-full h-full  md:w-2/5 bg-white rounded-sm p-2 flex flex-col items-center'>
                    <div className='absolute -top-10'>
                        <Account />
                    </div>
                    <div className='text-center p-2 pt-4  my-4 mt-2'>
                        <h1 className='dop-text font-semibold text-lg'>Crear cuenta</h1>
                    </div>
                    <div className='form-container w-full px-5'>
                        <label className=' flex items-center border-b-2 dop-border p-2 bg-gray-100 rounded-sm w-full md:2-60 my-5 mt-0 '>
                            <input className='bg-transparent outline-none w-full h-full text-sm text-gray-900' placeholder='Nombre de usuario' />
                        </label>
                        <label className=' flex items-center border-b-2 dop-border p-2 bg-gray-100 rounded-sm w-full md:2-60 my-5'>
                            <input className='bg-transparent outline-none w-full h-full text-sm text-gray-900' placeholder='Nombre(s)*' />
                        </label>
                        <label className=' flex items-center border-b-2 dop-border p-2 bg-gray-100 rounded-sm w-full md:2-60 my-5'>
                            <input className='bg-transparent outline-none w-full h-full text-sm text-gray-900' placeholder='Apellido(s)*' />
                        </label>
                        <label className=' flex items-center border-b-2 dop-border p-2 bg-gray-100 rounded-sm w-full md:2-60 my-5'>
                            <input className='bg-transparent outline-none w-full h-full text-sm text-gray-900' placeholder='Dirección*' />
                        </label>
                        <label className=' flex items-center border-b-2 dop-border p-2 bg-gray-100 rounded-sm w-full md:2-60 my-5'>
                            <input className='bg-transparent outline-none w-full h-full text-sm text-gray-900' placeholder='Correo*' />
                        </label>
                        <label className=' flex items-center border-b-2 dop-border p-2 bg-gray-100 rounded-sm w-full md:2-60 my-5'>
                            <input className='bg-transparent outline-none w-full h-full text-sm text-gray-900' placeholder='Cédula*' />
                        </label>
                        <label className=' flex items-center border-b-2 dop-border p-2 bg-gray-100 rounded-sm w-full md:2-60 my-5'>
                            <input className='bg-transparent outline-none w-full h-full text-sm text-gray-900' placeholder='Contraseña*' />
                        </label>
                        <label className=' flex items-center border-b-2 dop-border p-2 bg-gray-100 rounded-sm w-full md:2-60 my-5 mb-10'>
                            <input className='bg-transparent outline-none w-full h-full text-sm text-gray-900' placeholder='Repetir Contraseña*' />
                        </label>

                        <div className='w-full flex flex-col mb-5'>
                            <button className='w-full mb-5 rounded-md uppercase border-2 border-transparent dop-bg text-white py-2 px-3 md:px-5 text-xs md:font-normal hover:bg-blue-600 transition-colors duration-300'>Crear cuenta</button>
                            <DopButton path={Routes.signIn} name='Iniciar sesión' />
                        </div>
                    </div>

                </div>
            </motion.div>
        </DopLayout>
    )
}