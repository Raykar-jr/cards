import React from 'react'

import { NavLink } from 'react-router-dom'

import s from './ArrowBackToPacks.module.scss'

import vector from 'assets/images/vector.svg'
import { PATH } from 'common/path/path'

export const ArrowBackToPacks = () => {
  return (
    <div className={s.arrow}>
      <img src={vector} alt="vector icon" />
      <NavLink to={PATH.PACKS.PACKS}>Back to Packs List</NavLink>
    </div>
  )
}
