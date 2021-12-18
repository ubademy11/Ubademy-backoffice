import React from 'react';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SchoolIcon from '@material-ui/icons/School';
import BarChartIcon from '@material-ui/icons/BarChart';

export const SidebarItems = [
    {
        title: "Metrics",
        icon: <BarChartIcon />,
        link: "/metrics"
    },
    {
        title: "Users",
        icon: <PeopleAltIcon />,
        link: "/users"
    },
    {
        title: "Courses",
        icon: <SchoolIcon />,
        link: "/courses"
    }
]