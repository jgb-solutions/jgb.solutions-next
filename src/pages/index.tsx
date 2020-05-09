import React from "react"
import Link from "next/link"
import { MdBuild, MdCreate } from 'react-icons/md'

import WorkList from "../data/WorkList"
import ServiceList from "../data/ServiceList"
import { WorkInterFace } from "./work/[slug]"
import HomeSlider from "../components/HomeSlider"
import MainLayout from "../components/layouts/Main"
import WorkCard from "../components/WorkCard"

export default function IndexPage() {
  return (
    <MainLayout>
      <div className="shadow-md mb-12 rounded-large overflow-hidden">
        <HomeSlider />
      </div>

      {/* Services */}
      <div className="mb-3 flex items-center justify-center" id="services">
        <h3 className="text-4xl sm:text-5xl m-0 text-dark uppercase flex items-center">
          <MdBuild fontSize="inherit" /> <span className="ml-2">Our Services</span>
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
          <MdCreate fontSize="inherit" /> <span className="ml-2">Latest Work</span>
        </h3>
      </div>

      <div className="mb-12 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {WorkList.filter(work => work.featured).map((work: WorkInterFace) => (
          <Link href='/work/[slug]' as={`/work/${work.slug}`} key={work.slug}>
            <a>
              <WorkCard work={work} />
            </a>
          </Link>
        ))}
      </div>
      {/* /Services */}

    </MainLayout >
  )
}