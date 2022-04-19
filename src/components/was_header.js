import * as React from "react"
import { useState } from "react"
import { AnimatePresence, AnimateSharedLayout, motion, useCycle } from "framer-motion"
import LogoIcon from "../components/LogoIcon"
import { Link } from 'gatsby'


function Header() {
  
  const variants = {
    open: { height: "auto" },
    closed: { height: "140px"},
  }


  
return (
  <AnimateSharedLayout>
    <motion.nav layout layoutId="nav"
      className="w-28 fixed inset-x-0 mx-auto top-0 justify-center bg-owlred rounded-b-lg"
      animate={{height: "140px", overflow: "hidden"}}
      whileHover={{height: "auto"}}       

    >
      <motion.div class="mx-auto justify-center">
        <div className="logo w-full mb-8 px-4 cursor-pointer">
            <LogoIcon />
        </div>

        <div className="flex flex-col text-center border-t-2 border-owlwhite pt-4 mx-2">
            <Link to="/" className="mb-3 text-lg text-owlwhite">HOME</Link>                   
            <Link to="/work/" className="mb-3 text-lg text-owlwhite">WORK</Link>   
            <Link to="/contact/" className="mb-3 text-lg text-owlwhite">CONTACT</Link>
        </div>  
      </motion.div>  

    </motion.nav>  
  </AnimateSharedLayout>
)

}

export default Header
