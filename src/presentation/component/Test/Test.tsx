import React from 'react'

import SuperInputText from 'presentation/ui-generic/c1-SuperInputText/SuperInputText'
import SuperButton from 'presentation/ui-generic/c2-SuperButton/SuperButton'
import SuperCheckbox from 'presentation/ui-generic/c3-SuperCheckbox/SuperCheckbox'

type Props = {}

const Test: React.FC<Props> = () => {
  return (
    <div>
      <h1>Test</h1>
      <SuperInputText />
      <br />
      <SuperButton children={'Button'} />
      <br />
      <SuperCheckbox />
    </div>
  )
}

export default Test
