import { GetServerSideProps, NextPage } from 'next';
import { DopLayout } from '../../../layouts/Accounts/index';
import { News } from '../../../@types/DopTypes';

type Props = {
    singleNews: News
}

const NewsDetails: NextPage<Props> = ({ singleNews }) => {
    return (
        <DopLayout title={singleNews.slug}>
            <article className='prose-sm md:prose lg:prose-lg xl:prose-xl px-5 xl:px-16 py-16' dangerouslySetInnerHTML={{
                __html: singleNews.content.rendered
            }} />
        </DopLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async(context) => {
    const res = await fetch(`https://dopcoin.info/wp-json/wp/v2/posts/${context.params?.id}`);
    const singleNews = await res.json();

    return {
        props: {
            singleNews
        }
    }
}

export default NewsDetails