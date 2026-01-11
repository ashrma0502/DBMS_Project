import Greetings from "./Components/Dashboard/Greetings"
import Debit from "./Components/Dashboard/Debit"
import Latest from "./Components/Dashboard/Latest"
import History from "./Components/Dashboard/History"

const Dashboard = () => {
  return (
    <>
      <div className="p-5 space-y-5 bg-blue-900 w-screen h-screen">
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