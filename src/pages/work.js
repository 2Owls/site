import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import ClientCard from "../components/ClientCard"

const WorkPage = () => (

  <Layout>
    

    <Helmet>
    <body className="body-dark"></body>
    </Helmet>    

    <section className="px-4 pt-16 mt-32 text-owlwhite">

      <div className="container">
      <h1 className="text-owlwhite display-2 text-6xl text-left mb-16 border-b pb-4">Projects</h1>

        <div className="grid md:grid-cols-3 gap-4">

            <div className="md:col-span-2">
                <ClientCard 
                  client="hendersons"
                  clientname="Hendersons"
                  bg="#cdcdcd"
                />  
            </div>
            <div className="h-full md:row-span-2">
                <ClientCard 
                  client="together"
                  clientname="Together Compliance"
                  bg="#EAD8B0"
                /> 
            </div>
            <div>
                <ClientCard 
                  client="homera"
                  clientname="Homera"
                  bg="#FCDCCB"
                />         
            </div>
            <div>
                <ClientCard 
                  client="just"
                  clientname="Just"
                  bg="#cdcdcd"
                />    
            </div>         

        </div>
      </div>

    </section>    

    <section className="px-4 pb-8 mt-32 text-owlwhite">

      <div className="container">
      <h1 className="text-owlwhite display-2 text-6xl text-left mb-16 border-b pb-4">Models</h1>

        <div className="grid md:grid-cols-3 gap-4">

            <div className="md:col-span-2">
                <ClientCard 
                  client="snowspeeder"
                  clientname="Snowspeeder"
                  bg="#cdcdcd"
                />  
            </div>     

        </div>
      </div>

</section>        
  </Layout>
)

export default WorkPage
