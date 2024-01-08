import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const imageLogo = "https://potterdb.com/images/logo.svg"

  return (
    <header className="bg-pink-800 p-4 fixed w-full top-0 z-50">
      <nav className="flex justify-between items-center">
        <Image src={imageLogo} className="text-white text-xl font-bold w-20" width={100} height={100} alt='Logo do site' />
        {/* Menu hamburguer para dispositivos móveis */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-16 right-4 bg-gray-700 p-4 rounded shadow-lg">
              <a className="text-white block py-2 px-4 hover:bg-gray-600" href="#sobre">
                Sobre
              </a>
              <a className="text-white block py-2 px-4 hover:bg-gray-600" href="https://docs.potterdb.com/">
                Docs
              </a>
              <a className="text-white block py-2 px-4 hover:bg-gray-600" href="https://status.potterdb.com/">
                Status
              </a>
              <a className="text-white block py-2 px-4 hover:bg-gray-600">
                <Link href="books">
                  <span>Books</span>
                </Link>
              </a>
              <a className="text-white block py-2 px-4 hover:bg-gray-600" href="characters">
                Characters
              </a>
            </div>
          )}
        </div>
        {/* Menu para telas grandes */}
        <ul className="hidden lg:flex space-x-4">
          <li>
            <a className="text-white hover:text-gray-300" href="#sobre">
              Sobre
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="https://docs.potterdb.com/">
              Docs
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="https://status.potterdb.com/">
              Status
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="books">
              Books
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="characters">
              Characters
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;