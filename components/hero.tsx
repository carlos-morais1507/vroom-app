import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='h-[435px] w-full flex sm:flex-row flex-col items-center justify-between mt-20'>
      <div>
        <div>
          <h2 className='sm:text-lg font-semibold'>Quer comprar o seu carro com segurança?</h2>
          <h1 className='text-primary font-bold sm:text-5xl text-3xl sm:mt-0 mt-3'>Vê na Vroom!</h1>
          <h4 className='sm:text-base text-sm'>Nós temos a solução pro seu problema!</h4>
        </div>
        <Link href="#" className='btn btn-primary mt-5 tracking-wider'>Carros à venda</Link>
        </div>
          <img src="/hero.png" alt="Hero" className='object-contain sm:w-[60%]'/>
    </div>
  )
}

export default Hero