import { useNavigate } from "react-router";

const Logout = () => {

  let navigate = useNavigate();
  const logoutPage = () => {
    navigate('/')
    localStorage.removeItem('user_id')
  }
  return (
    <div className="bg-white rounded-xl flex justify-end p-3">
      <button onClick={logoutPage} className="bg-blue-700 text-white p-3 pl-5 pr-5 cursor-pointer rounded-xl">Logout</button>
    </div>
  )
}

export default Logout