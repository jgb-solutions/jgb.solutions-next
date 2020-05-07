import React from "react"
import { MdBuild } from 'react-icons/md'

import SEO from "../components/SEO"
import Header from "../components/Header"
import Footer from "../components/Footer"
import MainLayout from "../components/layouts/Main"
import HomeSlider from "../components/HomeSlider"
import ServiceList from "../data/ServiceList"

const title = "Web & Mobile Development Services"

const IndexPage = () => (
  <MainLayout>
    <SEO title={title} />

    <Header />

    <div className="shadow-md mb-12 rounded-large overflow-hidden">
      <HomeSlider />
    </div>

    <div className="mb-3 flex items-center justify-center">
      <h3 className="text-4xl sm:text-5xl m-0 text-dark uppercase flex items-center">
        <MdBuild fontSize="inherit" /> <span>Our Services</span>
      </h3>
    </div>

    <div className="mb-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {ServiceList.map((service, index) => (
        <div className="shadow-md bg-dark text-white p-4 rounded-large">
          <h3 className="flex items-center text-2xl uppercase mb-3">
            {service.icon} <span className="ml-2">{service.title}</span>
          </h3>

          <p dangerouslySetInnerHTML={{ __html: service.description }} />
        </div>
      ))}
    </div>

    <Footer />
  </MainLayout >
)

export default IndexPage
