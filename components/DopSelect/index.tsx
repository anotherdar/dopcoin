import { useEffect, useState } from "react";
import { FC } from "react";

import { GoChevronDown } from 'react-icons/go';

type Option = {
    id: number,
    icon: React.ReactNode,
    name: string
}
interface Props {
    label?: string
    options: Array<Option>,
    onClick: (value: { name: string, id: number} ) => void
}

export const DopSelect: FC<Props> = ({ options, onClick, label }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currentOption, setCurrentOption] = useState<Option>()

    return (
        <div className='w-full md:w-60 px-3 py-3 bg-gray-200 rounded-sm relative cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <div className='flex justify-between items-center w-full'>
                {!currentOption ? <p className='text-xs text-gray-500 font-medium'>{label || '¿Qué activo desea comprar?'}</p> : (
                    <div className='flex items-center justify-between w-full h-full mr-2'>
                        <p className='text-gray-600 text-sm font-medium'>{currentOption.name}</p>
                    
                        <div className='px-3'></div>
                        {currentOption.icon}
                    </div>
                )}
                {!currentOption && <div className='px-3' />}
                <GoChevronDown className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300 text-gray-600`} />
            </div>

            {/* list of options */}
            {isOpen && <button tabIndex={-1} className='w-screen h-screen bg-transparent fixed top-0 left-0 outline-none' onClick={() => setIsOpen(false)}> </button>}
            <div className={`absolute bg-gray-100 w-full left-0 top-11 ${isOpen ? 'block' : 'hidden'}`}>
                {
                    options.map((o, i) => {
                        return <button 
                                className={`rounded-none flex items-center w-full h-full py-2 px-2 hover:bg-gray-300 transition-all duration-300 ${(i + 1) % 2 === 0 && 'bg-gray-200'}`} 
                                key={o.name}
                                onClick={() => {
                                    onClick({name: o.name, id: o.id})
                                    setCurrentOption(o)
                                }}
                            >
                            {o.icon}
                            <p className='text-gray-600 text-sm font-medium ml-2'>{o.name}</p>
                        </button>
                    })
                }
            </div>
        </div>
    )
}