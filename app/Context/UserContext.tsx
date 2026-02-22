'use client'
import { useState, useEffect, createContext, useContext } from "react"

export interface User {
    id: number;
  name: string;
  email: string;
  contact: string;
}

interface UserContext{
    users: User[] 
    add: (user: User) => void
    deleteUser: (id: number) => void
}

interface Props{
    children: React.ReactNode
}

export const UserContext = createContext<UserContext | null>(null)

export const UserProvider = (props: Props) => {
    const [users, setUsers] = useState<User[] | []>([])

    const add = (user: User) => {
        const addUsers = users ? [...users, user]: [user];
        setUsers(addUsers)
        localStorage.setItem("users", JSON.stringify(addUsers))    
    }

    const deleteUser = (id: number) => {
        const deleteUser = users.filter((user: any) => user.id !== id);
        setUsers(deleteUser)
        localStorage.removeItem("users")
    }

    useEffect(() => {
        const savedUser = localStorage.getItem("users") 
        if (savedUser) {
            setUsers(JSON.parse(savedUser))
        }
    }, [])
    
    return (
        <UserContext.Provider value={{users: users, add, deleteUser}}>
            {props.children}
        </UserContext.Provider>
    )
}
