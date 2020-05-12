import { WorkInterFace } from "../pages/work/[slug]"

const WorkList: WorkInterFace[] = [
  {
    image: 'jgb-solutions.jpg',
    slug: 'jgb-solutions',
    name: 'JGB Solutions',
    featured: true,
    type: 'website',
    url: `https://jgb.solutions`,
    detail: `
      <p class="mb-2">This is the website that you are looking at right now.
      It's our business home on the internet.</p>

      <p>We took our time to craft it so it can look and feel beautiful.</p>
    `
  },
  {
    image: 'simonefievre.jpg',
    slug: 'simone-fievre',
    name: 'Simone Fievre',
    featured: true,
    type: 'website',
    url: `https://www.simonefievre.com`,
    detail: `
      <p class="mb-2">Simone Fievre is a beautiful fashion and blog website that we created to help showcase
      her work and knowledge in health and beauty science.</p>

      <p>Built on WordPress.</p>
    `
  },
  {
    image: 'gwo-neg.jpg',
    slug: 'gwo-neg',
    name: 'Gwo Nèg',
    featured: false,
    type: 'website',
    url: `https://www.gwoneg.com`,
    detail: `
      <p class="mb-2">We bult Gwo Nèg to help James Cantave spreads his love for
      health and fitness to his many fans and friends following him on social media
      and other places on the internet.</p>

      <p>Built on WordPress.</p>
    `
  },
  {
    image: 'akolad.jpg',
    slug: 'akolad-creations',
    name: 'Akolad Créations',
    featured: false,
    type: 'website',
    url: `http://akoladcreations.com`,
    detail: `
      <p class="mb-2">Akolad is a design and development agency.</p>
      <p>We created their website in  partnetship with them to help sell their development service..</p>
    `
  },
  {
    image: 'echojounal.jpg',
    slug: 'echo-jounal',
    name: 'Echo Jounal',
    featured: false,
    type: 'website',
    url: `https://www.echojounal.com`,
    detail: `
      <p class="mb-2">Echo Jounal is an Haitian news website that publishes breaking news and a bunch of jokes.</p>
    `
  },
  {
    image: 'prestravaye.jpg',
    slug: 'pres-travaye',
    name: 'Près Travayè',
    featured: false,
    type: 'website',
    url: `http://www.prestravaye.com/`,
    detail: `
    <p class="mb-2">Près Travayè is an Haitian news website that publishes breaking news</p>
    `
  },
  {
    image: 'eneph.jpg',
    slug: 'eneph',
    name: 'ENEPH',
    featured: true,
    type: 'website',
    url: `https://www.eneph.org`,
    detail: `
      <p class="mb-2">ENEPH is a non-profit organization that helps kids of young age.</p>
      <p>We helped them present their awesome work online and welcomes donation</p>
    `
  },
  {
    image: 'mp3pam.jpg',
    slug: 'mp3pam',
    name: 'MP3Pam',
    featured: true,
    type: 'web app',
    url: `https://mp3pam.com`,
    detail: `
      <p class="mb-2">MP3Pam is a free entertainment platform for sharing all kinds of audios.</p>
      <p>It's one of our side projects that we make available online for people to use for free.</p>
    `
  },
  {
    image: 'infotoutan.jpg',
    slug: 'haiti-info-toutan',
    name: 'Haïti Info Toutan',
    featured: true,
    type: 'web app',
    url: `https://infotoutan.com`,
    detail: `
      <p class="mb-2">Haïti Info Toutan is a breaking news web app that we created in collaboration with one of our partners to shared news instantly.</p>
    `
  },
  {
    image: 'festival-film.jpg',
    slug: 'festival-film',
    name: 'Festival Film',
    featured: false,
    type: 'website',
    url: `https://festivalfilm.jgb.solutions`,
    detail: `
      <p>Festival Film is an online event website for Haitian films.</p>
    `
  },
  {
    image: 'footkole.jpg',
    slug: 'footkole',
    name: 'Footkole',
    featured: false,
    type: 'website',
    url: `https://www.footkole.com`,
    detail: `
      <p>Footkole is a popular Haitian website for soccer.</p>
    `
  },
  {
    image: 'forumtelecomhaiti.jpg',
    slug: 'forum-telecom-haiti',
    name: 'Forum Telecom Haïti',
    featured: true,
    type: 'website',
    url: `https://www.forumtelecomhaiti.org`,
    detail: `
      <p>We made Forum Telecom Haiti in collaboration with one of our partners to support telecom events in Haiti and the local areas.</p>
    `
  },
  {
    image: 'geek509.jpg',
    slug: 'geek509',
    name: 'Geek509',
    featured: false,
    type: 'website',
    url: `https://www.geek509.com`,
    detail: `
      <p>Geek509 is fun website for movie and Tv show news and recently has been publishing tech articles and tutorials to help young Haitians interested in tech.</p>
    `
  },
  {
    image: 'hn2030.jpg',
    slug: 'hn2030',
    name: 'Haïti Numérique 2030',
    featured: false,
    type: 'website',
    url: `https://hn2030.jgb.solutions`,
    detail: `
      TODO: TEXT COMING SOON.
    `
  },
  {
    image: 'juno7.jpg',
    slug: 'juno7',
    name: 'Juno7',
    featured: false,
    type: 'consulting',
    url: `https://www.juno7.ht`,
    detail: `
      TODO: TEXT COMING SOON.
    `
  },
  {
    image: 'juno7haiti.jpg',
    slug: 'juno7-haiti',
    name: 'Juno7 Haïti',
    featured: false,
    type: 'website',
    url: `https://juno7haiti.com`,
    detail: `
      TODO: TEXT COMING SOON.
    `
  },
  {
    image: 'loveandhopeorganizationhaiti.jpg',
    slug: 'love-hope',
    name: 'Love And Hope Org.',
    featured: false,
    type: 'website',
    url: `http://www.loveandhopeorganizationhaiti.org`,
    detail: `
      TODO: TEXT COMING SOON.
    `
  },
  {
    image: 'ouanaminthefc.jpg',
    slug: 'ouanaminthe-fc',
    name: 'Ouanaminthe FC',
    featured: false,
    type: 'website',
    url: `https://www.ouanaminthefc.com`,
    detail: `
      TODO: TEXT COMING SOON.
    `
  },
  {
    image: 'sodei.jpg',
    slug: 'sodei',
    name: 'SODEI',
    featured: false,
    type: 'website',
    url: `http://www.sodei.net`,
    detail: `
      TODO: TEXT COMING SOON.
    `
  },
  {
    image: 'jardin-fleuri.jpg',
    slug: 'jardin-fleuri',
    name: 'Garderie Jardin Fleuri',
    featured: false,
    type: 'website',
    url: `http://garderiejardinfleuri.com`,
    detail: `
      TODO: TEXT COMING SOON.
    `
  },
  {
    image: 'nb-haiti.jpg',
    slug: 'nb-haiti',
    name: 'NB Haïti',
    featured: false,
    type: 'website',
    url: `http://nbhaiti.com`,
    detail: `
      TODO: TEXT COMING SOON.
    `
  },
  {
    image: 'mindvalley-haiti.jpg',
    slug: 'mindvalley-haiti',
    name: 'Mindvalley Haiti',
    featured: false,
    type: 'website',
    url: `http://mindvalleyhaiti.b-thelight.com`,
    detail: `
      TODO: TEXT COMING SOON.
    `
  },
  {
    image: 'skypool.jpg',
    slug: 'skypool',
    name: 'Skypools Resort',
    featured: false,
    type: 'website',
    url: `http://skypool.kalikobeachclub.com`,
    detail: `
      TODO: TEXT COMING SOON.
    `
  },
]

export default WorkList