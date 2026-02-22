'use client'
import { ChangeEvent, useState, useContext } from "react"
import { UserContext } from "../Context/UserContext"
import type { User } from "../Context/UserContext"


const addUser = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [contact, setContact] = useState<string>("")
    const [modal, setModal] = useState<boolean>(false)
    const {add}: any = useContext(UserContext)

    const handleSave = () => {
        if (name && email && contact !== "") {
            const newUser: User = {
                id: Date.now(),
                name,
                email,
                contact,
            }
            add(newUser)
            setName("")
            setEmail("")
            setContact("")
            setModal(false)
            return;
        }
    }

  return (
    <div className="">
      <div>
        <button
          onClick={() => setModal((m) => !m)}
          className="bg-green-500 p-2 rounded-lg"
        >
          New User
        </button>
      </div>
      {modal && (
        <div className="fixed left-0 top-20 flex flex-col gap-4 w-sm inset-x-0 mx-auto bg-gray-400 py-10 px-5 rounded-lg">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            className="border focus:outline-0 p-2 text-center rounded-md"
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            className="border focus:outline-0 p-2 text-center rounded-md"
          />
          <input
            type="text"
            placeholder="Contact"
            value={contact}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setContact(e.target.value)
            }
            className="border focus:outline-0 p-2 text-center rounded-md"
          />
          <div className="flex gap-4 items-center justify-center text-white">
            <button onClick={handleSave} className="bg-green-500 px-5 py-2 rounded-lg">Save</button>
            <button
              onClick={() => setModal((m) => !m)}
              className="bg-gray-500 py-2 px-3 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default addUser