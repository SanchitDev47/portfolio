import { Box, Typography } from '@mui/material';
import React, { ReactNode } from 'react'

export type SubHeaderProps = {
    children: ReactNode;
}
export default function SubHeader(props: SubHeaderProps) {
    return (
        <Box sx={{ m: '100px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', }}>
                <Typography variant='h6' sx={{ mt: 5, fontSize: '35px', lineHeight: 2 }}>{props.children}</Typography>
                <Box sx={{ width: '6rem', height: '5.8px', borderRadius: '11px', background: '#20C5FA' }} />
            </Box>
        </Box>
    )
}
