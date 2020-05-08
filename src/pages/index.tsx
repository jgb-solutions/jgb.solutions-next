import React from "react"
import { MdBuild, MdWork } from 'react-icons/md'

import SEO from "../components/SEO"
import Header from "../components/Header"
import Footer from "../components/Footer"
import MainLayout from "../components/layouts/Main"
import HomeSlider from "../components/HomeSlider"
import ServiceList from "../data/ServiceList"
import WorkList from "../data/WorkList"

const IndexPage = () => (
  <MainLayout>
    <Header />

    <div className="shadow-md mb-12 rounded-large overflow-hidden">
      <HomeSlider />
    </div>

    {/* Services */}
    <div className="mb-3 flex items-center justify-center" id="services">
      <h3 className="text-4xl sm:text-5xl m-0 text-dark uppercase flex items-center">
        <MdBuild fontSize="inherit" /> <span>Our Services</span>
      </h3>
    </div>

    <div className="mb-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {ServiceList.map((service, index) => (
        <div className="shadow-md bg-dark text-white p-4 rounded-large" key={index}>
          <h3 className="flex items-center text-2xl uppercase mb-3">
            {service.icon} <span className="ml-2">{service.title}</span>
          </h3>

          <p dangerouslySetInnerHTML={{ __html: service.description }} />
        </div>
      ))}
    </div>
    {/* /Services */}

    {/* Work */}
    <div className="mb-3 flex items-center justify-center">
      <h3 className="text-4xl sm:text-5xl m-0 text-orange uppercase flex items-center">
        <MdWork fontSize="inherit" /> <span>Latest Work</span>
      </h3>
    </div>

    <div className="mb-12 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {WorkList.filter(work => work.featured).map((work, index) => (
        <div className="shadow-md bg-orange text-dark rounded-large overflow-hidden" key={index}>
          <img src={`/assets/images/screenshots/${work.image}`} />
          <div className="p-4">
            <h3 className="flex items-center text-2xl uppercase mb-3">
              {work.name}
            </h3>
          </div>

        </div>
      ))}
    </div>
    {/* /Services */}

    <Footer />
  </MainLayout >
)

export default IndexPage
