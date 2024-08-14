import { Button } from '@mui/material'
import React from 'react'

export default function ButtonHeader({ title, active, path }) {
    return (
        <Button
            variant={active ? "contained" : "text"}
            sx={{
                color: "white",
                height: "36px",
                px: "20px",
                py: "5px",
                borderRadius: "16px",
                fontSize: "16px",
                fontWeight: "Reguler",
            }}
            href={path}
        >
            {title}
        </Button>
    )
}
