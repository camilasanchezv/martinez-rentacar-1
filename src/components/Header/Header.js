import { Paragraph, Menu, Header as GrommetHeader } from "grommet";
import React, { useContext, useMemo, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../context";
import { getCurrentUser, logOut, getRoleByUser, isAdmin } from "../../utils/Auth";
import "./styles.scss";

export default function Header() {
  const history = useHistory();
  const handleNavigate = (path) => history.push(path);

  const [user, setUser] = useState();
  const { title } = useContext(AppContext);
  const getUser = async () => setUser(getCurrentUser());
  const userIsAdmin = useMemo(() => isAdmin(), [user])

  useEffect(() => {
    getUser();
  }, [])

  const adminMenuItems = []

  if (userIsAdmin) {
    adminMenuItems.push({ label: "Ajustes", onClick: () => handleNavigate("/settings") })
  }

  return (
    <GrommetHeader background="white" className="header">
      <Paragraph margin="none">
        {/* TODO: Iconito */}
        {title}
      </Paragraph>

      <div className="user-avatar">
        <Menu
          label={`${user?.firstName} (${getRoleByUser(user)})`}
          items={[
            ...adminMenuItems,
            { label: "Cerrar Sesion", onClick: logOut },
          ]}
        />
      </div>
    </GrommetHeader>
  );
}
