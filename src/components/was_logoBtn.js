import React from 'react';
import { Link } from 'gatsby';
import LogoIcon from '../components/LogoIcon';
import { motion } from 'framer-motion';

const logoBtn = ({ toggle }) => (
    
    <motion.div layout="nav" className="py-2 bg-owlred">
        <motion.div class="mx-auto justify-center">
                <div className="logo w-full mb-8 px-4 cursor-pointer" onClick={toggle}>
                    <LogoIcon />
                </div>

                <div className="flex flex-col text-center border-t-2 border-owlwhite pt-4 mx-2">
                    <Link to="/" className="mb-3 text-lg text-owlwhite">HOME</Link>                   
                    <Link to="/work/" className="mb-3 text-lg text-owlwhite">WORK</Link>   
                    <Link to="/contact/" className="mb-3 text-lg text-owlwhite">CONTACT</Link>
                </div>  
        </motion.div>        
    </motion.div>            

);    

export default logoBtn