import { Account } from "@components/Account";
import { AccountLayout } from "@layouts/Accounts";
import { motion } from "framer-motion";


export default function Page() {
    return (
        <AccountLayout title='Crear cuenta'>
            <motion.div animate={{y: [1000, 0]}} className='bg-blue-700 p-2 rounded-lg h-5/6 xl:w-3/5 w-11/12 md:flex shadow-lg'>
                <div className='hidden w-3/5 md:flex items-center justify-center'>
                    <h1 className='text-white text-xl'>¡Encantado de conocerte!</h1>

                    <div className=''>

                    </div>
                </div>
                <div className='relative w-full h-full  md:w-2/5 bg-white rounded-sm p-2 flex flex-col justify-evenly items-center'>
                    <div className='absolute -top-10'>
                        <Account />
                    </div>
                </div>
            </motion.div>
        </AccountLayout>
    )
}