import React from 'react'
import Header from '../components/Header'
import { AiFillCheckCircle } from 'react-icons/ai'
import { useRouter } from 'next/router'

function success() {
    const router = useRouter()
    return (
        <div className='bg-gray-100 h-screen'>
            <Header />

            <main className='max-w-screen-lg mx-auto'>
                <div className='flex flex-col p-10 bg-white'>
                    <div className='flex items-center space-x-2 mb-5'>
                        <AiFillCheckCircle className='text-green-500 h-10 w-9' />
                        <h1 className='text-3xl'>Thank you! Your order has been confirmed!</h1>
                    </div>
                    <p>Thank you for shopping with us! We'll send a confirmation once item has been shipped.
                        If you would like to check the status of the order(s) press the link below
                    </p>
                    <button onClick={() => router.push('/orders')} className='button mt-8'>Go to my orders</button>
                </div>
            </main>
        </div>

    )
}

export default success