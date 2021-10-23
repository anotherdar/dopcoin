import { useState } from "react"
import { Service } from '@sections/services/buy/';

function SectionButton(props: { title: string, action: (e: any) => void, body: string, isActive: boolean }) {
    return (
        <button
            className={` md:w-52 text-left border-b-4 ${props.isActive ? 'dop-border' : 'border-transparent'} focus:outline-none`}
            onClick={props.action}
        >
            <h1 className='mb-8 md:text-4xl font-bold'>{props.title}</h1>
            <p className='mb-8 font-medium  md:text-lg'>{props.body}</p>
        </button>
    )
}


export function About() {
    const [section, setSection] = useState<'sell' | 'buy'>('buy');

    return (
        <>
            <div className='px-5 md:px-24 bg-gray-100'>
                <div className='container mx-auto'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-col justify-center items-center py-32'>
                            <h1 className='text-xl md:text-4xl font-bold'>Nuestro servicios</h1>

                            <div style={{ borderWidth: 15 }} className='box mt-10 border-blue-500 p-4 h-36 w-36'>
                                <div style={{ borderWidth: 15 }} className='box dop-border h-full' />
                            </div>

                        </div>
                        {/* buttons */}
                        <div className='px-5 md:px-10 w-full flex justify-between'>
                            <SectionButton
                                isActive={section === 'buy'}
                                title='COMPRAR'
                                body='Adquiere tus activos digitales de manera segura'
                                action={() => setSection('buy')}
                            />
                            <div className='px-3'></div>
                            <SectionButton
                                isActive={section === 'sell'}
                                title='VENDER'
                                body='Intercambia tus activos digitales por dinero o servicios'
                                action={() => setSection('sell')}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Service type={section}/>
        </>
    )
}