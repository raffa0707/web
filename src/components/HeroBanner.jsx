import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import lele from '../assets/lele.jpeg';


function HeroBanner() {
  return (
    <div id='home' className="dark:bg-gray-800 bg-white">
        <div class="container mx-auto h-screen flex flex-col justify-center">
            <div className="">
                <img src={lele}  className="w-100 h-100 object-cover rounded-full mx-auto" alt="" />
            </div>
            <div className="mx-auto max-w-5xl">
                <h2 className="text-xl font-medium text-blue-600 dark:text-blue-400 text-center mt-4">Hello, i'm Raffa Abdiansyah</h2>
                <h1 className="text-4xl md:text-5xl max-sm:text-2xl font-bold text-gray-900 dark:text-white text-center mt-4">Programmer</h1> 
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center mt-[24px] ">I am an active student at Satya Terra Bhinneka University, I am taking the informatics study program.</p>
            </div>

            <p class="text-gray-600 dark:text-gray-300 text-center font-semibold mt-4">My Social Media:</p>
            <div className="flex justify-center gap-x-[32px]">
                <a target='_blank' href='https://instagram.com/raffa_abdiansyah' className='text-3xl text-gray-600 dark:text-gray-300 leading-relaxed text-center mt-[24px] rounded-full'><FontAwesomeIcon icon={faInstagram} /></a>
                <a target='_blank' href='https://www.tiktok.com/@__rff07' className='text-3xl text-gray-600 dark:text-gray-300 leading-relaxed text-center mt-[24px] rounded-full'><FontAwesomeIcon icon={faTiktok} /></a>
                <a target='_blank' href='https://wa.me/6281373662988' className='text-3xl text-gray-600 dark:text-gray-300 leading-relaxed text-center mt-[24px] rounded-full'><FontAwesomeIcon icon={faWhatsapp} /></a>
            </div>


            <div className="flex justify-center mt-[24px]">
                <a href='#about' type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Lihat Detail</a>
            </div>
        </div>

    </div>
  )
}

export default HeroBanner