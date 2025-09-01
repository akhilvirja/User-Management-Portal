import { useSelector } from "react-redux"
import UserCard from "./UserCard"

const UserListing = () =>{
    const users = useSelector(state => state.userReducer.users)
    return(
        <>
            <div className="flex flex-wrap m-7 mx-20 gap-16">
                {
                    users.map((user) => <UserCard key={user.id} userData={user} />)
                }
            </div>

        </>
    )
}

export default UserListing