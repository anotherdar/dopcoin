import { ReactNode } from 'react';
import Image from 'next/image';

type PaymentsProps = {
  children?: ReactNode;
  icon: string;
  title: string;
};

function PaymentCard(props: PaymentsProps) {
  return (
    <div className='flex flex-col items-center justify-center m-4 p-4 w-full md:w-2/6'>
      <div className='h-16 w-16 p-2 mb-4'>
        <Image width={56} height={56} src={props.icon} />
      </div>
      <h1 className='font-bold mb-4'>{props.title}</h1>
      {props.children}
    </div>
  );
}

export const Payments = () => {
  return (
    <div className='bg-white md:px-24 p-10'>
      <div className='container mx-auto'>
        <div className='text-center'>
          {/* title */}
          <div className='text-center flex justify-center items-center'>
            <div className='w-14 h-px bg-black mr-4'></div>
            <h1 className='text-xl font-bold'>Pago de Servicios</h1>
            <div className='w-14 h-px bg-black ml-4'></div>
          </div>
          {/* sub */}
          <p className='text-lg font-medium my-4'>
            Paga tus servicios sin salir de casa y con tus Crypto.
          </p>

          <div className='flex flex-col md:flex-row justify-center items-start'>
            <PaymentCard
              icon='/quote-request.svg'
              title='Pago de facturas con crypto'>
              <h5 className='font-medium text-left mb-4'>servicios básicos:</h5>
              <ul className='list-disc'>
                {['Edeeste', 'Edesur', 'CEPM', 'CEB', 'CEB (Recargas)'].map(
                  (item) => {
                    return <li key={item}>{item}</li>;
                  }
                )}
              </ul>
            </PaymentCard>
            {/*  */}
            <PaymentCard icon='/smartphone.svg' title='Recargas telefónicas'>
              <ul className='list-disc text-left'>
                {['Claro', 'Altice', 'Viva'].map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </ul>
            </PaymentCard>
            {/*  */}
            <PaymentCard icon='/paypal.svg' title='Pago de facturas con crypto'>
              <p>
                En DopCoin compramos y vendemos saldos de PayPal a una tasa
                justa y cómoda para todos nuestros clientes. <br />
                <a href='#' className='dop-text'>
                  ¡Contáctanos!
                </a>
              </p>
            </PaymentCard>
          </div>
          <div className='flex justify-center items-center'>
            <PaymentCard icon='/news.svg' title='Pago de facturas'>
              <p>¡Muy pronto!</p>
            </PaymentCard>
          </div>
        </div>
      </div>
    </div>
  );
};
