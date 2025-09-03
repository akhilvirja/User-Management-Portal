import { setUserLoggedOut } from '@/features/users/registeredUsers'
import { FormInputIcon, UserPlus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

function Navbar(){
    const currentUserDetails = useSelector(state => state.registeredUserReducer.currentUser)
    const dispatch = useDispatch()
    return(
        <>
            <div className='flex justify-between'>
                <div className="h-15 flex items-center mb-3 text-3xl ml-7 text-blue-900">
                    Welcome {currentUserDetails?.username}
                </div>
                <div className="h-15 flex justify-end mb-3">
                    <Link to="/event">
                        <button className="rounded-2xl border flex justify-center items-center gap-2.5 mr-35 m-4 p-3 bg-blue-500 text-white"><FormInputIcon height={15} className=' inline-block'/> Event Form</button>
                    </Link>
                    <Link to={"/users/add"} >
                        <button className="rounded-2xl border flex justify-center items-center gap-2.5 mr-35 m-4 p-3 bg-blue-500 text-white"><UserPlus height={15} className=' inline-block'/> Add User</button>
                    </Link>
                    <div>
                        <button onClick={() =>{
                            dispatch(setUserLoggedOut())
                        }} className="rounded-2xl border flex justify-center items-center gap-2.5 mr-35 m-4 p-3 bg-red-500 text-white">Logout</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar