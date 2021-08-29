import { GetStaticProps, NextPage } from 'next';
import { DopLayout } from '../layouts/Accounts/index';
import { News } from '../@types/DopTypes';
import { DopNewsCard } from '@components/DopNewsCard';

type Props = {
    news: News[]
}

const Noticias: NextPage<Props> = ({ news }) => {
    return (
        <DopLayout title='Noticias'>
            <div className='px-3 xl:px-48 flex items-center'>

                <ul className='container border-l-2 pl-4 border-dashed'>
                    {
                        news.map(n => {
                            return <li key={n.id}>
                                <DopNewsCard key={n.id} news={n} />
                            </li>
                        })
                    }
                </ul>
            </div>
        </DopLayout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch('https://dopcoin.info/wp-json/wp/v2/posts');
    const news = await res.json();

    return {
        props: {
            news
        }
    }
}

export default Noticias
