import React from 'react'
import {Outlet} from "react-router-dom"
import StudentHeader from './StudentHeader'

const StudentLayout = () => {
  return (
    <>
    <StudentHeader/>
        <Outlet/>
    </>
  )
}

export default StudentLayout