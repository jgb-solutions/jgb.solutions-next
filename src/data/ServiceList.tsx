import React from "react"
import { MdWeb } from 'react-icons/md'
import {
  MdPhoneAndroid,
  MdStorage,
  MdDomain,
  MdMic,
  MdTv,
  MdDesktopMac,
  MdDashboard,
  MdHeadsetMic
} from 'react-icons/md'

const ServiceList = [
  {
    icon: <MdHeadsetMic />,
    image: '/assets/images/consulting-web.jpg',
    title: 'Consulting',
    description: `
      We have a team of experts available for consulting
      on various kinds of projects of different sizes.
    `,
    button: 'Request a Quote',
  },
  {
    icon: <MdDesktopMac />,
    image: '/assets/images/web-app-web.jpg',
    title: 'Web App',
    description: 'You need a web platform, want to manage users, sell products, services with real time analytics or a backend to support your mobile application.',
    button: 'Request a Quote',
  },
  {
    icon: <MdPhoneAndroid />,
    image: '/assets/images/mobile-web.jpg',
    title: 'Mobile App',
    description: `
      You want a mobile application that will consume data from an API, do calculations, allow your web platform's users to reach the service in real time. Or it may be as simple as a presentation application with a couple of screens.
    `,
    button: 'Request a Quote',
  },
  {
    icon: <MdStorage />,
    image: '/assets/images/web-hosting-web.jpg',
    title: 'Web Hosting',
    description: `
      Every website or web application needs a home on the internet so they can be accessed all over the world. I happen to be good at that too. Ranging from simple shared hosting to a customized VPS (Virtual Private Server) to a dedicated server, or configuring a CDN (Content Delivery Network) for even faster loading time, I can help you get the best for your budget.
    `,
    button: 'Request a Quote',
  },
  {
    icon: <MdDomain />,
    image: '/assets/images/domain-web.jpg',
    title: 'Domain Name',
    description: `
      Every successful online endeavor starts with a good name and a sweet web address. The latter is called a domain name and is what people will type in their browsers' address bar to access your business online. I can help with finding and registering a great domain name.
    `,
    button: 'Request a Quote',
  },
  {
    icon: <MdMic />,
    image: '/assets/images/radio-web.jpg',
    title: 'Online Radio',
    description: `
      Whether you are in the media, a church, an organization or even a DJ and want to broadcast live audio online to reach more people/fans/users, I have experience with that. I can even get you international number(s) for people outside the country to call and listen. And much more.
    `,
    button: 'Request a Quote',
  },
  {
    icon: <MdTv />,
    image: '/assets/images/online-tv-web.jpg',
    title: 'Online TV',
    description: `
      It's 2019 and people spend more time on their computer and mobile devices more than ever. So if you are a TV, doing multimedia events, an organization... and want to reach more users, broadcasting images and/or videos online might be a good option. Depending on your budget and the size of the audience you want to target, I might have something for you.
    `,
    button: 'Request a Quote',
  },
  {
    icon: <MdWeb />,
    image: '/assets/images/wordpress-web.jpg',
    title: 'WP Theme',
    description: `
      You already have a design and want to code it or that static site is already online but you can't update it regularly because you don't know anything about HTML or don't want to get your hands dirty each time you want to make an update. It's frustrating. Isn't it? It's okay. Let me translate that design or static site to a WordPress theme for you so you can use WordPress, the most popular Content Management System in the world, to do it yourself. I'll even provide educational assistance and materials to help you get on speed with the platfom.
    `,
    button: 'Request a Quote',
  },
  {
    icon: <MdDashboard />,
    image: '/assets/images/seo-web.jpg',
    title: 'Marketing | SEO',
    description: `
      Having a presence online is great. Good job, you've made it! But wait. You have no visitors, or not the amount you'd expected? You should know by now that people won't know about your website/app if you don't market it. And it has to be optimized for search engine such as Google so people can find it when they search for something related to your business. Luckily for you I've been managing websites that have thousands of visitors a day. And I can help you. I'll leverage social media and other search engine optimization techniques to get people to know about your business.
    `,
    button: 'Request a Quote',
  },
]

export default ServiceList