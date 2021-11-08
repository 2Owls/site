/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

 import * as React from "react"
 import { AnimatePresence } from 'framer-motion';
 import './src/styles/global.css';

 export function wrapPageElement({ element, props }) {
    return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>;
  }
