import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CampaignIcon from '@mui/icons-material/Campaign';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

export const AdminSideBarMenu = [
    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        link: "/AdminDashboard"
    },
    {
        title: "Announcements",
        icon: <CampaignIcon/>,
        link: "/AdminAnnouncements"
    },
    {
        title: "Events",
        icon: <EventIcon/>,
        link: "/AdminEvents"
    },
    {
        title: "Articles",
        icon: <ArticleIcon/>,
        link: "/AdminArticles"
    },
    {
        title: "Teachers",
        icon: <AssignmentIndIcon/>,
        link: "/AdminTeachers"
    },
]
  