import React from 'react';
import { Link } from 'gatsby';
import LogoIcon from '../svg/LogoIcon';
import { motion } from 'framer-motion';

const logoBtn = () => (
    <motion.div layoutId="panel" className="w-32 flex justify-center h-auto m-auto fixed inset-x-0 top-0">
        <motion.div layout className="logo inline-block">
        <LogoIcon className=""/>
        </motion.div>
    </motion.div>  

);    

export default logoBtn