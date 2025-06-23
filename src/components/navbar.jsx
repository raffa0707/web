import React, { useEffect, useState } from 'react';

const sections = ['home', 'about', 'contact'];

function MyNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (section) =>
    `block py-2 px-3 md:p-0 rounded-sm ${
      activeSection === section
        ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-blue-500'
        : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500'
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dzarot</span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li><a href="#home" className={linkClass('home')}>Home</a></li>
            <li><a href="#about" className={linkClass('about')}>About Me</a></li>
            <li><a href="#contact" className={linkClass('contact')}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyNav;
