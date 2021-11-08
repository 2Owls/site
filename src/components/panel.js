import React from 'react';
import { Link } from 'gatsby';
import LogoIcon from '../svg/LogoIcon';
import { motion } from 'framer-motion';

const panel = () => (

    <motion.div layoutId="panel" className="fixed inset-x-0 top-0 w-full h-3/6 pb-8 justify-center bg-owlred">
        <div className="container">
            <div className="w-1/2 mx-auto">
                <div className="logo inline-block">
                    <LogoIcon />
                </div>
                <div className="w-56 inline-block flex flex-col mx-auto">
                    <Link to="/" className="pt-2 m-3 text-xl text-owlwhite">Home</Link>                   
                    <Link to="/work/" className="pt-2 m-3 text-xl text-owlwhite">Work</Link>   
                    <Link to="/contact/" className="pt-2 m-3 text-xl text-owlwhite">Contact</Link>
                </div> 
            </div>    
        </div>    
    </motion.div>

);    

export default panel