import { FC } from 'react';
import Image from 'next/image';
import { DopButton } from '@components/Buttons';
import { motion } from 'framer-motion'
export type TDopCard = {
    img: string,
    title: string,
    options: Array<string>,
    btnTitle: string,
    path: string
}

export const DopCard:FC<TDopCard> = ({img, title, options, btnTitle, path}) => {
    return <motion.div whileHover={{ scale: 1.05 }} className='select-none w-60 rounded-md shadow-xl p-5 bg-white mb-4 md:m-4'>
        <div className='w-full flex items-center justify-center py-5'>
            <Image src={img} width='48px' height='48px' />
        </div>
        <div className='w-full py-2'>
            <h1 className="text-gray-800 font-bold text-sm">{title}</h1>
        </div>
        <ul className='w-full'>
           {
               options.map(option => {
                   return <li className='text-gray-700 text-xs font-medium' key={option}>{option}</li>
               })
           } 
        </ul>
        <div className='w-full pt-5 flex'>
            <DopButton name={btnTitle} path={path} fill/>
        </div>
    </motion.div>
}