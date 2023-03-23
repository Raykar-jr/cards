import React from 'react'

import { Radio, RadioGroup } from '@mui/material'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'

import { common_button } from 'common/styles/LoginStyles'

const grades = ['Did not know', 'forgot', 'A lot of thought', 'Confused', 'Knew the answer']

export const Answer = () => {
  return (
    <>
      <p>
        <b>Answer: </b>
        {}
      </p>
      <form onSubmit={() => {}} style={{ marginTop: '1rem' }}>
        <FormLabel style={{ color: 'black' }}>Rate yourself:</FormLabel>
        <RadioGroup defaultValue="1">
          {grades.map((grade, index) => (
            <FormControlLabel key={index} value={index + 1} control={<Radio />} label={grade} />
          ))}
        </RadioGroup>
        <Button
          onClick={() => {}}
          color="primary"
          variant="contained"
          style={common_button}
          sx={{ mt: '2rem', width: '100%' }}
        >
          Next
        </Button>
      </form>
    </>
  )
}
