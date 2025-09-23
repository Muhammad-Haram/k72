import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger);
  const imgDivRef = useRef(null)

  useGSAP(function () {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        markers: true,
        start: "top 18%",
        end: "top -100%",
        scrub:true,
        pin: true,
      }
    })
  })

  return (

    <>

      <div className='section1'>

        <div ref={imgDivRef} className='absolute h-[20vw] w-[15vw] top-28 left-[30vw] rounded-3xl overflow-hidden'>
          <img className='h-full w-full object-cover' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>

        <div className='relative font-[font2] '>

          <div className='mt-[55vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Soixan7e <br />
              Douze</h1>
          </div>

          <div className='pl-[40%] mt-20'>
            <p className='text-5xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>

        </div>
      </div>

      <div className="section2 h-screen">

      </div>

    </>
  )
}

export default Agence