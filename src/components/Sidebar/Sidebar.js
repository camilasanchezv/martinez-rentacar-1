import React from 'react'

import { Tooltip } from '..';
import { withRouter } from "react-router-dom";

import { Sidebar, Avatar, Button, Nav } from 'grommet';
import { Group, UserAdd, Car, CircleQuestion, List, UserAdmin, Edit } from 'grommet-icons';

import './styles.scss'

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
                    <Tooltip message="Nuevo Cliente">
                        <Button className="nav-button" onClick={() => handleNavigate('/customer')} icon={<UserAdd />} hoverIndicator />
                    </Tooltip>
                    <Tooltip message="Lista de Clientes">
                        <Button className="nav-button" onClick={() => handleNavigate('/customers-list')} icon={<Group />} hoverIndicator />
                    </Tooltip>
                    <Tooltip message="Nuevo Auto">
                        <Button className="nav-button" onClick={() => handleNavigate('/car')} icon={<Car />} hoverIndicator />
                    </Tooltip>
                    <Tooltip message="Lista de Autos">
                        <Button className="nav-button" onClick={() => handleNavigate('/cars-list')} icon={<List />} hoverIndicator />
                    </Tooltip>
                    <Tooltip message="Nuevo Usuario">
                        <Button className="nav-button" onClick={() => handleNavigate('/sign-up')} icon={<UserAdmin />} hoverIndicator />
                    </Tooltip>


                    <Tooltip message="Editar Auto">
                        <Button className="nav-button" onClick={() => handleNavigate('/car-edit')} icon={<Edit />} hoverIndicator />
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
