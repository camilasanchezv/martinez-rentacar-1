import React from 'react';
import { Box, Tip, Text } from 'grommet';
import './styles.scss';


const TipContent = ({ message }) => (
    <Box direction="row" align="center">
        <svg viewBox="0 0 22 22" version="1.1" width="22px" height="22px">
            <polygon
                fill="grey"
                points="6 2 18 12 6 22"
                transform="matrix(-1 0 0 1 30 0)"
            />
        </svg>
        <Box background="grey" direction="row" pad="small" round="xsmall">
            <Text color="#fff">{message}</Text>
        </Box>
    </Box>
);

export default function Tooltip({ children, message }) {
    return (
        <Tip dropProps={{ align: { left: 'right' } }}
            content={<TipContent message={message}/>}
            plain>
            {children}
        </Tip>
    )
}
