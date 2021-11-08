import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { motion } from "framer-motion"
import Header from "../components/header"

const IndexPage = () => (
  <Layout> 
    <Seo title="Home" />

    <Helmet>
    <body className="body-dark"></body>
    </Helmet>    

    <section className="h-screen py-16 py-16 mt-32 text-owlwhite">
      <div className="container mx-auto">

        <h1 className="text-owlgreen">Our Work</h1>

        <div className="grid grid-cols-2 gap-8">
        
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
           >
          <Link className="card homera" to="/work-homera/">
            <motion.div 
              initial={{x: -20}}
              animate={{x: 0}}
              transition={{duration: 0.5 }} 
              className="title">
              <h1>Homera</h1>
              <motion.hr 
                initial={{width: 0}}
                animate={{width: "100%"}}
                transition={{duration: 1}}                  
              />
            </motion.div>
          </Link>
        </motion.div>  

        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
           >
          <Link className="card hendersons" to="/work-hendersons/">
            <motion.div 
              initial={{x: -20}}
              animate={{x: 0}}
              transition={{duration: 0.5 }} 
              className="title">
              <h1>Hendersons</h1>
              <motion.hr 
                initial={{width: 0}}
                animate={{width: "100%"}}
                transition={{duration: 1, delay: 0.5}}                  
              />
            </motion.div>
          </Link>
        </motion.div>  
          
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
           >
          <Link className="card homera h-64" to="/work-homera/">
            <motion.div 
              initial={{x: -20}}
              animate={{x: 20}}
              transition={{duration: 0.5 }} 
            className="title">
              <h1 className="display-1">Homera</h1>
            </motion.div>
          </Link>
        </motion.div>  

        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
           >
          <Link className="card homera h-64" to="/work-homera/">
            <motion.div 
              initial={{x: -20}}
              animate={{x: 20}}
              transition={{duration: 0.5 }} 
            className="title">
              <h1 className="display-1">Homera</h1>
            </motion.div>
          </Link>
        </motion.div>  

        </div>
      </div>

    </section>    
  </Layout>
)

export default IndexPage
