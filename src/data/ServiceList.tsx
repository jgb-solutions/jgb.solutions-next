import {
  MdWeb,
  MdDomain,
  MdStorage,
  MdDashboard,
  MdDesktopMac,
  MdHeadsetMic,
  MdPhoneAndroid,
  MdSubscriptions
} from 'react-icons/md'

const ServiceList = [
  {
    icon: <MdHeadsetMic />,
    image: '/assets/images/consulting-web.jpg',
    title: 'Consulting',
    description: `
      We have experts available for consulting
      on various kinds of projects of different sizes.
      Either Web, Mobile and general web services and APIs.
    `,
  },
  {
    icon: <MdDesktopMac />,
    image: '/assets/images/web-app-web.jpg',
    title: 'Web App',
    description: `
      We've been building websites for almost 10 years,
      and we we've done so with a plethora of technoloqies,
      from legacy to shiny new ones.
      We can design, build and ship web platforms tailored to your needs.
    `,
  },
  {
    icon: <MdPhoneAndroid />,
    image: '/assets/images/mobile-web.jpg',
    title: 'Mobile App',
    description: `
      Building highly interactive mobile apps is one of our key strenghs.
      We use awesome technlogies such as React Native and Ionic to ship
      great products faster on both Android and iOS.
    `,
  },
  {
    icon: <MdStorage />,
    image: '/assets/images/web-hosting-web.jpg',
    title: 'Web Hosting',
    description: `
      Publishing your digital product to the public is mandory for people
      to use it. We can help host your websites, web apps and/or services.
      Ranging from using CDNs to caching, performance is at the heart of what we do.
    `,
  },
  {
    icon: <MdDomain />,
    image: '/assets/images/domain-web.jpg',
    title: 'Domain Name',
    description: `
      Registering a domain name is the first step to your startup.
      Keep it short, sweet and marketable. We know the best places
      to buy and manage yours.
    `,
  },
  {
    icon: <MdSubscriptions />,
    image: '/assets/images/radio-web.jpg',
    title: 'Broadcasting',
    description: `
      Having a presence online is mandatory in this day and age,
      especially if you are in the Media or thinking of entering that medium.
      Building a great audience online is possible with your own radio or TV.
      We can help.
    `,
  },
  {
    icon: <MdWeb />,
    image: '/assets/images/wordpress-web.jpg',
    title: 'WP Theme',
    description: `
      With almost 10 years of experience working at all level with WordPress,
      We can be trusted to design, build and ship great websites based on that
      platform. We can also work with existing themes to create your website or
      app quicly.
    `,
  },
  {
    icon: <MdDashboard />,
    image: '/assets/images/seo-web.jpg',
    title: 'Marketing | SEO',
    description: `
      Having your product online is great, really great.
      Now you want users. We can help leverage SEO tools and Social Media
      to bring that traffic that you deserve on your platform. We can help.
    `,
  },
]

export default ServiceList