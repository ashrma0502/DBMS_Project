import { useEffect, useState } from "react"
import Greetings from "./Components/Dashboard/Greetings"
import Debit from "./Components/Dashboard/Debit"
import Latest from "./Components/Dashboard/Latest"
import History from "./Components/Dashboard/History"
import Logout from "./Components/Dashboard/Logout"

const Dashboard = () => {
  const [userData, setUserData] = useState(null)
  const user_id = sessionStorage.getItem("user_id")
  useEffect(() => {
    if (!user_id) window.location.href = '/login'
    
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8000/user/${user_id}`)
        const data = await res.json()
        console.log(data)
        setUserData(data)
        // console.log(userData)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  
  }, [])
  return (
    <>
      <div className="p-5 space-y-5 bg-blue-900 w-screen h-screen">
        <Logout />
        <Greetings />
        <div className="m-auto">
          {/* <Credit /> */}
          <Debit />
        </div>
        <Latest />
        <History />
      </div>
    </>
  )
}

export default Dashboard