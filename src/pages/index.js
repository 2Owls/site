import * as React from "react"
import Helmet from "react-helmet"
import Seo from "../components/seo"
import LogoTag from '../svg/LogoTag';
import { Link } from "gatsby";


const IndexPage = () => {

  return (
    <>

    <Helmet>
      <body className="body-dark"></body>
    </Helmet>

    <Seo title="Home" />

    <section className="h-screen py-16 text-owlwhite flex justify-center align-center">
      <div className="container mx-auto flex justify-center items-center">
        <div class="w-3/12">
          <Link to="/work/">
            <LogoTag /> 
           </Link>
         </div>  
      </div>
    </section>        
  </>
  )
}

export default IndexPage
