import React from 'react'
import { Sidebar, Avatar, Button, Nav, Tip } from 'grommet';
import { Icon } from 'react-icons-kit'
import { ic_help_outline } from 'react-icons-kit/md/ic_help_outline'
import { ic_directions_car } from 'react-icons-kit/md/ic_directions_car'
import { ic_person_add } from 'react-icons-kit/md/ic_person_add'

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
                        <Button className="nav-button" icon={<Icon icon={ic_help_outline} />} hoverIndicator />
                    </Tooltip>
                }
            >
                <Nav gap="small">
                    <Tooltip message="Nuevo cliente">
                        <Button className="nav-button" onClick={() => handleNavigate('/customer')} icon={<Icon icon={ic_person_add} />} hoverIndicator />
                    </Tooltip>
                    <Tooltip message="Nuevo auto">
                        <Button className="nav-button" onClick={() => handleNavigate('/car')} icon={<Icon icon={ic_directions_car} />} hoverIndicator />
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