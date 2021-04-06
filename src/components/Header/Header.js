import { Paragraph, Menu, Header as GrommetHeader } from 'grommet';
import React, { useContext } from 'react';
import { AppContext } from '../../context';
import { logOut } from '../../utils/Auth';
import './styles.scss'

export default function Header() {
    const { title } = useContext(AppContext);
    return (
        <GrommetHeader background="white" className="header">
            <Paragraph margin="none">
                {/* TODO: Iconito */}
                {title}
            </Paragraph>

            <div className="user-avatar">
                <Menu label="Martinez Rent a Car" items={[{ label: "Ajustes" }, { label: 'Cerrar Sesion', onClick: logOut }]} />
            </div>
        </GrommetHeader>
    )
}
