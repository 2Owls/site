import * as React from "react"
import { AnimatePresence } from "framer-motion"
import { motion, useCycle } from "framer-motion"
import LogoBtn from "../components/logoBtn"

function Header() {
  
  const variants = {
    open: { height: "auto" },
    closed: { height: "120px"},
  }

  const [isOpen, toggleOpen] = useCycle(false, true);


return (
  <AnimatePresence>
    <motion.nav layoutId="nav"
      className="w-20 fixed inset-x-0 mx-auto top-0 justify-center overflow-hidden bg-owlred rounded-b-lg"
      animate={isOpen ? "open" : "closed"}
      whileHover={{ height: "auto" }} 
      exit={{overflow: "hidden"}}   
      variants={variants}
    >
      <LogoBtn toggle={() => toggleOpen()}/>
    </motion.nav>
  </AnimatePresence>    
)

}

export default Header
