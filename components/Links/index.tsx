import { FC } from "react"
import Link from 'next/link'

type TDopLink = {
    name: string,
    path: string,
    isBtn?: boolean,
}

export const DopLink: FC<TDopLink> = ({ name, path, isBtn = false }) => {
    return !isBtn ? <Link href={path}>
        <a className='px-3 xl:px-5 capitalize font-medium text-xs xl:text-base hover:text-blue-500 transition-colors duration-150'>
            {name}
        </a>
    </Link> :
        <Link href={path}>
            <a className='rounded-md capitalize border-solid border-2 dop-border dop-text py-2 px-3 md:px-5 text-xs md:font-bold hover:bg-blue-500 hover:text-white transition-colors duration-300'>
                {name}
            </a>
        </Link>
}
