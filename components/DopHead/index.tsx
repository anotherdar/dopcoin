import Head from 'next/head';
import { FC } from 'react';

export type TDopHead = {
    title: string
}

export const DopHead: FC<TDopHead> = ({ children, title }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{title}</title>
            <link rel="icon" href="/Dopcoin.png" />
            {children}
        </Head>
    )
}