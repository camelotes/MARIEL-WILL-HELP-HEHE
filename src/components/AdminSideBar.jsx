import React from 'react'
import { AdminSideBarMenu } from './AdminSideBarMenu'

function AdminSideBar() {
    return (
        <div className='AdminSidebar'>
        <ul className='AdminSidebarlist'>
        {AdminSideBarMenu.map((val, key) =>{
        return (
            <li 
                key={key} 
                className='row'
                id={window.location.pathname == val.link ? "active" : ""}
                onClick={() => {
                    window.location.pathname = val.link
                    }}
            >
            <div id='icon'>{val.icon}</div> <div id='title'>{val.title}</div>
        </li>
        )
    })}
    </ul>
    </div>
    );
}
   
export default AdminSideBar