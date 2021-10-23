import { DopHead } from '@components/DopHead';
import { Footer } from '@components/Footer';
import { DopNav } from '@components/Navigation';
import { About } from '@sections/services/about';
import { Business } from '@sections/services/bussines';
import { Partners } from '@sections/services/Partners';
import { Payments } from '@sections/services/payments';

export default function Services() {
  return (
    <>
      <DopHead title='servicios' />
      <div className='md:px-10 px-5'>
        <DopNav />
      </div>
      <About />
      <Business />
      <Payments />
      <Partners />
      <Footer />
    </>
  );
}
