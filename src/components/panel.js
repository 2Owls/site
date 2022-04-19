import React from 'react';
import { Link } from 'gatsby';
import LogoIcon from '../svg/LogoIcon';
import { motion } from 'framer-motion';

const panel = () => (

    <motion.div layout layoutId="panel" className="fixed inset-x-0 mx-auto top-0 w-3/6 h-3/6 pb-8 flex flex-col justify-center bg-owlred rounded-b-md pt-2">
        <div className="container-sm">        
                <motion.div layout layoutId="logo" className="logo">
                    <LogoIcon />
                </motion.div>
                
                <div className="w-56 inline-block flex flex-col mx-auto">
                    <Link to="/" className="pt-2 m-3 text-xl text-owlwhite">HOME</Link>                   
                    <Link to="/work/" className="pt-2 m-3 text-xl text-owlwhite">WORK</Link>   
                    <Link to="/contact/" className="pt-2 m-3 text-xl text-owlwhite">CONTACT</Link>
                </div>  
        </div>      
    </motion.div>

);    

export default panel