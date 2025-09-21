import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div>

      <div>
        <p className='lg:w-[17vw] w-64 font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-tight'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      </div>

      <div className='font-[font2] flex items-center justify-center gap-2 '>
        <div className='border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center border-white rounded-full uppercase'>
          <Link className='text-[6vw]' to='/projects'>Projects</Link>
        </div>
        <div className='border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center border-white rounded-full uppercase'>
          <Link className='text-[6vw]' to='/agence'>agence</Link>
        </div>
      </div>

    </div>
  )
}

export default HomeBottomText