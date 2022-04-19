import * as React from "react"
import Helmet from "react-helmet"
import LogoDiamond from "../components/LogoDiamond"
import { motion } from 'framer-motion';
import FadeUp from "../components/fadeUp";
import FeatherIcon from 'feather-icons-react';
import LogoTag from "../components/LogoTag";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"


function Parallax() {

return (
<>

<main>

<Helmet>
  <body className="body-dark"></body>
</Helmet>

<section className="title p-8 h-screen/2 md:h-screen/2">
  <div className="container h-full flex items-end justify-items-center">
    <div className="lg:w-2/4 mx-auto mb-8">
      <motion.div
        initial={{y: 50, opacity: 0,}}
        animate={{y: 0, opacity: 1 }}
        transition={{duration: 0.5, delay: 0.5, ease: "easeOut" }}   
        className="w-48 mx-auto"             
      >
        <LogoTag />
        <div className="mt-4 text-2xl text-center">
          <Link to="/work">WORK </Link>
           | 
          <Link to="/contact"> CONTACT</Link>
          <div></div>          
        </div>
      </motion.div>
    </div>  
  </div>
</section>    


<motion.section 
  className="grid grid-cols-1 h-screen header flex items-top "
  initial={{y: 75, opacity: 0}}
  animate={{y: 0, opacity: 1}}
  transition={{duration: 1, type: "spring", ease: 'easeOut', bounce: 0.5 }} 
>
<h1 className="w-1/3 mt-16 mx-auto display-1 md:text-5xl my-8 text-center text-owlwhite" >We are a <strong>design and marketing</strong> agency who believe great ideas start with you.</h1>
</motion.section>          



<motion.section className="section section-white h-auto py-32">
    <FadeUp>
      <div className="w-full lg:w-1/3 mx-auto text-center">
          <div className="w-8 mx-auto ">
            <LogoDiamond />  
          </div>
          <p className="display-1 text-4xl mt-6">Mixing creativity with experience, we work with you to help you connect with your customers and realise the potential of your business.</p>
      </div>  
    </FadeUp>
</motion.section>   

      <section className="section bg-owlgreen"> 
        <div className="container mt-32 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              <FadeUp className=" bg-owlgreen text-owlwhite rounded-md p-4">    
                <FeatherIcon icon="globe" size="48" stroke="#fff" className="float-right"/>         
                <h1 className="display-1 text-4xl">Website Design</h1>
                <hr />                
                <ol className="list-disc">
                  <li>To suit any budget</li>
                  <li>Sites that grow with your business</li>
                  <li>Individually designed</li>                                
                  <li>Hosting and CMS included</li>                
                </ol>
              </FadeUp>               
              <FadeUp className="text-owlwhite rounded-md p-4">                  
                <FeatherIcon icon="droplet" size="48" stroke="#fff" className="float-right"/>         
                <h1 className="display-1 text-4xl">Marketing</h1>
                <hr />
                <ol className="list-disc">                
                  <li>Marketing plans and strategy</li>
                  <li>Copy writing</li>
                  <li>Print media</li>                                
                  <li>Direct mail specialists</li>                     
                </ol>
              </FadeUp>
              <FadeUp className="text-owlwhite rounded-md p-4">                   
                <FeatherIcon icon="hexagon" size="48" stroke="#fff" className="float-right"/>         
                <h1 className="display-1 text-4xl">Brand Identity</h1>
                <hr />                
                <ol className="list-disc">
                  <li>Brand creation</li>
                  <li>Logo design</li>
                  <li>Bespoke graphics</li>                                
                  <li>Future proof concepts</li>                      
                </ol>
              </FadeUp>
              <FadeUp className="text-owlwhite rounded-md p-4">             
                <FeatherIcon icon="twitter" size="48" stroke="#fff" className="float-right"/>         
                <h1 className="display-1 text-4xl">Digital  &amp; Social</h1>
                <hr />                
                <ol className="list-disc">                
                  <li>Multi-platform marketing</li>
                  <li>Content creation</li>
                  <li>Email marketing</li>                                
                  <li>Landing pages &amp; form creation</li>                  
                </ol>
              </FadeUp>
          </div>
        </div>
</section>    

<section className="section section-white">
  <div className="container">
    <FadeUp className="w-1/2 mx-auto text-center">
      <h1 className="display-1 text-4xl text-owlgreen">Bold Thinking – Inspired Creativity – Amazing results</h1>  
    </FadeUp>   
  </div>

</section>
 

    
                        
</main>


<footer className="border-t flex flex-col" > 
          <div>
            <StaticImage
                className="w-16"
                src="../images/owl_eyes.svg"
                alt="Owl Eyes"
                layout="constrained"
                />   
            </div>
            <div className="mt-4 text-2xl text-center">
              <Link to="/work">HOME </Link>
              | 
              <Link to="/work"> WORK </Link>
              | 
              <Link to="/contact"> CONTACT</Link>
            </div>        
            <div className="mt-4">
              © {new Date().getFullYear()}, Built by
              {` `}
              <a href="https://www.2owls.co.uk">owls</a>
            </div>

        </footer>

</>
)


}


export default Parallax
