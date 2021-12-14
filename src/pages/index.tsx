import clx from 'classnames'
import Image from 'next/image'
import { MdBuild } from 'react-icons/md'
import { GetStaticProps, NextPage } from 'next'

import WorkCard from '../components/WorkCard'
import staticWorkList from '../data/staticWorkList'
import MainLayout from '../components/layouts/Main'
import LinkWrapper from '../components/LinkWrapper'
import staticServiceList from '../data/staticServiceList'
import { ServiceInterFace, WorkInterFace } from '../../interfaces'

type Props = {
  workList: WorkInterFace[]
  serviceList: ServiceInterFace[]
}

const IndexPage: NextPage<Props> = ({ workList, serviceList }) => {
  return (
    <MainLayout>
      <div className="shadow-md mb-12 rounded-large splash-gradient py-20 px-5 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-bold slogan-gradient py-5 text-center">
          Digital Design
          <span className="hidden lg:inline">&</span>
          <span className="block lg:hidden border-t-2 mt-2"></span>
          Development
        </h1>
        <h2 className="text-normal sm:text-lg text-white text-center sm:w-1/2 uppercase">
          We use awesome technologies <br /> to build awesome products <br />{' '}
          for our partners.
        </h2>
      </div>

      <div className="mb-3 flex items-center justify-center">
        <h3 className="text-4xl sm:text-5xl m-0 text-dark uppercase flex items-center">
          <MdBuild fontSize="inherit" />
          <span className="ml-2"> What We Do</span>
        </h3>
      </div>

      <div className="mb-12">
        {serviceList.map(({ title, description, icon, image }, index) => (
          <div className="mb-12 grid sm:grid-cols-2 sm:gap-3" key={title}>
            {index % 2 !== 0 && (
              <Image
                src={image}
                className="rounded-t-lg sm:rounded-large"
                alt={title}
              />
            )}
            <div
              className={clx(
                'shadow-md bg-dark splash-gradient text-white p-4 sm:rounded-large',
                {
                  'rounded-b-lg': index % 2 !== 0,
                  'rounded-t-lg': index % 2 === 0,
                }
              )}
            >
              <h3 className="flex items-center text-2xl uppercase mb-3">
                {icon}
                <span className="ml-2">{title}</span>
              </h3>
              <p>{description}</p>
            </div>
            {index % 2 === 0 && (
              <Image
                src={image}
                className="rounded-t-lg sm:rounded-large"
                alt={title}
              />
            )}
          </div>
        ))}
      </div>
      {/* What We Do */}

      {/* Work */}
      <div className="mb-3 flex items-center justify-center">
        <h3 className="text-4xl sm:text-5xl m-0 text-orange uppercase flex items-center">
          <i className="fa fa-edit" aria-hidden="true"></i>{' '}
          <span className="ml-2">Recent Work</span>
        </h3>
      </div>

      <div className="mb-12 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {workList
          .filter((work) => work.featured)
          .map((work) => (
            <LinkWrapper href={`/work/${work.slug}`} key={work.slug}>
              <WorkCard work={work} />
            </LinkWrapper>
          ))}
      </div>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      workList: staticWorkList,
      serviceList: staticServiceList,
    },
  }
}

export default IndexPage
