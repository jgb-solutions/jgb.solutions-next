import React from "react"

import MainLayout from '../components/layouts/Main'
import SEO from "../components/SEO"

const title = "Some Of Our Recent Works"
const IndexPage = () => (
  <MainLayout>
    <SEO title={title} />
    <div>
      <div>
        {/* <img
          src="../images/jgb-cartoon.png"
          style={{
            maxWidth: "100%",
            borderBottomRightRadius: "150px",
            borderBottomLeftRadius: "150px",
          }}
          alt="logo"
        /> */}
      </div>
      <div>
        {/* <h1 class="display-3">Who I Am</h1> */}
        <p>
          <p>
            My name is Jean Gérard Bousiquot, a Software Developer from Delmas,
            Haiti. This website is the home for my business,{" "}
            <span>JGB Solutions</span>, where I offer Web, Mobile and other
            software development services.
          </p>
          <p>
            I've been developing for the web for a few years now. And about 2+
            years worth of experience in mobile development.
          </p>
          <p>
            I'm proficient in PHP, JavaScript and TypeScript. PHP mainly for web
            applications, APIs and other kind of web services. Laravel is my
            go-to web framwork. JavaScript and TypeScript for web front-ends and
            hybrid mobile applications. Angular, Vue and React, Ionic, React
            Native are some of the tools I use. And Node is often used as a
            build tool locally, even though I'm learning it thoroughly in order
            to use it as a web application framework.
          </p>

          <p>
            I've been into computers for about 13 years now. So before
            development I've been dabbling with various computer related stuff
            such as graphic design, computer repair and more.
          </p>
          <p>
            Beside computers I like surfing the internet, playing NES video
            games, watching movies, TV shows and listening to music.
          </p>
          <p>
            I also love to read books and articles, but mainly techninal ones;
            speak and write in 4 languages: Creole, French, English and a little
            bit of Spanish.
          </p>
        </p>     </div>
    </div>
  </MainLayout>
)

export default IndexPage
