import { FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import React from 'react'

export default function FilterSelect({ filterName, labelName, filterData, filter, setFilter }) {
    
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
                border={'1px solid white'}
                borderRight={'none'}
                borderRadius={'12px 0px 0px 12px'}
            >
                <Typography color={'text.primary'}>
                    {filterName}
                </Typography>
            </Stack>
            <FormControl
                sx={{
                    height: '44px',
                    width: '250px',
                    '& .MuiInputBase-root': {
                        height: '100%', // Pastikan Select mengisi seluruh tinggi FormControl
                    },
                }}
            >
                <InputLabel
                    shrink={false}
                    sx={{
                        color: 'text.primary',
                        top: '50%', // Posisikan label di tengah secara vertikal
                        transform: 'translateY(-50%)', // Geser label ke atas untuk benar-benar berada di tengah
                        left: '14px', // Berikan padding kiri sesuai dengan padding pada Select
                        '&.Mui-focused': {
                            color: 'text.primary',
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
                            color: 'text.primary',
                        },
                        '.MuiOutlinedInput-notchedOutline': {
                            borderColor: 'text.primary',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'text.primary',
                        },
                    }}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                bgcolor: '#262626',
                                borderRadius: '12px',
                                border: '1px solid white',
                                mt: '8px',
                            },
                        },
                        sx: {
                            "&& .Mui-selected": {
                                backgroundColor: "#262626"
                            },
                            color: 'text.primary',
                        }

                    }}
                >
                    {filterData?.map((data, index) => (
                        <MenuItem key={index} value={data} sx={{ color: 'text.primary' }}>
                            {data}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Stack>
    )
}
