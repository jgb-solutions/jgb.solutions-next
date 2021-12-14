import Image from 'next/image'

import SEO from '../components/SEO'
import { APP_NAME } from '../utils/constants'
import MainLayout from '../components/layouts/Main'
import JGB_IMAGE from '../../public/assets/images/jgb-ceo.jpg'

const title = 'About'
const seoDescription = `${APP_NAME} (formerly JGB Neat Design) was started by Jean Gérard Bousiquot in early 2013 as a way to
           freelance professionally. As the time passes he got more clients,
           ranging from entrepreneurs and small enterprises to medium ones in Haiti and abroad.`

const About = () => (
  <MainLayout>
    <SEO title={title} description={seoDescription} url="/about" />

    <div className="mb-4 flex items-center justify-center">
      <h1 className="text-2xl sm:text-5xl m-0 uppercase flex items-center">
        <i className="fa fa-info-circle" aria-hidden="true"></i>{' '}
        <span className="ml-2">{title}</span>
      </h1>
    </div>

    <div className="mb-4 text-center">
      <Image
        src={JGB_IMAGE}
        className="rounded-full shadow-sm"
        width={150}
        height={150}
        alt="Jean Gérard Bousiquot"
      />
    </div>
    <div className="shadow-md bg-dark splash-gradient text-white p-4 rounded-large mb-12 md:max-w-lg mx-auto">
      <p className="mb-2">
        JGB Solutions (formerly JGB Neat Design) was started by Jean Gérard
        Bousiquot in early 2013 as a way to freelance professionally. As the
        time passes he got more clients, ranging from entrepreneurs and small
        enterprises to medium ones in Haiti and abroad.
      </p>

      <p className="mb-2">
        A couple of years later things got really serious and he decided to
        upgrade his freelance business to an agency. He is currently the sole
        member and owner, but when the need arises, he works with other
        professionals to deliver bigger products/projects faster.
      </p>

      <p className="mb-8">
        A nerd to his core, he is always using the latest and greatest
        techonologies to create more sophisticated web and mobile products. But
        at the end of the day he&apos;s wise enough to use the right tools for
        the job.
      </p>

      <p>
        Fun fact: the name JGB Neat Design was inspired by a podcast called Shop
        Talk Show by Chris Coyier from CSS Tricks, where he was talking about
        awesome and neat designs. JGB Solutions was inspired after Pierre
        Solutions (another freelance/agency hybrid shop) through some
        discussions that we were having in one of our chats. And the first thing
        I did was to snatch the <b>jgb.solutions</b> domain. The perfect one!
      </p>
    </div>
  </MainLayout>
)

export default About
