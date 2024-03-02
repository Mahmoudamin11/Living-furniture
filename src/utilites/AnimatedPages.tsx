
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import OpenedProd from '../components/OpenedProd'
import { AnimatePresence } from "framer-motion"
import AllProducts from '../pages/AllProducts'
import InCart from '../pages/InCart'
import { useCart } from '../context/Cart'

const AnimatedPages = () => {
    const location = useLocation();
    const {closeTheme} = useCart();
    
  return (
    <div onClick={() => closeTheme()} >
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route  path="/" Component={Home} />
                <Route path="/Product" Component={OpenedProd} />
                <Route path="/AllProducts" Component={AllProducts} />
                <Route path="/InCart" Component={InCart} />
            </Routes>

        </AnimatePresence>
    </div>
  )
}

export default AnimatedPages