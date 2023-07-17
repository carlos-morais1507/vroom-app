import { Hero } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-12">
      <Hero />
    </main>
  )
}
