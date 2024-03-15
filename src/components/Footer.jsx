import React from 'react'

export default function Footer() {
  return (
    <footer className='flex justify-center'>
        <small className="text-slate-500 mx-auto flex text-center p-4">&copy;{new Date().getFullYear()} Foodnet. All rights reserved.</small>
    </footer>
  )
}
