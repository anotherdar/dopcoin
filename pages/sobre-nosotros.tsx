import { Footer } from '@components/Footer';
import { DopLayout } from '@layouts/Accounts';
import Image from 'next/image';

export default function About() {
    return (
        <div>

            <DopLayout title='sobre nosotros'>
                <div className='text-center'>
                    <h1 className='font-bold'>¿Cómo nació la idea de DopCoin?</h1>
                    <div className='w-full flex flex-1 flex-col md:flex-row'>
                        <div className='md:w-1/2 mt-5 flex justify-center items-center p-4 '>
                            <Image src='/Team.svg' height='250px' width='250px' className='md:hidden' />
                        </div>
                        <div className='md:w-1/2 h-full flex justify-center items-center flex-col text-center'>
                            <br />
                            <p>
                                Desde siempre el equipo de DopCoin y sus fundadores se ha sentido atraído por el internet y sus inmensas ideas, como milenial en búsquedas diarias de cosas nuevas encontramos el mundo de las criptomonedas, específicamente que algunas empresas empezaban aceptar bitcoins como medio de pago. Cuando el interés creció fue cuando leímos sobre cómo funcionaba La ''Descentralización'' más acerca de esta tecnología llamada Blockchain.</p>
                            <br />


                            <p>
                                Luego notamos que el mercado local en nuestro país era ‘’muy informal’’ no estaba nada bien establecido en el área de servicios o simplemente no existía alguien de confianza que ayudara a orientar a una persona en este nuevo mundo.</p>

                            <br />
                            <p>
                                En este punto comenzamos a aprender cada día más, mientras más estudiábamos y conocimos personas, nuevas coins, ecosistemas y aplicaciones más ideas surgían sobre aplicaciones para República Dominicana y toda ‘’Latino América’’ y como podrían mejorar enormemente nuestra vida diaria.
                                Entonces junto al equipo DopCoin comenzamos a darle forma a lo que es hoy DopCoin SRL, la empresa de gestión en compra y venta de criptomonedas.
                            </p>
                            <br />
                            <p>
                                DopCoin SRL es una empresa legalmente registrada con estándares internacionales.
                            </p>
                        </div>
                    </div>
                </div>
            </DopLayout>
            <Footer />
        </div>
    )
}