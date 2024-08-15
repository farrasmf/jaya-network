import { Button } from '@mui/material'
import React from 'react'

export default function ButtonHeader({ title, active, path }) {
    return (
        <Button
            variant={active ? "contained" : "text"}
            sx={{
                mr: "10px",
                color: active ? "text.secondary" : "text.primary",
                height: "36px",
                px: "20px",
                py: "5px",
                borderRadius: "16px",
                fontSize: "16px",
                fontWeight: "Reguler",
                '&.MuiButton-contained': {
                    bgcolor: "secondary.main",
                    color: "text.secondary",
                }
            }}
            href={path}
        >
            {title}
        </Button>
    )
}
