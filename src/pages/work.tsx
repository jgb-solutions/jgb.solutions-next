import React from "react"
import Link from "next/link"
import { MdCreate } from 'react-icons/md'

import SEO from "../components/SEO"
import MainLayout from '../components/layouts/Main'
import { WorkInterFace } from "./work/[slug]"
import WorkList from "../data/WorkList"
import WorkCard from "../components/WorkCard"

const title = "Our Work"

const Work = () => (
  <MainLayout>
    <SEO title={title} url="/work" description={`All of our work in the past few years`} />

    <div className="mb-3 flex items-center justify-center">
      <h1 className="text-4xl sm:text-5xl m-0 text-orange uppercase flex items-center">
        <MdCreate fontSize="inherit" /> <span className="ml-2">{title}</span>
      </h1>
    </div>

    <div className="mb-12 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {WorkList.map((work: WorkInterFace) => (
        <Link href='/work/[slug]' as={`/work/${work.slug}`} key={work.slug}>
          <a>
            <WorkCard work={work} />
          </a>
        </Link>
      ))}
    </div>
  </MainLayout>
)

export default Work
