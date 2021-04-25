import { Box } from 'grommet';
import React from 'react'
import './styles.scss';

export default function Container({ children, ...props }) {
    return (
        <Box
            direction="row"
            background="white"
            pad="medium"
            className="Container"
            pad={'medium'}
            overflow="auto"
            {...props}
        >
            {children}
        </Box>
    )
}
