import { Box, Typography } from '@mui/material'
import React from 'react'

export default function PageDescription({ title, description }) {
    return (
        <Box
            display={"block"}
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: '51px',
                px: '110px',
            }}
        >
            <Typography
                fontSize={"52px"}
                fontWeight={"Bold"}
                color={"secondary.main"}
            >
                {title}
            </Typography>

            <Typography
                fontSize={"16px"}
                fontWeight={"Reguler"}
                color={"text.primary"}
                width={"450px"}
                textAlign={"justify"}
            >
                {description}
            </Typography>
        </Box>
    )
}
