import React from 'react';
import { motion } from 'framer-motion';

const FadeUp = ({ children, className}) => (
    
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.8 }}            
    transition={{ duration: 1.5, ease: 'easeOut' }}
    className={className}
    >
    {children}
    </motion.div>           

);    

export default FadeUp