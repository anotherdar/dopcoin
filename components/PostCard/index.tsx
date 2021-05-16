import Link from 'next/link'
import { motion } from 'framer-motion'
import { FC } from 'react'

export type TPostCard = {
    img: string,
    title: string,
    time: string,
    desc: string,
    path: string
}

export const Data:Array<TPostCard> = [
    {
        img: 'https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80',
        title: 'Why is the Tesla Cybertruck designed the way it is?',
        time: '2h ago',
        desc: 'An exploration into the truck’s polarising design.',
        path : '/id'
    },
    {
        img: 'https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80',
        title: 'Why is the Tesla Cybertruck designed the way it is?',
        time: '2h ago',
        desc: 'An exploration into the truck’s polarising design.',
        path : '/2'
    },
]

export const PostCard:FC<TPostCard> = ({img, title, time, desc, path}) => {
    return (
        <div className="select-none w-64 rounded-md shadow-xl bg-white mb-4 md:m-4">
            <div className='overflow-hidden rounded-t-md'>
                <motion.img whileHover={{scale: 1.1}} className='rounded-t-md' src={img} alt="" />
            </div>
            <div className="p-5">
                <h1 className="text-gray-800 font-bold text-sm">{title}</h1>
                <p className='text-sm font-light py-2'>{time}</p>
            </div>
            <div className='px-5 pb-5'>
                <p className='text-sm font-medium'>{desc}</p>
            </div>
            <div className='px-5 pb-5'>
                <Link href={path}>
                    <a className='font-semibold transition-colors duration-200 text-gray-700 hover:text-blue-800 text-sm '>Leer mas.</a>
                </Link>
            </div>
        </div>
    )
}