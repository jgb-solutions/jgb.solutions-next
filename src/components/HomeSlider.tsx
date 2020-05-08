import React from "react"
import Slider from "react-animated-slider"

import ServiceList from "../data/ServiceList"
import Link from "next/link"

export default () => (
  <Slider
    autoplay={2000}
    touchDisabled={false} classNames={{}}>
    {ServiceList.map((item, index) => (
      <div className="" key={index} style={{ background: `url('${item.image}') no-repeat center`, }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-between items-end py-3 pr-3 text-white">
          <h2 className="sm:text-5xl text-lg font-bold uppercase bg-dark rounded-large px-6 py-1">{item.title}</h2>

          <Link href="/contact?subject='Request a Quote">
            <a className="bg-orange text-lg sm:p-6 p-3 rounded-large text-black sm:text-2xl font-bold uppercase focus:outline-none focus:shadow-outline">
              Request a Quote
            </a>
          </Link>
        </div>
      </div>
    ))}
  </Slider>
)
