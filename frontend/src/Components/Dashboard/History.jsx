import React from 'react'
import { useState } from "react";

const History = () => {
  const [open, setOpen] = useState(false);
  return (
     <div className="bg-white shadow rounded-xl p-4">
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h3 className="text-lg font-semibold">Transaction History</h3>
        <span>{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <ul className="mt-3 text-sm space-y-1">
          <li>10 Jan - Sent ₹300 to Rahul</li>
          <li>09 Jan - Received ₹1500 from Dad</li>
          <li>08 Jan - Sent ₹200 to Akash</li>
        </ul>
      )}
    </div>
  
  )
}

export default History