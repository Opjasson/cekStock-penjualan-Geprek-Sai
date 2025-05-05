import React from 'react'
import Navbar from '../organism/Navbar'

const Kasir_Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <div className='px-5'>
        {children}
      </div>
    </div>
  )
}

export default Kasir_Layout
