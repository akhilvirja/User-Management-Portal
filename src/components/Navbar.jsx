import { FormInputIcon, UserPlus } from 'lucide-react'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <>
            <div className="h-15 flex justify-end mb-3">
                <Link to="/event">
                    <button className="rounded-2xl border flex justify-center items-center gap-2.5 mr-35 m-4 p-3 bg-blue-500 text-white"><FormInputIcon height={15} className=' inline-block'/> Event Form</button>
                </Link>
                <Link to={"/users/add"}>
                    <button className="rounded-2xl border flex justify-center items-center gap-2.5 mr-35 m-4 p-3 bg-blue-500 text-white"><UserPlus height={15} className=' inline-block'/> Add User</button>
                </Link>
            </div>
        </>
    )
}

export default Navbar