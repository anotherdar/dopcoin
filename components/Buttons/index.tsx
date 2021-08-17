import {FC} from 'react'
import Link from 'next/link'

type Button = {
    path: string,
    name: string,
    fill?: boolean
}

export const DopButton:FC<Button> = ({path, name, fill = false}) => {
    const styles = 'rounded-md uppercase border-solid border-2 dop-border dop-text py-2 px-3 md:px-5 text-xs md:font-bold hover:bg-blue-500 hover:text-white transition-colors duration-300'
    const fillBtn = 'rounded-md uppercase border-2 border-transparent dop-bg text-white py-2 px-3 md:px-5 text-xs md:font-normal hover:bg-blue-500 transition-colors duration-300'
    return (
        <Link href={path}>
            <a className={`${fill ? fillBtn : styles } w-full text-center`}>
                {name}
            </a>
        </Link>
    )
}