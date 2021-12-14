import React, { FC } from 'react'

import Icon from './Icon'
import Image from './Image'
import { DOMAIN } from '../utils/constants'
import { WorkInterFace } from '../../interfaces'

type Props = { work: WorkInterFace }

const WorkCard: FC<Props> = ({ work }) => {
  return (
    <div className="shadow-md bg-orange text-dark rounded-large overflow-hidden">
      {process.env.NODE_ENV === 'development' ? (
        <img src={`/assets/images/screenshots/${work.image}`} />
      ) : (
        <Image
          src={`${DOMAIN}/assets/images/screenshots/${work.image}`}
          photon={{
            width: 743,
          }}
          alt={work.name}
        />
      )}
      <div className="p-4">
        <h3 className="flex items-center text-2xl uppercase mb-3">
          <Icon type={work.type} /> <span className="ml-2">{work.name}</span>
        </h3>
      </div>
    </div>
  )
}

export default WorkCard
