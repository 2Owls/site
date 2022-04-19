import * as React from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet"
import LogoDiamond from "../components/LogoDiamond"
import { StaticImage } from "gatsby-plugin-image"
import FadeUp from "../components/fadeUp"


const TogetherPage = () => (
  
  <Layout>

    <Helmet>
      <body className="body-together"></body>
    </Helmet>

<section className="grid grid-cols-1 lg:grid-cols-2">

    <div className="h-screen/34 lg:h-screen together">

    </div>

    <div className="flex lg:h-screen items-center justify-center order-last lg:order-first bg-owlwhite p-4 lg:p-8 text-center lg:text-left">
      <motion.div className="md:w-2/3"
        initial={{x: -300, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 1}}
      >
        <div className="w-4 my-8 mx-auto lg:mx-4"><LogoDiamond/></div>  
        <h1 className="display-2 w-full text-6xl xl:text-7xl text-owlgreen-dark">Together</h1>
        <motion.hr 
          initial={{width: 0}}
          animate={{width: "100%"}}
          transition={{duration: 1.5}}                  
        />   
        <p className="text-owlgray">Brand identity | Logo design | Website Design &amp; Build | Bespoke image creation</p>
      </motion.div>
    </div>
    
</section>   

<section class="section bg-owlgray text-owlwhite">
    <div class="grid sm:grid-cols-2">
      <FadeUp className="flex items-center justify-center">
        <div className="w-2/3">
          <h2 className="display-3 border-b py-2">About Together</h2>
          <p>Unprecedented growth saw Together able to move to the next step as a business, they wanted a new site which made them unique amongst the marketplace.</p>
        </div>
      </FadeUp>

      <FadeUp className="flex items-center justify-center">
        <div className="w-2/3">
          <h2 className="display-3 border-b py-2">Our work</h2>
          <p>In a market where images are often stock photos, we created bespoke, exciting imagery which worked with deep colours to give a friendly, modern feel.
</p>
        </div>
      </FadeUp>
        
    </div>      
</section>


<section class="section bg-togetherblue">
    <div class="container">

        <FadeUp className="w-100 p-24 flex justify-center">
          <StaticImage
            src="../images/together-logo.svg"
            alt="Together Compliance Logo"
            layout="constrained"
            />          
        </FadeUp>

        <h1 className="display-1 text-center">A growing SME wanting a new stand-out website.</h1>
        </div>      
</section>

<section class="section section-white">
  <div className="container">
    <div className="flex items-center justify-center">            
        <FadeUp className="sm:w-2/3 p-12">
        <StaticImage
          src="../images/together5.png"
          alt="Together Compliance"
          layout="constrained"
        />
        </FadeUp>  
    </div>  
  </div>
</section>  
            
   
<section className="section">
    <div className="container">

    <div class="flex flex-col sm:flex-row">
          <StaticImage
            src="../images/together1.png"
            alt="Together Example 1"
            layout="constrained"
          />
          <StaticImage
            src="../images/together2.png"
            alt="Together Example 2"
            layout="constrained"
          />
          <StaticImage
            src="../images/together3.png"
            alt="Together Example 3"
            layout="constrained"
          />             
        </div>                  
    </div>
</section>       
      
<section class="section section-white">
  <div className="container">
    <div className="flex items-center justify-center">            
        <FadeUp className="sm:w-2/3 p-12">
        <StaticImage
            src="../images/together4.png"
            alt="Together Radio"
            layout="constrained"
          />  
        </FadeUp>  
    </div>  
  </div>
</section>  


<section className="section section-testimonial">
    <div className="container">
        <div className="w-full md:w-1/2 mx-auto">
            <div className="text-right">
                <h1 className="display-1 text-center">"2 Owls listened to everything we wanted, then used their vision to create a brand stronger than we could have imagined. They fit perfectly with our ethos and helped us to engage with our target client from the outset" </h1>
                <hr />                
                <h1 className="text-4xl">- Homera Ltd</h1>
            </div>            
        </div>    
    </div>
</section>             



  </Layout>
)

export default TogetherPage
