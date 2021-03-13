import React from 'react'
import { Sidebar, Avatar, Button, Nav, Tip } from 'grommet';
import { Icon } from 'react-icons-kit'

import { Group, UserAdd, Car, CircleQuestion } from 'grommet-icons';

import './styles.scss'
import { Tooltip } from '..';
import { withRouter } from "react-router-dom";

const SidebarNavigation = ({ history }) => {
    const handleNavigate = path => history.push(path)
    return (
        <div className="sidebar-container">
            <Sidebar
                className="sidebar"
                background="brand"
                round="small"
                header={
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtUfxmCw61u_2YrfwhAwTjpi51I3nxOgRkA&usqp=CAU" />
                }
                footer={
                    <Tooltip message="Ayuda">
                        <Button className="nav-button" icon={<CircleQuestion />} hoverIndicator />
                    </Tooltip>
                }
            >
                <Nav gap="small">
                    <Tooltip message="Nuevo cliente">
                        <Button className="nav-button" onClick={() => handleNavigate('/customer')} icon={<UserAdd />} hoverIndicator />
                    </Tooltip>
                    <Tooltip message="Lista de clientes">
                        <Button className="nav-button" onClick={() => handleNavigate('/customerslist')} icon={<Group />} hoverIndicator />
                    </Tooltip>
                    <Tooltip message="Nuevo auto">
                        <Button className="nav-button" onClick={() => handleNavigate('/car')} icon={<Car />} hoverIndicator />
                    </Tooltip>
                </Nav>
            </Sidebar>
        </div>
    )
}

SidebarNavigation.parameters = {
    chromatic: { disable: true },
};

export default withRouter(SidebarNavigation)