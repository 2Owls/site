import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';


const ClientCard = (props) => (
    <motion.div 
        whileHover={{ backgroundColor: "#ECBE6D", backgroundSize: "105%" }}
        whileTap={{ scale: 1, backgroundColor: "#fff" }}
        initial={{y: 100, opacity: 0, backgroundColor: props.bg}}
        animate={{y: 0, opacity: 1 }}
        transition={{duration: 0.5, type: "spring", ease: 'easeOut', bounce: 0.4  }} 
        className="h-full items-center rounded-lg"
     >

        <Link className={`card ${props.client}`} to={`/work-${props.client}/`}>

          <motion.div 
            initial={{y: 20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: 0.5, duration: 0.8, type: "spring", ease: 'easeOut', bounce: 0.4 }} 
            className="work-title">

            <h1>{props.clientname}</h1>

            <motion.hr 
              initial={{width: 0}}
              animate={{width: "100%"}}
              transition={{duration: 1, delay: 0.7}}                  
            />

          </motion.div>
        </Link>
    </motion.div> 
)   

export default ClientCard