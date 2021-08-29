import { FC } from 'react';
import { News } from '../../@types/DopTypes';
import Link from 'next/link';

import { MdArrowForward } from 'react-icons/md'

type Props = {
    news: News
}

export const DopNewsCard: FC<Props> = ({ news }) => {
    const [date, time] = (new Date(news.date).toLocaleString().split(','))
    return (
        <Link href='/noticias/[id]' as={`/noticias/${news.id}`}>
            <a className=' hover:text-blue-500 text-gray-500'>
                <div className='mb-10 flex'>
                    <div className='md:flex justify-center items-end py-4 flex-col mr-4 hidden'>
                        <p className='font-medium text-xs'>{date}</p>
                        <p className='font-medium text-xs'>{time}</p>
                    </div>
                    <div className='bg-white py-4 px-5 w-auto'>
                        <h1 className='dop-text font-medium' dangerouslySetInnerHTML={{
                            __html: news.title.rendered
                        }} />
                        <p
                            className='text-gray-400 py-4 text-sm'
                            dangerouslySetInnerHTML={{
                                __html: news.excerpt.rendered
                            }}
                        ></p>
                        <div className='flex justify-center items-end p-4 flex-col mr-4'>
                            <div className='mb-2 md:hidden text-right'>
                                <p className='font-medium text-xs'>{date}</p>
                                <p className='font-medium text-xs'>{time}</p>
                            </div>
                            <div className='flex items-center'>
                                <p className='text-xs mr-1'>Leer mas</p>
                                <MdArrowForward className='text-lg' />
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}
