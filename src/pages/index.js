import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from '../components/nav'
import Hero from '../components/hero'
import Profile from '../components/profile'
import Experience from '../components/experience'
import Services from '../components/services'
import Portfolio from '../components/portfolio'
import 'typeface-roboto'

const IndexPage = () => (

  <Layout>
    <SEO title="Miles's Portfolio" />
    <Nav/>
    <Hero/>
    <Profile/>
    <Experience/>
    <Services/>
    <Portfolio/>
  </Layout>
)

export default IndexPage

