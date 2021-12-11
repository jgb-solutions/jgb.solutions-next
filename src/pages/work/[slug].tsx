import React from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { MdCreate } from 'react-icons/md'

import SEO from '../../components/SEO'
import Icon from '../../components/Icon'
import WorkList from '../../data/staticWorkList'
import WorkCard from '../../components/WorkCard'
import { WorkInterFace } from '../../../interfaces'
import MainLayout from '../../components/layouts/Main'
import staticWorkList from '../../data/staticWorkList'

const getRelatedWorks = (WorkList: WorkInterFace[], work: WorkInterFace) => {
  const sameTypesWorks = WorkList.filter(
    (w) => w.type === work.type && w.slug !== work.slug
  )
  const randomWorks = [...sameTypesWorks].sort(() => Math.random() - 0.5)
  const relatedWorks = randomWorks.slice(0, 6)
  return relatedWorks
}

export default function Work({
  work,
  relatedWorks,
}: {
  work: WorkInterFace
  relatedWorks: WorkInterFace[]
}) {
  return (
    <MainLayout>
      <SEO
        title={work.name}
        url={`/work/${work.slug}`}
        image={`/assets/images/screenshots/${work.image}`}
        description={work.detail}
      />
      <div className="grid md:grid-cols-3 gap-3 mb-12">
        <div className="md:col-span-2 rounded-large overflow-hidden shadow-2xl">
          <img src={`/assets/images/screenshots/${work.image}`} />
        </div>
        <div>
          <h1 className="text-4xl uppercase mb-2 text-dark">{work.name}</h1>
          <h4 className="text-xs uppercase">Type: {work.type}</h4>
          <h4 className="mb-4">
            <a
              href={work.url}
              className="flex items-center font-bold uppercase text-orange underline"
              target="__blank"
              rel="no-follow"
            >
              <Icon type={work.type} />{' '}
              <span className="ml-2">Check them out</span>
            </a>
          </h4>
          <div dangerouslySetInnerHTML={{ __html: work.detail }} />
        </div>
      </div>

      {relatedWorks.length > 0 && (
        <>
          <div className="mb-3 flex items-center justify-center">
            <h3 className="text-4xl sm:text-5xl m-0 text-dark uppercase flex items-center">
              <MdCreate fontSize="inherit" />{' '}
              <span className="ml-2">Related Work</span>
            </h3>
          </div>

          <div className="mb-12 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {relatedWorks.map((w: WorkInterFace) => (
              <Link href="/work/[slug]" as={`/work/${w.slug}`} key={w.slug}>
                <a>
                  <WorkCard work={w} />
                </a>
              </Link>
            ))}
          </div>
        </>
      )}
    </MainLayout>
  )
}

export async function getStaticPaths() {
  return {
    paths: WorkList.map((work: WorkInterFace) => `/work/${work.slug}`),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let relatedWorks: WorkInterFace[] = []

  if (params) {
    const { slug } = params

    const work = staticWorkList.find((w) => w.slug === slug)

    if (work) {
      relatedWorks = getRelatedWorks(staticWorkList, work)
    }

    return { props: { work, relatedWorks } }
  }

  return { props: {} }
}
