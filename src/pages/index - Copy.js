import * as React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import LogoDiamond from "../components/LogoDiamond"
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";




 function Parallax() {
  const [ref, isVisible] = useInView({ threshold: 0.7 });
  const variants = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      y: 80,
    },
  };
  return (
    <div>
      <div style={{ height: "100vh" }}>
        <h1>Scroll down to next section 👇</h1>
      </div>
      <div style={{ height: "100vh", backgroundColor: "#23cebd" }}>
        <motion.div
          ref={ref}
          variants={variants}
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ marginLeft: "50px", marginTop: "50px" }}
        >
          <h1>Hey I'm on the screen</h1>
          <img
            style={{ borderRadius: "30px" }}
            alt="ralph from the simpsons waving his hand"
            src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif"
          />
        </motion.div>
      </div>
    </div>
  );
}

const IndexPage = () => (

<Layout>

<Helmet>
  <body className="body-yellow"></body>
</Helmet>


<Parallax />

<section className="grid grid-cols-1 h-screen header">

  <h1>2Owls</h1>
</section>          



<section className="section section-gray h-screen py-32 text-owlwhite">
  <div className="container grid grid-cols-1 ">
    <div className="w-1/3 mx-auto">
      <div className="w-8 mx-auto">
        <LogoDiamond />  
      </div>
      <h1 className="display-1 text-center">2 Owls are a full-service design and marketing agency who believe great ideas start with you. </h1>

      <hr></hr>
      <p>Mixing outstanding creativity with knowledge and experience, we work with you to realise the potential of your business - whether you need a logo, a brand strategy, a new website or a full multi-channel marketing campaign, we can help you connect with your customers.</p>

      </div>
  </div>    
</section>    

<section class="section bg-owlgreen text-owlwhite">
<div className="container grid grid-cols-1 md:grid-cols-2 ">
<div className="project-slide md:border-r-2 md:border-owlgrey md:pr-12">
    <div>
      <h1 className="display-1">Newest work?</h1>
    </div> 
    <div>
        <h1 className="display-1">Contact form?</h1>
    </div> 
</div>
<div>            
    <div className="pl-12">
    <StaticImage
      src="../images/homera_blueprint.png"
      width={2560}
      quality={95}
      alt="Homera Logo Blueprint"
      objectFit="cover"
    />
  </div>  
</div>  
</div>
</section>  
                        



</Layout>

)


export default IndexPage
