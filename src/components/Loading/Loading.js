import React, { useContext } from 'react';
import { Spinner } from 'grommet';
import './styles.scss'
import { AppContext } from '../../context';

export default function Loading() {
    const { loading } = useContext(AppContext);


    return (loading ? <div className="loading-container">
        <Spinner size={"small"} className="spinner" />
    </div> : null
    )
}
