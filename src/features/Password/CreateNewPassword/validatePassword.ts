import * as Yup from 'yup'

export const validatePass = Yup.object().shape({
  password: Yup.string().min(7, 'Password must be at least 7 characters').required('Required field'),
})
