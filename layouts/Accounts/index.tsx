import { FC } from "react";
import { DopHead } from '@components/DopHead';
import {DopNav} from '@components/Navigation';

export const AccountLayout: FC<{title: string}> = (props) => {
    return (
        <>
            <DopHead title={`Dopcoin - ${props.title}`} />
            <div className="bg-white h-screen flex flex-col px-5 md:px-10 xl:px-16">
                <DopNav />
                <div className='flex-grow flex items-center justify-center overflow-hidden'>
                    {props.children}
                </div>
            </div>
        </>
    )
}