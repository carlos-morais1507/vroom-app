import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='h-[435px] w-full flex items-center justify-between'>
      <div>
        <div className='prose prose-h1:text-primary'>
          <h2>Quer comprar o seu carro com segurança?</h2>
          <h1 className='-my-3'>Vê na Vroom!</h1>
          <h4>Nós temos a solução pro seu problema!</h4>
        </div>
        <Link href="#" className='btn btn-primary mt-5'>Carros à venda</Link>
        </div>
          <img src="/hero.png" alt="Hero" className='object-contain w-[60%]'/>
    </div>
  )
}

export default Hero