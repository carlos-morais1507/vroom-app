import React from 'react'
import Image from 'next/image'
import Logo from '../assets/icons/Logo_md.svg'
import Link from 'next/link'

const Header = () => {
  const logged = true

  return (
    <>
      <nav className="navbar bg-base-100 fixed z-50 top-0 backdrop-filter backdrop-blur-lg bg-opacity-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#3b82f6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="#">Catálogo</Link></li>
              <li><Link href="#">Conversas</Link></li>
            </ul>
          </div>
          <Link href="#" className="pl-3">
          <Image src={Logo} height={35} alt='Logo'/>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex items-center ">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="#" className='text-lg font-semibold'>Catálogo</Link></li>
            <li><Link href="#" className='text-lg font-semibold'>Conversas</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className='dropdown dropdown-end dropdown-hover'>
          <label tabIndex={0} className="btn btn-circle btn-ghost mr-3 mt-2 avatar">
            <Image src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" width={1080} height={1080} alt='Avatar' className='rounded-full ring ring-primaty ring-offset-base-100 ring-offset-2'/>
          </label>
          
            {
              logged === true ? 
              (<ul tabIndex={0} className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'>
                <li><Link href="#">Minha Conta</Link></li>
                <li><Link href="#" className='btn btn-error btn-sm'>Sair da Conta</Link></li>
              </ul>) 
              : 
              (<ul tabIndex={0} className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'>
                <li><Link href="#" className='btn btn-success btn-sm'>Entrar na Conta</Link></li>
              </ul>)
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header