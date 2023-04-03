import React from 'react'

import sortDownIcon from 'assets/icons/arrow_down.svg'
import sortUpIcon from 'assets/icons/arrow_up.png'

// icons
const downIcon = sortDownIcon
const upIcon = sortUpIcon

type PropsType = {
  sort: string
  value: string
  onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
  return sort === up ? down : up
}

export const Sort: React.FC<PropsType> = ({ sort, value, onChange }) => {
  const up = '1' + value
  const down = '0' + value

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up))
  }

  const icon = sort === up ? upIcon : downIcon

  return (
    <span onClick={onChangeCallback}>
      <img src={icon} style={{ width: '10px', height: '10px' }} alt="Sort icon" />
    </span>
  )
}
