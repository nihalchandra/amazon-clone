import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import CheckoutProduct from '../components/CheckoutProduct'
import { selectItems, selectTotal } from '../slices/basketSlice'
import Currency from 'react-currency-formatter'
import { useSession } from 'next-auth/react'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
const stripePromise = loadStripe(process.env.stripe_public_key)

function checkout() {
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const { data: session } = useSession()

    const createCheckoutSession = async () => {
        const stripe = await stripePromise;
        //call the backend to create a checkout session
        const checkoutSession = await axios.post("/api/create-checkout-session", {
            items: items,
            email: session.user.email,
        });

        //Redirect user/customer to Stripe Checkout
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        });

        if (result.error) {
            alert(result.error.message);
        }
    };

    return (
        <div className='bg-gray-100'>
            <Header />

            <main className='lg:flex max-w-screen-2xl mx-auto'>
                {/*Left */}
                <div className='flex-grow m-5 shadow-sm'>
                    <Image src='https://links.papareact.com/ikj' width={1020} height={250} objectFit='contain' />

                    <div className='flex flex-col p-5 space-y-10 bg-white-10'>
                        <h1 className='text-3xl border-b pb-4'>{items.length === 0 ? 'Your Amazon Basket is empty' : 'Shopping Basket'}</h1>

                        {items.map((items, i) => (
                            <CheckoutProduct
                                key={i}
                                id={items.id}
                                title={items.title}
                                price={items.price}
                                description={items.description}
                                category={items.category}
                                image={items.image}
                                rating={items.rating}
                                hasPrime={items.hasPrime}

                            />
                        ))}

                    </div>
                </div>
                {/*Right */}
                <div className='flex flex-col bg-white p-10 shadow-md'>
                    {items.length > 0 && (
                        <>
                            <h2 className='whitespace-nowrap'>Subtotal ({items.length} items):{' '}
                                <span className='font-bold'>
                                    <Currency quantity={total} currency='INR' />
                                </span>
                            </h2>

                            <button
                                role='link'
                                disabled={!session}
                                onClick={createCheckoutSession}
                                className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                                {!session ? 'Sign in to checkout' : 'Proceed To Checkout'}
                            </button>
                        </>

                    )}
                </div>
            </main>
        </div>
    )
}

export default checkout