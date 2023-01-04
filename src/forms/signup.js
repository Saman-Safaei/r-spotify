import * as Yup from 'yup'

export const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'The username must be at least 3 characters.')
    .required('Required.'),
  email: Yup.string().email("This isn't a valid email.").required('Required.'),
  password: Yup.string()
    .min(8, 'The Password must be at least 8 characters.')
    .required('Required.'),
  confirmPassword: Yup.string()
    .min(8, 'The Confirm Password must be at least 8 characters.')
    .oneOf([Yup.ref('password'), null], "The password dosen't match.")
    .required('Required.'),
})

export const defaultValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}
