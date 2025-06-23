import { width } from '@fortawesome/free-brands-svg-icons/fa42Group'
import React from 'react'
import '../styles/About.css'
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

function AboutMe() {
  return (
    <section id="about" className='py-[64px]'>
        <div className='wrapper'>
            <h3>Tentang Saya</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima numquam cupiditate veniam! Inventore quidem quae quasi labore sequi ipsam aliquid, eaque doloremque quis odio maiores repudiandae, asperiores ipsa beatae impedit!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi aspernatur corrupti aperiam corporis tenetur nihil consequatur minus velit accusantium eum! Sunt corrupti eveniet vel ipsa.</p>
            <h4 className='mt-4'>Programming Language & Tools</h4>
            <div className='skills'>
                <FaCss3Alt /><FaHtml5 /><FaPhp /><FaReact /><FaJs /><SiCanva /><SiTailwindcss />

            </div>

        </div>
    </section>

  )
}

export default AboutMe