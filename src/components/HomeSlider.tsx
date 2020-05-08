import React from "react"
import Slider from "react-animated-slider"

import ServiceList from "../data/ServiceList"

export default () => (
  <Slider autoplay={2000} touchDisabled={false} >
    {ServiceList.map((item, index) => (
      <div className="bg-cover bg-center" key={index} style={{ background: `url('${item.image}')`, }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-between items-end py-3 pr-3 text-white">
          <h2 className="sm:text-5xl text-lg font-bold uppercase bg-dark rounded-large px-6 py-1">{item.title}</h2>
          <button className="bg-orange text-lg sm:p-6 p-3 rounded-large text-black sm:text-2xl font-bold uppercase focus:outline-none focus:shadow-outline"
          >{item.button}</button>
        </div>
      </div>
    ))}
  </Slider>
)
