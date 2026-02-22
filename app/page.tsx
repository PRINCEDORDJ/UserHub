import AddUser from "./component/addUser"
import Users from "./users/page"

const Home = () => {
  return (
    <div className="">
      <div className="flex justify-between p-4">
        <h1 className="font-bold text-2xl">UserHub</h1>
        <AddUser />
      </div>
      <Users />
    </div>
  )
}

export default Home