import React from "react"
import { MdInfoOutline } from 'react-icons/md'

import SEO from "../components/SEO"
import MainLayout from '../components/layouts/Main'
import { APP_NAME } from "../utils/constants"

const title = "About Us"
const seoDescription = `${APP_NAME} (formerly JGB Neat Design) was started by Jean Gérard Bousiquot in early 2013 as a way to
        freelance professionally. As the time passes he got more clients,
        ranging from entrepreneurs amd small enterprises to medium ones in Haiti and abroad.`

const About = () => (
  <MainLayout>
    <SEO
      title={title}
      description={seoDescription}
      url="/about"
    />

    <div className="mb-4 flex items-center justify-center">
      <h1 className="text-4xl sm:text-5xl m-0 uppercase flex items-center">
        <MdInfoOutline fontSize="inherit" /> <span className="ml-2">{title}</span>
      </h1>
    </div>
    <div className="grid md:grid-cols-4 gap-3 mb-24">
      <div>
        <img
          src="/assets/images/jgb-2020.jpg"
          className="rounded-full shadow-xl display-block mx-auto"
          style={{ width: 150 }}
        />
      </div>
      <div className="md:col-span-3">
        <p className="mb-2">{seoDescription}</p>

        <p className="mb-2">
          A couple of years later things got really serious and he decided
          to upgrade his freelance business to an agency. He is currently the sole
          member and owner, but when the need arises, he works with other professionals
          to deliver bigger products/projects faster.
        </p>

        <p className="mb-8">
          A nerd to his core, he is always using the latest and greatest techonologies to create
          more sophisticated web and mobile products. But at the end of the day he's wise enough
          to use the right tools for the job.
        </p>

        <p>
          Fun fact: the name JGB Neat Design was inspired by a podcast called Shop Talk Show by Chris Coyier from CSS Tricks,
          where he was talking about awesome and neat designs.
          JGB Solutions was inspired after Pierre Solutions (another freelance/agency hybrid shop) through
          some discussions that we were having in one of our chats. And the first thing I did was to snatch
          the <b>jgb.solutions</b> domain. The perfect one!
        </p>
      </div>
    </div>
  </MainLayout>
)

export default About
