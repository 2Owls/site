import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Helmet>
    <body className="body-yellow"></body>
    </Helmet>

    <section className="h-screen py-16 mt-32 text-owlgrey">
      <div className="container mx-auto">
        <h1 className="text-owlgreen">Contact Us</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>

        <StaticImage
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
    </div>
    </section>    
  </Layout>
)

export default IndexPage
