import { FaCheck } from 'react-icons/fa';

function ListItem(props: { text: string }) {
  return (
    <li className='flex items-center justify-center'>
      <FaCheck className='mr-4' /> <p>{props.text}</p>
    </li>
  );
}

export const Partners = () => {
  return (
    <div className='md:py-24 p-10 bg-gray-400'>
      <div className='container mx-auto text-center'>
        <div className='text-center flex justify-center items-center'>
          <div className='w-14 h-px bg-black mr-4'></div>
          <h1 className='text-xl font-medium'>Partners</h1>
          <div className='w-14 h-px bg-black ml-4'></div>
        </div>

        <div className='mt-8 flex justify-center items-center flex-col'>
          <p className='w-1/2'>
            Ofrece bitcoin y criptomonedas en tu negocio ¡Conviértete en nuestro
            partner! [Rellena el formulario] [Inscribirme] Brinda un servicio
            novedoso a tus clientes ofreciendo bitcoin y otras criptomonedas en
            tu negocio.
          </p>
          <br />
          <p className='w-1/2'>
            No necesitas ningún software especial... sólo una conexión a
            Internet y una impresora. <br /> Solicita el alta como Punto DopCoin
            a través de nuestro formulario para profesionales y un asesor te
            facilitará toda la información necesaria para vender bitcoin y
            criptomonedas.¡Mantén la ventaja de estar en la cresta de la
            revolución tecnológica.
          </p>

          <h1 className='my-4 font-bold'>
            Innova y potencia tu bussiness ofreciendo Criptomonedas
          </h1>
          <p className='w-1/2'>
            Son muchas las ventajas de disponer de un Cajero de Criptomonedas en
            tu negocio:
          </p>

          <ul className='w-1/2'>
            <ListItem text='Capta nuevos clientes y amplia tu negocio' />
            <ListItem text='Genera nuevas oportunidades y expectativas' />
            <ListItem text='Comisiones aseguradas para tus recargas' />
            <ListItem text='Estarás en la cima de la innovación tecnológica' />
            <ListItem
              text='Ofrece cupones canjeables por una gran variedad de criptomonedas:
              bitcoin, dash, litecoin, ether... y muchas más.'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

/***


No necesitas ningún software especial... sólo una conexión a Internet y una impresora.
Solicita el alta como Punto DopCoin a través de nuestro formulario para profesionales y un asesor te facilitará toda la información necesaria para vender bitcoin y criptomonedas.¡Mantén la ventaja de estar en la cresta de la revolución tecnológica.

Innova y potencia tu bussiness ofreciendo Criptomonedas

Son muchas las ventajas de disponer de un Cajero de Criptomonedas en tu negocio:
      Capta nuevos clientes y amplia tu negocio
      Genera nuevas oportunidades y expectativas
      Comisiones aseguradas para tus recargas
      Estarás en la cima de la innovación tecnológica
      Ofrece cupones canjeables por una gran variedad de criptomonedas: bitcoin,
      dash, litecoin, ether... y muchas más.
   
 */
