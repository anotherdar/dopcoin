import { FC } from "react";
import { DopHead } from '@components/DopHead';
import {DopNav} from '@components/Navigation';

export const AccountLayout: FC<{title: string}> = (props) => {
    return (
        <>
            <DopHead title={`Dopcoin - ${props.title}`} />
            <div className="bg-white  flex flex-col px-5 md:px-10 xl:px-16 py-5">
                <DopNav />
                <div className='h-full flex-grow flex items-center justify-center overflow-hidden px-3'>
                    {props.children}
                </div>
            </div>
        </>
    )
}