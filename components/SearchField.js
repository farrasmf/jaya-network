"use client"
import { Cancel, Search } from '@mui/icons-material';
import { FormControl, Input, InputAdornment, InputLabel, Stack } from '@mui/material'
import React from 'react'

export default function SearchField({ title, onSearch, searchValue }) {
    return (
        <Stack width={"360px"}>
            <FormControl
                variant='standard'
                sx={{
                    height: '44px',
                    width: '100%',
                    '& .MuiInputBase-root': {
                        height: '100%', // Pastikan Select mengisi seluruh tinggi FormControl
                        alignItems: 'center',
                        mt: '0px',
                        px: '14px',
                    },
                    bgcolor: 'white',
                    borderRadius: '12px',
                }}
            >
                <InputLabel
                    shrink={false}
                    sx={{
                        color: 'text.secondary',
                        top: '50%', // Posisikan label di tengah secara vertikal
                        transform: 'translateY(-50%)', // Geser label ke atas untuk benar-benar berada di tengah
                        left: '14px', // Berikan padding kiri sesuai dengan padding pada Select
                        '&.Mui-focused': {
                            color: 'text.secondary',
                        },
                    }}
                >
                    {!searchValue ? `Cari ${title}` : ""}
                </InputLabel>

                <Input
                    disableUnderline={true}
                    value={searchValue}
                    onChange={e => onSearch(e.target.value)}
                    sx={{
                        border: '1px solid black',
                        borderRadius: '12px',
                        color: 'text.secondary',
                    }}
                    startAdornment={searchValue && (
                        <Cancel
                            onClick={() => {
                                onSearch("")
                            }}
                            sx={{
                                fontSize: 14,
                                color: "black",
                                cursor: "pointer",
                                transform: "translateX(-4px)",
                                "&:hover": {
                                    color: "black",
                                },
                            }}
                        />
                    )}
                    endAdornment={
                        <InputAdornment position="end">
                            <Search />
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Stack>
    )
}
