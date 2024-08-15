import { Cancel } from '@mui/icons-material'
import { FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import React from 'react'

export default function FilterSelect({ filterName, labelName, filterData, filter, setFilter, onFilter }) {

    return (
        <Stack
            direction={'row'}
            width={'100%'}
            height={'44px'}
        >
            <Stack
                height={'44px'}
                width={'100px'}
                justifyContent={'center'}
                alignItems={'center'}
                border={'1px solid black'}
                borderRight={'none'}
                borderRadius={'12px 0px 0px 12px'}
            >
                <Typography color={'text.secondary'}>
                    {filterName}
                </Typography>
            </Stack>
            <FormControl
                sx={{
                    height: '44px',
                    width: '300px',
                    '& .MuiInputBase-root': {
                        height: '100%', // Pastikan Select mengisi seluruh tinggi FormControl
                    },
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
                    {!filter ? labelName : ""}
                </InputLabel>
                <Select
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                    displayEmpty
                    sx={{
                        borderRadius: '0px 12px 12px 0px',
                        '& .MuiSelect-icon': {
                            color: 'text.secondary',
                        },
                        '.MuiOutlinedInput-notchedOutline': {
                            borderColor: 'text.secondary',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'text.secondary',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'text.secondary',
                        },
                        '& .MuiSelect-select': {
                            color: 'text.secondary', 
                        },
                        '& .MuiSelect-select.MuiSelect-select': {
                            color: 'text.secondary',
                        },
                    }}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                borderRadius: '12px',
                                border: '1px solid black',
                                mt: '8px',
                            },
                        },
                        sx: {
                            "&& .Mui-selected": {
                                backgroundColor: "#8F8D8F"
                            },
                            color: 'text.secondary',
                        }
                    }}
                    startAdornment={ filter && (
                        <Cancel
                            onClick={() => {
                                setFilter("")
                            }}
                            sx={{
                                fontSize: 14,
                                color: "black",
                                cursor: "pointer",
                                transform: "translateX(-5px)",
                                "&:hover": {
                                    color: "black",
                                },
                            }}
                        />
                    )

                    }
                >
                    {filterData?.map((data, index) => (
                        <MenuItem key={index} value={data} sx={{ color: 'text.secondary' }}>
                            {data}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Stack>
    )
}
