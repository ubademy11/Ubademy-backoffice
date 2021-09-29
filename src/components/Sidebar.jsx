import React from 'react';
import { Link } from 'react-router-dom';
import {SidebarItems} from "./SidebarItems.jsx";

class Sidebar extends React.Component{
    render() {
        return(
            <div className={this.props.className}>
                <ul className="SidebarList">
                    {SidebarItems.map((item, key) => {
                        return (
                            <li key={key} className="SidebarItem">
                                <Link className="ItemLink" to={item.link}>
                                    <div className="ItemIcon">{item.icon}</div>
                                    <div className="ItemTitle">{item.title}</div>
                                </Link>
                                
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default Sidebar;