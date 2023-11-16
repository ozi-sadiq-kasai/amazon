import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./page/Home"
import Layout from "./component/Layout"
import SignIn from "./page/SignIn"
import Cart from "./page/Cart"
import Women from "./page/Women"
import Men from "./page/Men"
import Jewellry from "./page/Jewellry"
import AboutUs from "./page/AboutUs"
import Details from "./page/Details"
import 'react-toastify/dist/ReactToastify.css'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="cart" element={<Cart />} />
          <Route path="women" element={<Women />} />
          <Route path="men" element={<Men />} />
          <Route path="jewellry" element={<Jewellry />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route
            path="details/:id"
            element={<Details />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
