import React from 'react';
import { Link } from 'gatsby';
import LogoIcon from '../components/LogoIcon';
import { motion } from 'framer-motion';

const logoBtn = ({ toggle }) => (
    
    <motion.div layout="nav" className="py-2">
        <div className="logo w-full mb-8 px-2 cursor-pointer" onClick={toggle}>
            <LogoIcon />
        </div>

        <div className="flex flex-col text-center border-t border-owlwhite pt-4 mx-2">
            <Link to="/" className="mb-3 text-md text-owlwhite hover:text-owlyellow">HOME</Link>                   
            <Link to="/work/" className="mb-3 text-md text-owlwhite hover:text-owlyellow">WORK</Link>   
            <Link to="/contact/" className="mb-3 text-md text-owlwhite hover:text-owlyellow">CONTACT</Link>
        </div>         
    </motion.div>            

);    

export default logoBtn