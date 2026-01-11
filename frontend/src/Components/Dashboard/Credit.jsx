const Credit = () => {
  return (
    <div className="p-5 bg-white rounded-xl shadow text-center">
      <h3 className="text-lg font-semibold">Credit</h3>
      <div>
        <input className="m-3 border-2 border-green-400 outline-0 p-3 rounded-xl" type="number" name="credit" id="" />
      </div>
      <button className="bg-green-400 p-5 pl-7 pr-7 text-white rounded-xl cursor-pointer">+</button>
    </div>
  )
}

export default Credit