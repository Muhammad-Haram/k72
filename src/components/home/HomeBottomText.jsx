import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div>
      <div className='font-[font2] flex items-center justify-center gap-2 '>
        <div className='border p-2 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center border-white rounded-full uppercase'>
          <Link className='text-[6vw]' to='/projects'>Projects</Link>
        </div>
        <div className='border p-2 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center border-white rounded-full uppercase'>
          <Link className='text-[6vw]' to='/agence'>agence</Link>
        </div>
      </div>
    </div>
  )
}

export default HomeBottomText