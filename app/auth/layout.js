"use client"
import { Box } from '@mui/material'
import React from 'react'

export default function Layout({ children }) {
    return (
        <Box
            bgcolor={'#262626'}
            sx={{
                height: '100vh',
                width: '100%',
                overflow: 'hidden',
            }}
        >
            {children}
        </Box>
    )
}
