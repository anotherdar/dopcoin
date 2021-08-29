import { FC } from 'react';
import { News } from '../../@types/DopTypes';
import Link from 'next/link';
type Props = {
    news: News
}

export const DopNewsCard: FC<Props> = ({ news }) => {
    const [date, time] = (new Date(news.date).toLocaleString().split(','))
    return (
        <Link href='/noticias/[id]' as={`/noticias/${news.id}`}>
            <a >
                <div className='bg-white shadow-xl rounded-md py-4 px-5 mb-10 w-auto'>
                    <h1 className='dop-text font-medium' dangerouslySetInnerHTML={{
                        __html: news.title.rendered
                    }} />
                    <p
                        className='text-gray-600 py-4 text-sm'
                        dangerouslySetInnerHTML={{
                            __html: news.excerpt.rendered
                        }}
                    ></p>
                    <div className='flex justify-center items-end p-4 flex-col'>
                        <p className='text-gray-400 font-medium text-xs'>{date}</p>
                        <p className='text-gray-400 font-medium text-xs'>{time}</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}
