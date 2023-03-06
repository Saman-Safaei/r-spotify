import * as Yup from 'yup'

export const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'The username must be at least 3 characters.')
    .required('Required.'),
  password: Yup.string()
    .min(8, 'The Password must be at least 8 characters.')
    .required('Required.'),
})

export const defaultValues = {
  username: '',
  password: '',
}
