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

    <div className="h-screen/34 lg:h-screen jkh">

    </div>

    <div className="flex lg:h-screen items-center justify-center order-last lg:order-first bg-owlwhite p-4 lg:p-8 text-center lg:text-left">
      <motion.div className="md:w-2/3"
        initial={{x: -300, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 1}}
      >
        <div className="w-4 my-8 mx-auto lg:mx-4"><LogoDiamond/></div>  
        <h1 className="display-1 w-full text-7xl xl:text-8xl text-owlgreen-dark">JUST</h1>
        <motion.hr 
          initial={{width: 0}}
          animate={{width: "100%"}}
          transition={{duration: 1.5}}                  
        />   
        <p className="text-owlgray">Brand creation | Logo design | Website Design &amp; build | Email campaigns</p>
      </motion.div>
    </div>
    
</section>          

<section class="section text-owlwhite">
    <div class="grid sm:grid-cols-2">
      <FadeUp className="flex items-center justify-center">
        <div className="w-2/3">
          <h2 className="display-3 border-b py-2">About Just</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </FadeUp>

      <FadeUp className="flex items-center justify-center">
        <div className="w-2/3">
          <h2 className="display-3 border-b py-2">Our work</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </FadeUp>
        
    </div>      
</section>

<section class="section bg-jkhorange">
    <div class="container">

        <div className="w-100 flex justify-center">
          <StaticImage
            src="../images/JUST_ufh_logo.svg"
            alt="JUST Logo"
            layout="constrained"
            />          
        </div>

        <h1 className="display-1 border-t text-owlwhite text-center pt-8">The creation of a new brand wanting to make an impact in the industry.</h1>
        </div>      
</section>
            
   
<section className="section">
    <div className="container">

    <div class="flex">
          <StaticImage
            src="../images/jkh_stock.jpg"
            alt="JKH Stock Image"
            layout="constrained"
          />             
        </div>                  
    </div>
</section>       
      

<section class="section section-white">
  <div className="container">
    <FadeUp className="flex items-center justify-center">            
        <div className="sm:w-2/3 p-12">
        <StaticImage
            src="../images/jkh_element.svg"
            alt="JKH Heating Element"
            layout="constrained"
          />  
        </div>  
    </FadeUp>    
  </div>
</section>          

<section className="section section-testimonial">
    <div className="container">
        <div className="w-full md:w-1/2 mx-auto">
            <div className="text-right">
                <h1 className="display-1 text-center">"Jay and Lisa are brilliant to work with - they provided great advice throughout the design and implentation of my first website, and were able to realise all of my ideas
The website is generating traffic and leads on a regular basis.
<br /><br />
I'll definitley use them again. Thank you 2 Owls!"</h1>
                <hr />                
                <h1 className="text-4xl">- JKH</h1>
            </div>            
        </div>    
    </div>
</section>             



  </Layout>
)

export default TogetherPage
