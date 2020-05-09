import React from 'react'

import { WorkInterFace } from '../pages/work/[slug]'
import Icon from './Icon'

export default function WorkCard({ work }: { work: WorkInterFace }) {
  return (
    <div className="shadow-md bg-orange text-dark rounded-large overflow-hidden">
      <img src={`/assets/images/screenshots/${work.image}`} />
      <div className="p-4">
        <h3 className="flex items-center text-2xl uppercase mb-3">
          <Icon type={work.type} /> <span className="ml-2">{work.name}</span>
        </h3>
      </div>
    </div>
  )
}