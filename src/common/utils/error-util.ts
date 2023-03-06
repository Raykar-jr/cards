import axios, { AxiosError } from 'axios'
import { Dispatch } from 'redux'

import { setAppError } from 'app/app-reducer'

export const handleError = (e: unknown, dispatch: Dispatch) => {
  const err = e as Error | AxiosError<{ error: string }>

  if (axios.isAxiosError(err)) {
    const error = err.response?.data ? err.response.data.error : err.message

    dispatch(setAppError(error))
  } else {
    dispatch(setAppError(`Native error ${err.message}`))
  }
}
