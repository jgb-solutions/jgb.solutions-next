import React from 'react'
import { GetStaticProps } from 'next'
import { MdCreate } from 'react-icons/md'

import WorkList from '../../data/WorkList'
import MainLayout from '../../components/layouts/Main'
import Icon from '../../components/Icon'
import Link from 'next/link'
import WorkCard from '../../components/WorkCard'
import SEO from '../../components/SEO'

export interface WorkInterFace {
  image: string
  slug: string
  name: string
  featured: boolean
  type: string
  url: string
  detail: string
}

export default function Work({ work }: { work: WorkInterFace }) {
  return (
    <MainLayout>
      <SEO
        title={work.name}
        url={`/work/${work.slug}`}
        image={`/assets/images/screenshots/${work.image}`}
      />
      <div className="grid  md:grid-cols-2 gap-3 mb-12">
        <div className="rounded-large overflow-hidden shadow-2xl">
          <img src={`/assets/images/screenshots/${work.image}`} />
        </div>
        <div>
          <h1 className="text-4xl uppercase mb-2 text-dark">{work.name}</h1>
          <h4 className="text-xs uppercase">
            Type: {work.type}
          </h4>
          <h4 className="mb-4">
            <a href={work.url} className="flex items-center font-bold uppercase text-orange underline" target="__blank" rel="no-follow">
              <Icon type={work.type} /> <span className="ml-2">Check them out</span>
            </a>
          </h4>
          <p>{work.detail}</p>
        </div>
      </div>


      <div className="mb-3 flex items-center justify-center">
        <h3 className="text-4xl sm:text-5xl m-0 text-dark uppercase flex items-center">
          <MdCreate fontSize="inherit" /> <span className="ml-2">Related Work</span>
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
    </MainLayout>
  )
}

export async function getStaticPaths() {
  return {
    paths: WorkList.map((work: WorkInterFace) => `/work/${work.slug}`),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const { slug } = params

    const work = WorkList.find(w => w.slug === slug)

    return { props: { work } }
  }

  return { props: {} }
}
