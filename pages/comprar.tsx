import Image from 'next/image';

import { DopSelect } from "@components/DopSelect";
import { AccountLayout } from "@layouts/Accounts";
import { FaBitcoin,FaCircle } from 'react-icons/fa'
import { SiEthereum } from 'react-icons/si'
import { AiFillDollarCircle, AiTwotoneBank } from 'react-icons/ai'
import { GiWallet, GiPresent } from 'react-icons/gi'
import { MdAccountCircle, MdPhone, MdMail } from 'react-icons/md'
import { BsPersonFill } from 'react-icons/bs'

export default function Page() {
    return (
        <AccountLayout title='Comprar'>
            <div className='dop-bg p-2 rounded-lg h-5/6 xl:w-3/5 w-11/12 md:flex shadow-lg'>
                <div className='hidden w-3/5 md:flex items-center justify-center'>
                    <h1 className='text-white text-xl'>¡Formulario de compra!</h1>

                    <div className=''>

                    </div>
                </div>
                <div className='relative w-full h-full  md:w-2/5 bg-white rounded-sm p-2 flex flex-col justify-evenly items-center'>
                    <div className='mb-5'>
                        <div className='w-full flex items-center justify-center py-5'>
                            <Image src='/Wallet.svg' width='48px' height='48px' />
                        </div>
                        <p className='dop-text text-xs font-medium text-center'>
                            Por favor indique los datos solicitados a continuación para proceder con el inicio de su orden de compra
                        </p>
                    </div>
                    {/*  */}
                    <div className='form-container'>
                        <DopSelect
                            options={[
                                {
                                    icon: <FaBitcoin className='text-xl' />,
                                    name: 'BTC',
                                    id: 1
                                },
                                {
                                    icon: <SiEthereum className='text-xl' />,
                                    name: 'Ethereum',
                                    id: 2
                                },
                                {
                                    icon: <FaCircle className='text-xl' />,
                                    name: 'USDT',
                                    id: 2
                                },
                            ]}
                            onClick={value => console.log(value)}
                        />

                        <label className='flex items-center w-full md:w-60 px-3 py-2  my-5 bg-gray-200 rounded-sm'>
                            <input type='text' data-inputmask="'mask': '9999 9999 9999 9999'" className='bg-transparent outline-none w-full h-full text-xs text-gray-900' placeholder='Ingrese su cédula' />
                            <div className='px-3'></div>
                            <MdAccountCircle className=' text-blue-400 text-2xl' />
                        </label>
                        <label className='flex items-center w-full md:w-60 px-3 py-2  my-5 bg-gray-200 rounded-sm'>
                            <input type='text' className='bg-transparent outline-none w-full h-full text-xs text-gray-900' placeholder='¿Qué monto desea comprar?' />
                            <div className='px-3'></div>
                            <AiFillDollarCircle className=' text-yellow-400 text-2xl' />
                        </label>

                        <label className='flex items-center w-full md:w-60 px-3 py-2  my-5 bg-gray-200 rounded-sm'>
                            <input type='text' className='bg-transparent outline-none w-full h-full text-xs text-gray-900' placeholder='Coloque su Wallet' />
                            <div className='px-3'></div>
                            <GiWallet className=' text-green-400 text-2xl' />
                        </label>
                        <label className='flex items-center w-full md:w-60 px-3 py-2  my-5 bg-gray-200 rounded-sm'>
                            <input type='text' className='bg-transparent outline-none w-full h-full text-xs text-gray-900' placeholder='Código de oferta' />
                            <div className='px-3'></div>
                            <GiPresent className=' text-red-400 text-2xl' />
                        </label>
                        <label className='flex items-center w-full md:w-60 px-3 py-2 my-5 bg-gray-200 rounded-sm'>
                            <input type='text' className='bg-transparent outline-none w-full h-full text-xs text-gray-900' placeholder='Seleccione un banco' />
                            <div className='px-3'></div>
                            <AiTwotoneBank className=' text-green-400 text-2xl' />
                        </label>
                        <label className='flex items-center w-full md:w-60 px-3 py-2 my-5 bg-gray-200 rounded-sm'>
                            <input type='text' className='bg-transparent outline-none w-full h-full text-xs text-gray-900' placeholder='Nombre completo' />
                            <div className='px-3'></div>
                            <BsPersonFill className=' text-blue-400 text-2xl' />
                        </label>
                        <label className='flex items-center w-full md:w-60 px-3 py-2 my-5 bg-gray-200 rounded-sm'>
                            <input type='text' className='bg-transparent outline-none w-full h-full text-xs text-gray-900' placeholder='Ingrese su número de contacto' />
                            <div className='px-3'></div>
                            <MdPhone className=' text-indigo-400 text-2xl' />
                        </label>
                        <label className='flex items-center w-full md:w-60 px-3 py-2 my-5 bg-gray-200 rounded-sm'>
                            <input type='text' className='bg-transparent outline-none w-full h-full text-xs text-gray-900' placeholder='Correo electrónico de contacto' />
                            <div className='px-3'></div>
                            <MdMail className=' text-purple-400 text-2xl' />
                        </label>

                        <div className='my-5'>
                            <button type='submit' className='mb-5 w-full font-semibold dop-bg text-white uppercase text-xs p-2 hover:bg-blue-500 transition-all duration-300'>
                                comprar
                            </button>
                            <button type='submit' className='w-full dop-text uppercase font-semibold text-xs p-2 hover:dop-bg hover:text-white transition-all duration-300'>
                                vender
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AccountLayout>
    )
}