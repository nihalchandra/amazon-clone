import React from 'react'
import Image from "next/image"
import { AiOutlineSearch } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'
import { HiShoppingCart } from 'react-icons/hi'

function Header() {
    return (
        <header>
            {/*Top Nav*/}
            <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
                <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                    <Image
                        src='https://links.papareact.com/f90'
                        width={150}
                        height={40}
                        objectFit='contain'
                        className='cursor-pointer'
                    />
                </div>

                {/*Search*/}
                <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
                    <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" />
                    <AiOutlineSearch className='h-12 ml-3 mr-2' />
                </div>

                {/*Right*/}
                <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                    <div className=' link'>
                        <p>Hello Nihal</p>
                        <p className='font-extrabold md:text-sm'>Account & Lists</p>
                    </div>
                    <div className='link'>
                        <p>Returns</p>
                        <p className='font-extrabold md:text-sm'>& Orders</p>
                    </div>
                    <div className='relative link flex items-center'>
                        <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black'>0</span>
                        <HiShoppingCart className='h-10 w-10' />
                        <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
                    </div>
                </div>
            </div>

            {/*Bottom Nav*/}
            <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
                <p className='link flex items-start'>
                    <BiMenu className='h-4 mr-1' />
                    All
                </p>
                <p className='link'>Prime Video</p>
                <p className='link'>Amazon Business</p>
                <p className='link'>Today's Deals</p>
                <p className='hidden lg:inline-flex link'>Electronics</p>
                <p className='hidden lg:inline-flex link'>Food</p>
                <p className='hidden lg:inline-flex link'>Prime</p>
                <p className='hidden lg:inline-flex link'>Buy Again</p>
                <p className='hidden lg:inline-flex link'>Shopper Toolkit</p>
                <p className='hidden lg:inline-flex link'>Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header





