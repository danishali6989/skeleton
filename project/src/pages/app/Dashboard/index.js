import React from 'react'
import { getAllFeedThunk } from "generic";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();

  const fetchData=async()=>{
    await dispatch(getAllFeedThunk())
  }
  return (
    <div>Dashboard Page
      <button onClick={fetchData}></button>
    </div>
  )
}

export default Dashboard