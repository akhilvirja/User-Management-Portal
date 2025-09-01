import { useDispatch } from "react-redux"
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger,AlertDialog, AlertDialogFooter, AlertDialogHeader } from "./ui/alert-dialog"
import { deleteUser } from "@/features/users/userSlice"
import { Trash } from "lucide-react"

const DeleteUser = ({ id }) =>{
    const dispatch = useDispatch()

    const handleDelete = () =>{
        dispatch(deleteUser({id}))
    }

    return(
        <>
            <AlertDialog >
                <AlertDialogTrigger asChild>
                    <button variant="outline" className='relative bottom-27.5 left-45 flex justify-center border-2 p-2 w-10 rounded-md hover:bg-red-500 hover:text-white transition duration-400' ><Trash /></button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are You Sure?</AlertDialogTitle>
                        <AlertDialogDescription>Do You Want To Delete User?</AlertDialogDescription>
                    </AlertDialogHeader>
                   <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} className="bg-red-500 hover:bg-red-500" >Delete</AlertDialogAction>
                   </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default DeleteUser