import React from 'react'
import Image from 'next/image'
import Logo from "../app/public/YC.png"
import { auth, signOut } from '@/auth'
import Logout from './Logout'
import Link from 'next/link'

const Navbar = async () => {
  const session = await auth()
  return (
    <div className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
    
      {session && session?.user ? (
<>
<div >
        <Image src={Logo}  width={144} height={30} alt='logo'/>
        </div>
        <div className='flex gap-4'>
          <div >
          <p >Create</p>
          </div>
          <div>
          <Logout/>
          </div>
          <div>
            Pic
          </div>
        </div>
</>
      ):(
        <>
        <div >
        <Image src={Logo} width={100} height={100} alt='logo'/>
        </div>
        <div className='flex gap-4'>
          <div >
          </div>
          <div>
            <Link href="/Login">
            <p>LogIn</p>
            </Link>
          </div>
          <div>
            Pic
          </div>
        </div>
        </>

      )}
     
      </nav>
    </div>
  )
}

export default Navbar
