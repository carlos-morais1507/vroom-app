import React from 'react'
import Card from './Card'

const CardGroup = () => {
  return (
    <div className='max-w-full'>
      <h1 className='font-bold text-2xl'>Mais Vistos</h1>
      <div className='grid grid-flow-col sm:auto-cols-[27%] auto-cols-[88%] gap-3 overflow-x-auto overscroll-contain scroll py-10 horizontal scroll-p-3'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <h1 className='font-bold text-2xl mt-7'>Novidades</h1>
      <div className='grid grid-flow-col sm:auto-cols-[27%] auto-cols-[88%] gap-3 overflow-x-auto overscroll-contain scroll py-10 horizontal scroll-p-3'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default CardGroup