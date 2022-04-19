import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Helmet from "react-helmet"
import { motion } from "framer-motion"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LogoDiamond from "../components/LogoDiamond"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />

    <Helmet>
    <body className="body-yellow"></body>
    </Helmet>

    <section className="bg-owlgray h-screen flex items-center justify-items-center">

        <div className="w-full lg:w-3/4 xl:w-1/3 bg-owlyellow container my-16 p-4 px-4 md:px-16 rounded-lg">

            <div className="p-4 lg:p-8 text-center">
              <motion.div
                initial={{y: -50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 1}}
              >
                <div className="w-6 mx-auto">
                  <LogoDiamond/>  
                </div>  
                <br />
                <h1 className="display-2 text-6xl text-center text-owlgreen">Get In Touch</h1>
                <motion.hr 
                  initial={{width: 0}}
                  animate={{width: "100%"}}
                  transition={{duration: 1.5}}                  
                /> 
              </motion.div>
            </div>

            <form
              name="contact"
              method="post"
              action="/thank-you/"  
              data-netlify="true"
              data-netlify-honeypot="bot-field"           
            >  
                <input type="hidden" name="form-name" value="contact" />   
                <label>
                  Name
                  <input type="text" name="name" id="name" className="w-full mb-8 rounded-md"/>
                </label>
                <label>
                  Email
                  <input type="email" name="email" id="email" className="w-full mb-8 rounded-md"/>
                </label>
                <label>
                  Subject
                  <input type="text" name="subject" id="subject" className="w-full mb-8 rounded-md"/>
                </label>
                <label>
                  Message
                  <textarea name="message" id="message" rows="5" className="w-full mb-8 rounded-md" />
                </label>
                <button type="submit" className="bg-owlgreen text-owlwhite w-full p-4 rounded-md">Submit</button>
            </form>
          </div>



    </section>        
  </Layout>
)

export default ContactPage
