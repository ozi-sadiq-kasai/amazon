import { Link,NavLink } from "react-router-dom"
import { useState } from 'react'
import { MdOutlineLocationOn } from 'react-icons/md'
import { BsMinecart } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {
 const [openMenu,setOpenMenu] = useState(false)
 const toggleMenu = ()=> setOpenMenu(!openMenu)
console.log(openMenu)
  return (
    <header className="h-14 pt-2 w-full bg-header text-white">
      <nav className="flex px-1">
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
            className="w-20 pl-1 max-sm:w-16 "
          />
        </Link>
        <div className="flex gap-2 items-center w-full justify-around">
          <Link>
            <div className="flex max-sm:hidden">
              <MdOutlineLocationOn />
              <p className="text-smals">Deliver to Nigeria</p>
            </div>
          </Link>
          <div className="w-1/2 bg-white relative py-1 max-sm:w-3/4 text-gray-700 max-sm:py-0">
            <input
              type="text"
              placeholder="Amazon Search"
              className="focus:outline-none pl-1 w-full max-sm:w-3/4"
            />
            <div className="absolute top-0 right-0 text-black h-full bg-search">
              <FiSearch size={22} className="text-center pt-1 max-sm:pt-0" />
            </div>
          </div>
          <div className="flex gap-x-4">
            <NavLink
              to="/signIn"
              className={({ isActive }) =>
                isActive ? 'text-orange-text max-sm:hidden' : null
              }
            >
              <p className="max-sm:hidden">SignIn</p>
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? 'text-orange-text' : null
              }
            >
              <BsMinecart size={25} />
            </NavLink>
          </div>
          <div className="md:hidden">
            <AiOutlineMenu
              onClick={toggleMenu}
              size={25}
              style={{ color: 'white' }}
            />
            {openMenu && (
              <div className="absolute top-0 right-0 h-full w-64 bg-search">
                  <AiOutlineClose
                    onClick={toggleMenu}
                    className="text-black text-2xl mb-10"
                  />
                <div className="flex flex-col justify-center items-center gap-2">
                  <NavLink
                    to="signIn"
                    className={({ isActive }) =>
                      isActive ? 'text-black' : null
                    }
                  >
                    SignIn
                  </NavLink>
                  <NavLink
                    to="aboutus"
                    className={({ isActive }) =>
                      isActive ? 'text-black' : null
                    }
                  >
                    About Us
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="bg-menu w-full p-1 max-sm:bottom-10">
        <div className="w-1/2 flex justify-between">
          <NavLink
            to="/men"
            className={({ isActive }) => (isActive ? 'text-orange-text' : null)}
          >
            Men
          </NavLink>
          <NavLink
            to="/women"
            className={({ isActive }) => (isActive ? 'text-orange-text' : null)}
          >
            Women
          </NavLink>
          <NavLink
            to="/jewellry"
            className={({ isActive }) => (isActive ? 'text-orange-text' : null)}
          >
            Jewellery
          </NavLink>
        </div>
      </div>
    </header>
  )
}
export default Header