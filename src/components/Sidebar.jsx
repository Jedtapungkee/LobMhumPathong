import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed z-50 h-auto md:hidden top-4 left-4">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 bg-gray-100 rounded-full shadow-md">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <aside className={`${
          isOpen ? 'w-8/12' : 'w-0'
        } md:w-2/12 bg-white top-0 left-0  h-screen md:h-[700px] flex flex-col items-center py-5  fixed md:relative z-40 transition-all duration-300 overflow-hidden`}>
        {/* โลโก้ */}
        <div className="flex flex-col items-center">
          <img src="/LOGO.png" alt="logo" className="w-40 h-45 md:w-60 md:h-60 lg:w-60 lg:h-60" />
        </div>

        {/* เมนู */}
        <nav className="w-full mt-8">
          <ul className="flex flex-col pl-3 space-y-2">
            {[
              { to: '/', label: 'Home', italic: true },
              { to: '/recommend', label: 'Recommend Menu', italic: true },
              { to: '/menu', label: 'Menu', italic: false },
              { to: '/about', label: 'About', italic: false },
              { to: '/activities', label: 'Activities', italic: false },
              { to: '/home-delivery', label: 'Home Delivery', italic: true },
            ].map(({ to, label, italic }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `${isActive ? 'bg-green-100 text-green-800' : 'hover:bg-gray-100'} ${italic ? 'italic' : ''} text-lg p-2 rounded-md block`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
