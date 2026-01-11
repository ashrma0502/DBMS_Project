import { useState } from "react"

const Debit = () => {
  const [empty, setEmpty] = useState('')
  const handleInp = () => {
    
  }
  return (
    <div className="p-5 bg-white rounded-xl shadow-2xl text-center ">
      <h3 className="text-lg font-semibold">Debit</h3>
      <div>
        <input className="m-3 border-2 border-red-400 outline-0 p-3 rounded-xl" type="number" />
      </div>
      <button onClick={handleInp} className="bg-red-400 p-5 pl-7 pr-7 text-white rounded-xl cursor-pointer">Pay</button>
    </div>
  )
}

export default Debit