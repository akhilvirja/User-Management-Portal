import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import DeleteUser from './deleteUser'
import UpdateUser from './UpdateUser'

function UserCard({userData}) {
  return (
    <div className='hover:scale-101 transition-all'>
        <Card className="h-90 hover:shadow-blue-300" >
            <CardHeader>
                <CardTitle className="text-2xl">{userData.name}</CardTitle>
                <CardDescription>{userData.email}</CardDescription>
                <UpdateUser data={userData} />
                <DeleteUser id={userData.id} />
            </CardHeader>
            <CardContent className="relative bottom-20">
                 <div className="flex flex-col gap-6">

                            <div className="flex gap-3">
                                <h6 className="flex-1/6">PHONE NO:</h6>
                                <p>{userData.phoneNo}</p>
                            </div>

                            <div className="flex gap-3">
                                <h6 className="flex-1/6">DATE OF BIRTH:</h6>
                                <p>{userData.dateOfBirth}</p>
                            </div>

                            <div className="flex gap-3">
                                <h6 className="flex-1/6">DEPARTMENT:</h6>
                                <p>{userData.department}</p>
                            </div>

                            <div className="flex gap-3">
                                <h6 className="flex-1/6">JOINING DATE:</h6>
                                <p>{userData.joiningDate}</p>
                            
                            </div>
                        </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default UserCard