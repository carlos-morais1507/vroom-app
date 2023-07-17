import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = () => {
  return (
    <div className='card shadow-xl w-64'>
      <figure><Image src="https://www.honda.com.br/automoveis/sites/hab/files/2023-01/004_Design.jpg" width={250} height={250} alt='Produto'/></figure>
      <div className='card-body'>
        <h2 className='card-title'>Honda Civic 2022</h2>
        <h3>Rio de Janeiro - RJ</h3>
        <h2 className='font-semibold'>R$ 53.000,00</h2>
        <div className='card-actions'>
          <Link href="#" className='btn btn-primary'>Ver Mais</Link>
        </div>
      </div>
    </div>
  )
}

export default Card