/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

const Layout = ({ children, path }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <Header/>   
        <main>
          {children}
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
            <Link to="/">HOME </Link>
              |               
              <Link to="/work"> WORK </Link>
              | 
              <Link to="/contact"> CONTACT</Link>
            </div>        
          <div className="mt-4 text-sm">
              © {new Date().getFullYear()} // Built by Owls
              {` `}
          </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
