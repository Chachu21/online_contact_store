import React from 'react'
import Link from 'next/link'
const Footter = () => {
    const date = new Date().getFullYear()
  return (
      <div className='flex justify-center gap-10 items-center h-fit px-4 py-10 bg-slate-700 '>
          <div className=' flex align-middle gap-2 text-slate-50'>
              &copy; copyright {date} .
              <p>All Right Reserved.</p>
          </div> 
           <div className='text-slate-100 text-md flex justify-center gap-4'>
              <Link href={"/"}>Home</Link>
              <Link href={"/news"}>News</Link>
              <Link href={"/auth/id"}>Login</Link>
          </div>
      </div>
      
  )
}

export default Footter