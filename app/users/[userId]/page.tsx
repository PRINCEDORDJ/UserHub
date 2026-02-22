'use client'
import { useParams } from "next/navigation";
import { UserContext } from "@/app/Context/UserContext";
import { useContext } from "react";

const UserId = () => {
    const {userId} = useParams()
    const { users }: any  = useContext(UserContext)
    const user = users.find((u:any)=>u.id=== Number(userId))

    return (
        <div className="p-5">
        <button onClick={()=>{window.location.href = "/"}}>Back</button>
        <h1>User Information </h1>
            <div className="flex flex-col items-center text-white inset-x-0 mx-auto bg-violet-600 max-w-md">
                <h1 className="text-3xl font-bold">{ user.name}</h1>
                <p>{user.email}</p>
                <p>{user.contact}</p>
        </div>
      </div>
    );
}

export default UserId