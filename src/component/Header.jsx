import { Link,NavLink } from "react-router-dom"
import { useState,useContext } from 'react'
import { MdOutlineLocationOn } from 'react-icons/md'
import { BsMinecart } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import {CartContext} from "../context/CartContext"

const Header = () => {
 const [openMenu,setOpenMenu] = useState(false)
 const {quantity} = useContext(CartContext)
 const toggleMenu = ()=> setOpenMenu(!openMenu)
 
  return (
    <header className="h-16 pt-2 w-full bg-header text-white fixed top-0 z-10">
      <nav className="flex px-1 items-center justify-center">
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
            className="w-28 pl-1 max-sm:w-30 mt-4 px-1"
          />
        </Link>
        <div className="flex gap-2 items-center w-full justify-around">
          <Link>
            <div className="flex max-tiny:hidden">
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
              <FiSearch size={20} className="text-center pt-1 max-tiny:pt-0" />
            </div>
          </div>
          <div className="flex gap-x-4">
            <NavLink
              to="/signIn"
              className={({ isActive }) =>
                isActive ? 'text-orange-text max-tiny:hidden' : null
              }
            >
              <p className="max-tiny:hidden">SignIn</p>
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? 'text-orange-text' : null
              }
            >
              <div className="text-orange-text text-center font-semibold">
                {quantity}
              </div>
              <BsMinecart size={25} />
            </NavLink>
          </div>
          <div className="md:hidden max-sm:p-1">
            <AiOutlineMenu
              onClick={toggleMenu}
              size={25}
              style={{ color: 'white' }}
            />
            {openMenu && (
              <div className="absolute top-0 right-0 h-screen w-64 bg-search">
                <AiOutlineClose
                  onClick={toggleMenu}
                  className="text-black text-2xl mb-10"
                />
                <div>
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
      <div className="bg-menu w-full p-1  max-tiny:bottom-10 ">
        <div className="w-1/2 flex justify-between max-tiny:gap-y-5 font-lato">
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