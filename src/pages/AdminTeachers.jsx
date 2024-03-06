import React from 'react'
import AdminSideBar from '../components/AdminSideBar'
import Logo from '../images/logo.png'

const AdminTeachers = () => {
    return (
        <>
        <div className="AdminDashboard__container">
        <img className='AdminLogo' src={Logo} alt="logo" />
        </div>
        <AdminSideBar/>
        </>
      )
    }

export default AdminTeachers