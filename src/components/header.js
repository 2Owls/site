import * as React from "react"
import PropTypes from "prop-types"
import { AnimateSharedLayout } from "framer-motion"
import { motion } from "framer-motion"
import LogoBtn from "../components/logoBtn"
import Panel from "../components/panel"

function Header({ }) {
  
  const [open, setOpen] = React.useState(false);
  const toggleOpen = event => {
  event.preventDefault()
  setOpen(!open);
}

return (
  <header className="relative justify-items-center">
    <nav className="fixed inset-x-0 top-0 left-2/4 z-50">
    <AnimateSharedLayout>
        <motion.button 
        transition={{duration: 1}}
        onClick={toggleOpen}>
          {open ? <Panel />  : <LogoBtn /> }
        </motion.button>
      </AnimateSharedLayout>

    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

}

export default Header
