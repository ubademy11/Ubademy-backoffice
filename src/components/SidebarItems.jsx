import React from 'react';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SchoolIcon from '@material-ui/icons/School';

export const SidebarItems = [
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