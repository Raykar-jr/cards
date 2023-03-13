import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, FC } from 'react'

import s from './SuperSelectTable.module.scss'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[]
  onChangeOption?: (option: any) => void
}

export const SuperSelectTable: FC<SuperSelectPropsType> = ({ options, onChange, onChangeOption, ...restProps }) => {
  const mappedOptions: any[] = options
    ? options.map(el => (
        <option id={el.id} key={el.id} value={el.id}>
          {el.value}
        </option>
      ))
    : []
  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e)
    onChangeOption?.(e.currentTarget.value)
  }

  return (
    <select onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  )
}

// export const SuperSelectTable=()=>{
//   return(
//     <FormControl fullWidth>
//       <InputLabel id="demo-simple-select-label">page</InputLabel>
//       <Select
//         labelId="demo-simple-select-label"
//         id="demo-simple-select"
//         value={age}
//         label="5"
//         onChange={handleChange}
//       >
//         <MenuItem value={10}>10</MenuItem>
//         <MenuItem value={20}>20</MenuItem>
//         <MenuItem value={30}>30</MenuItem>
//       </Select>
//     </FormControl>
//   )
// }
