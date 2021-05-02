import React from "react";

import { Tooltip } from "..";
import { withRouter } from "react-router-dom";

import logo from '../../assets/logo.jpg'

import { Sidebar, Avatar, Button, Nav } from "grommet";
import {
  Group,
  UserAdd,
  Car,
  CircleQuestion,
  List,
  UserAdmin,
  Edit,
} from "grommet-icons";

import "./styles.scss";
import { isAdmin } from "../../utils/Auth";

const SidebarNavigation = ({ history }) => {
  const handleNavigate = (path) => history.push(path);
  const userIsAdmin = isAdmin()
  return (
    <div className="sidebar-container">
      <Sidebar
        className="sidebar"
        background="brand"
        round="small"
        header={
          <Avatar src={logo} />
        }
        footer={
          <Tooltip message="Ayuda">
            <Button
              className="nav-button"
              icon={<CircleQuestion />}
              hoverIndicator
            />
          </Tooltip>
        }
      >
        <Nav gap="small">
          <Tooltip message="Nuevo Cliente">
            <Button
              className="nav-button"
              onClick={() => handleNavigate("/customer")}
              icon={<UserAdd />}
              hoverIndicator
            />
          </Tooltip>
          <Tooltip message="Lista de Clientes">
            <Button
              className="nav-button"
              onClick={() => handleNavigate("/customers-list")}
              icon={<Group />}
              hoverIndicator
            />
          </Tooltip>
          <Tooltip message="Nuevo Auto">
            <Button
              className="nav-button"
              onClick={() => handleNavigate("/car")}
              icon={<Car />}
              hoverIndicator
            />
          </Tooltip>
          <Tooltip message="Lista de Autos">
            <Button
              className="nav-button"
              onClick={() => handleNavigate("/car/list")}
              icon={<List />}
              hoverIndicator
            />
          </Tooltip>
          {userIsAdmin && (
            <Tooltip message="Nuevo Usuario">
              <Button
                className="nav-button"
                onClick={() => handleNavigate("/sign-up")}
                icon={<UserAdmin />}
                hoverIndicator
              />
            </Tooltip>
          )}
        </Nav>
      </Sidebar>
    </div>
  );
};

SidebarNavigation.parameters = {
  chromatic: { disable: true },
};

export default withRouter(SidebarNavigation);
