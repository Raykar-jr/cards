// import s from 'common/components/SuperSelectTable/SuperSelectTable.module.scss'
import s from './SuperSelectTable.module.scss'




export const SuperSelectTable=()=>{
  return(
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">page</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="5"
        onChange={handleChange}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </Select>
    </FormControl>
  )
}