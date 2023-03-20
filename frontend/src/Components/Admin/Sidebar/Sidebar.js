import React, { useState } from "react";
import "./SideBar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {FiUsers} from 'react-icons/fi'

function Sidebar({ children }) {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();


    const adminMenu = [
        {
            name: "All Users",
            path: "/admin",
            icon: 'ri-user-3-line',
        },
        {
            name: "New Applications",
            path: "/admin/applications",
            icon: "ri-file-list-3-line",
        },
        {
            name: "Pending Applications",
            path: "/admin/pending",
            icon: "ri-file-warning-line", 
        },
        {
            name: "Approved Applications",
            path: "/admin/approved",
            icon: "ri-file-user-line",
        },
        {
            name : "Add slots",
            path : "/admin/addSlot",
            icon: "ri-file-user-line",
        }
    ];

    return (
        <div className="main">
            <div className="d-flex layout">
                <div className="sidebar">
                    <div className="sidebar-header">
                        <h1 className="logo">Catalyst</h1>
                    </div>

                    <div className="menu">
                        {adminMenu.map((menu) => { 
                            const isActive = location.pathname === menu.path;
                            return (
                                <div
                                    className={`d-flex menu-item ${isActive && "active-menu-item"
                                        }`}
                                >
                                    <i className={menu.icon}></i>
                                    {!collapsed && <Link to={menu.path}>{menu.name}</Link>} 
                                </div>
                            );
                        })}
                        <div
                            className={`d-flex menu-item `}
                            onClick={() => {
                                localStorage.clear();
                                navigate("/login"); 
                            }}
                        >
                            <i className="ri-logout-circle-line"></i>
                            {!collapsed && <Link to="/login">Logout</Link>}
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="header">
                        {collapsed ? (
                            <i
                                className="ri-menu-2-fill header-action-icon"
                                onClick={() => setCollapsed(false)}
                            ></i>
                        ) : (
                            <i
                                className="ri-close-fill header-action-icon"
                                onClick={() => setCollapsed(true)} 
                            ></i>
                        )}

                        <div className="d-flex align-items-center px-4">
                        {/* <Badge
                            count='0'
                            onClick={() => navigate("/notifications")}
                        >
                            <i className="ri-notification-line header-action-icon px-3"></i>
                        </Badge> */}
                    </div>
                    </div>

                    <div className="body">{children}</div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar 