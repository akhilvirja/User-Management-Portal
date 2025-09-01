import { Description } from '@radix-ui/react-alert-dialog'
import * as Yup from 'yup'

export const userSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please Enter Your Name"),
    email: Yup.string().email().required("Please Enter Your Email Address"),
    phone_no: Yup.string().min(10).max(10).required("Please Enter Your Phone No"),
    date_of_birth: Yup.string().required("Please Enter Your Date Of Birth"),
    department: Yup.string().required("Please Enter Your Department"),
    joining_date: Yup.string().required("Please Enter Your joining Date")
})


export const eventSchema = Yup.object({
    title: Yup.string().max(50, 'Max 50 characters').matches(/^[a-zA-z0-9 ]+$/, 'Only AlphaNumeric and spaces are allowed').required('Event Title is required'),
    description: Yup.string().max(5000, 'Max 5000 characters')
})