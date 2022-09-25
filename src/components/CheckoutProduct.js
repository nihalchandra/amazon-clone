import Image from 'next/image'
import React from 'react'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

function CheckoutProduct({ id, price, description, category, image, title, rating, hasPrime }) {

    const dispatch = useDispatch()

    const addItemToBasket = () => {
        const product = {
            id, price, description, category, image, title, rating, hasPrime
        }

        //Push items into redux
        dispatch(addToBasket(product))
    }

    const removeItemFromBasket = () => {
        //Remove item from redux
        dispatch(removeFromBasket({ id }))
    }

    return (
        <div className='grid grid-cols-5'>
            <Image src={image} height={200} width={200} objectFit='contain' />

            {/* Middle*/}
            <div className='col-span-3 mx-5'>
                <p>{title}</p>
                <div className='flex'>
                    {Array(rating).fill().map((_, i) => (
                        <div className='h-5 text-yellow-500'>⭐</div>
                    ))}
                </div>

                <p className='text-xs mt-2 mb-2 line-clamp-3'>{description}</p>
                <Currency quantity={price} currency='INR' />

                {hasPrime && (
                    <div className='flex items-center space-x-2'>
                        <img loading='lazy' className='w-12' src="https://links.papareact.com/fdw" alt="" />
                        <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                    </div>
                )}
            </div>

            {/*Right add/remove buttons*/}
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button onClick={addItemToBasket} className='button mt-auto'>Add to Basket</button>
                <button onClick={removeItemFromBasket} className='button mt-auto'>Remove from Basket</button>
            </div>

        </div >
    )
}

export default CheckoutProduct