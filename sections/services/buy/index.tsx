import { FC, ReactNode } from "react"
import Image from 'next/image';

type CardProps = {
    icon: ReactNode,
    title: string,
    body: string
}

function Card(props: CardProps) {
    return (
        <div className='w-full md:w-2/6  m-2 p-4 flex-col flex justify-center items-center'>
            <div className='h-14 w-14 mb-4'>
                {props.icon}
            </div>
            <h1 className='font-semibold text-xl md:text-xl mb-4'>{props.title}</h1>
            <p className='font-medium'>{props.body}</p>    
        </div>
    )
}

function Buy() {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center w-full'>
            <Card title='Registro' icon={<Image src='/account.svg' width={56} height={56} />} body='Una vez realizado el registro, el cliente podrá solicitar la cotización de venta de la criptomoneda de su preferencia.' />
            <Card title='Métodos de pago' icon={<Image src='/online-banking.svg' width={56} height={56} />} body='Se le proveerá los métodos de pago disponible, transferencias bancarias o depósitos.' />
            <Card title='Recibir orden' icon={<Image src='/wallet-01.svg' width={56} height={56} />} body='Una vez confirmado el pago el cliente recibirá su orden en su wallet personal.' />
        </div>
    )
}
function Sell() {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <Card title='Registro' icon={<Image src='/account.svg' width={56} height={56} />} body='Una vez realizado el registro, el cliente podrá solicitar la cotización de venta de la criptomoneda de su preferencia.' />
            <Card title='Wallet' icon={<Image src='/wallet-01.svg' width={56} height={56} />} body='Se le proveerá una wallet (Billetera electrónica) para el depósito de las criptomonedas.' />
            <Card title='Recibir pago' icon={<Image src='/bank.svg' width={56} height={56} />} body=' Una vez confirmado el pago el cliente recibirá su pago a través del banco de su preferencia de acuerdo con las políticas de la empresa.' />
        </div>
    )
}

export const Service: FC<{ type: 'sell' | 'buy' }> = ({ type }) => {
    return (
        <div className='bg-white md:px-24 px-5 py-5'>
            <div className='container mx-auto'>
                {/*  */}
                <div className='text-center w-full py-10'>
                    <h1 className='font-bold text-2xl md:text-4xl mb-4'>Orden Express</h1>
                    <p className='mb-4'>De 25 hasta 10,000 USD Orden express</p>
                    <p className='mb-4'> En DOPCOIN ofrecemos la facilidad de comprar cualquier tipo de criptomoneda, desde 25 USD de orden mínima,<br /> hasta 10,000 USD para clientes registrados. El proceso de registro es simple, <br /> presiona <a className='dop-text' href="#">aquí</a> y sigue los pasos para completar el registro y acceder a tasas especiales de temporada <br /> y ofertas de tiempo limitado.</p>
                </div>

                <div className='flex-col flex justify-center items-center text-center'>
                    <h1 className='font-medium text-xl md:text-4xl mb-4'>Pasos para realizar la compra.</h1>
                    {/*  */}
                    {type === 'buy' && <Buy />}
                    {type === 'sell' && <Sell />}
                </div>
                <div className='text-center py-10'>
                    <p>
                        Para más información consulte los <a className='dop-text' href="#">Términos y Condiciones</a> <br /> de compra y venta de Criptomonedas en DOPCOIN.
                    </p>
                </div>
                {/*  */}
            </div>
        </div>
    )
}
/**
 *



*/