'use client'
import { useContext } from "react"
import { UserContext } from "../Context/UserContext"
import { useRouter } from "next/navigation"
const Users = () => {
    const { users, deleteUser }: any = useContext(UserContext)
    const navigate = useRouter()

  return (
    <div>
      <div className="p-4">
        {users.length > 0 ? (
          users.map((user: any) => (
            <div
              key={user.id}
              className="mb-2 flex  justify-between border mx-4 p-4 rounded-md"
            >
              <div onClick={() => navigate.push(`/users/${user.id}`)}>
                <div>{user.name}</div>
                <div>{user.email}</div>
              </div>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </div>
          ))
        ) : (
          <h1 className="text-center">No user added</h1>
        )}
      </div>
    </div>
  );
}

export default Users