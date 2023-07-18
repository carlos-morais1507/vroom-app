import Card from '@/components/Card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Product = () => {

  return (
    <div className='flex min-h-screen flex-col items-center justify-between sm:p-24 p-12 overflow-x-hidden'>
      <div className='sm:h-[435px] w-full flex sm:flex-row flex-col sm:items-start items-center justify-center gap-5 sm:mt-20'>
        <div className='sm:w-[50%] w-screen'>
         <Image src="https://www.honda.com.br/automoveis/sites/hab/files/2023-01/004_Design.jpg" alt='Product' width={1080} height={1080} />
        </div>
        <div className='w-full sm:w-[50%]'>
          <h1 className='text-primary font-bold text-6xl text-start'>Honda Civic</h1>
          <h2 className='text-2xl font-semibold'>2022</h2>
          <div className='sm:flex-col flex mt-5 gap-3 items-center sm:items-start'>
          <h2 className='text-4xl font-bold'>R$53.000,00</h2>
          <Link href="/chat" className='btn btn-primary w-fit'>Entrar em Contato</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product