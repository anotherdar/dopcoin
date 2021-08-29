import { FC } from "react";
import {ImLinkedin, ImFacebook2, ImTwitter} from 'react-icons/im'
import { IoLogoWhatsapp } from 'react-icons/io'
import { AiFillInstagram } from 'react-icons/ai'
import Image from 'next/image';
import { useViewport } from "@hooks/useViewport";


export const Footer: FC = () => {
    const { width } = useViewport();
    const breakPoint: number = 425;

    return (
        <footer className='py-4 px-10 bg-gray-800'>
            <div className='flex flex-col justify-center items-center'>
                <div className=''>
                    <Image src='/Dopcoin_white.svg' height='75px' width={width > breakPoint ? '350px' : '500px'}/>
                </div>
                <div className='flex justify-evenly  w-full md:w-1/5 py-5'>
                    <a href="https://www.facebook.com/DopCoin/" target='_blank' rel='noopener noreffer'>
                        <ImFacebook2 size='1.5em' color='#fff' />
                    </a>
                    <a href="https://twitter.com/dopcoin" target='_blank' rel='noopener noreffer'>
                        <ImTwitter size='1.5em' color='#fff' />
                    </a>
                    <a href="https://www.instagram.com/dopcoin/" target='_blank' rel='noopener noreffer'>
                        <AiFillInstagram size='1.5em' color='#fff' />
                    </a>
                    {/* <a href="https://www.google.com" target='_blank' rel='noopener noreffer'>
                        <IoLogoWhatsapp size='1.5em' color='#fff' />
                    </a> */}
                </div>
                <p className='p-5 text-white'>(809) - 316 - 4919</p>
            </div>
            <div className=''>
                <p className="text-center text-white text-xs">DOPCOIN {new Date().getFullYear()} - Todos los derechos reservados</p>
            </div>
        </footer>
    )
}