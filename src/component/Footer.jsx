import { BsInstagram } from 'react-icons/bs'
import { BiLogoFacebook } from 'react-icons/bi'
import { RiTwitterXFill } from 'react-icons/ri'
const Footer = () => {
  return (
    <footer className="bg-header text-orange-text font-lato fixed bottom-0 w-full py-1">
      <ul className="flex justify-center items-center gap-4">
        <BsInstagram size={17} />
        <BiLogoFacebook size={17} />
        <RiTwitterXFill size={17} />
      </ul>
    </footer>
  )
}
export default Footer