import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger,AlertDialog, AlertDialogFooter, AlertDialogHeader } from "./ui/alert-dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useDispatch } from 'react-redux'
import { updateUser } from '@/features/users/userSlice'
import { useFormik } from 'formik'
import { UserPen } from 'lucide-react'


function UpdateUser({data}) {
    const dispatch = useDispatch()
    const initialValues = {
        name: data.name,
        email: data.email,
        phone_no: data.phoneNo,
        date_of_birth: data.dateOfBirth,
        department: data.department,
        joining_date: data.joiningDate,
    }

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
      initialValues,
      onSubmit: (values,action) => {
          console.log(values)
          dispatch(updateUser({...values, id: data.id}))
          action.resetForm()
      }
  })

  const handleUpdate = () =>{
    console.log(values)
        dispatch(updateUser({...values, id: data.id}))
  }

  return (
    <AlertDialog >
        <AlertDialogTrigger asChild>
            <button variant="outline" className='relative bottom-15 left-30 border-2 w-10 flex justify-center p-2 rounded-md transition duration-400 hover:bg-blue-500 hover:text-white' ><UserPen/></button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Update {data.name}</AlertDialogTitle>
                <AlertDialogDescription>
                    <form className="px-7" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-3">
                                <Label htmlFor="name" className="flex-1/6">NAME:</Label>
                                <div className = "flex-5/6">
                                    <Input
                                        type = "text"
                                        id = "name"
                                        placeholder = "Name"
                                        name = "name"
                                        value = {values.name}
                                        onChange = {handleChange}
                                        onBlur = {handleBlur}
                                        required
                                    />
                                    {
                                        errors.name && touched.name ?
                                        (<p className="text-xs text-[#b22b27]">{errors.name}</p>)
                                        : null
                                    }
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Label htmlFor="email" className="flex-1/6">EMAIL:</Label>
                                <div className="flex-5/6">
                                    <Input
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        name="email"
                                        value= {values.email}
                                        onChange = {handleChange}
                                        onBlur = {handleBlur}
                                        required
                                        />
                                    {
                                        errors.email && touched.email ?
                                        (<p className="text-xs text-[#b22b27]">{errors.email}</p>)
                                        : null
                                    }
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Label htmlFor="phoneNo" className="flex-1/6">PHONE NO:</Label>
                                <div className="flex-5/6">
                                    <Input 
                                        className="flex-5/6"
                                        type="text"
                                        id="phoneNo"
                                        placeholder="Phone No"
                                        name="phone_no"
                                        value= {values.phone_no}
                                        onChange = {handleChange}
                                        onBlur = {handleBlur}
                                        required
                                    />
                                    {
                                        errors.phone_no && touched.phone_no ?
                                        (<p className="text-xs text-[#b22b27]">{errors.phone_no}</p>)
                                        : null
                                    }
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Label htmlFor="dateOfBirth" className="flex-1/6">DATE OF BIRTH:</Label>
                                <div className="flex-5/6">
                                    <Input
                                        className="flex-5/6"
                                        type="text"
                                        id="dateOfBirth"
                                        placeholder="Date Of Birth"
                                        name="date_of_birth"
                                        value= {values.date_of_birth}
                                        onChange = {handleChange}
                                        onBlur = {handleBlur}
                                        required
                                    />
                                    {
                                        errors.date_of_birth && touched.date_of_birth ?
                                        (<p className="text-xs text-[#b22b27]">{errors.date_of_birth}</p>)
                                        : null
                                    }
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Label htmlFor="department" className="flex-1/6">DEPARTMENT:</Label>
                                <div className="flex-5/6">
                                    <Input
                                        className="flex-5/6"
                                        type="text"
                                        id="department"
                                        placeholder="Department"
                                        name="department"
                                        value= {values.department}
                                        onChange = {handleChange}
                                        onBlur = {handleBlur}
                                        required
                                    />
                                    {
                                        errors.department && touched.department ?
                                        (<p className="text-xs text-[#b22b27]">{errors.department}</p>)
                                        : null
                                    }
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Label htmlFor="joiningDate" className="flex-1/6">JOINING DATE:</Label>
                                <div className="flex-5/6">
                                    <Input
                                        className="flex-5/6"
                                        type="text"
                                        id="joiningDate"
                                        placeholder="Joining Date"
                                        name="joining_date"
                                        value= {values.joining_date}
                                        onChange = {handleChange}
                                        onBlur = {handleBlur}
                                        required
                                    />
                                    {
                                        errors.joining_date && touched.joining_date ?
                                        (<p className="text-xs text-[#b22b27]">{errors.joining_date}</p>)
                                        : null
                                    }
                                </div>
                            </div>
                        </div>
                    </form>
                    

                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleUpdate}>Update</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default UpdateUser