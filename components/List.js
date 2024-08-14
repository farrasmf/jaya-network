"use client"
import { SortIcon } from '@/assets/Svg'
import { Check } from '@mui/icons-material';
import { Box, Button, IconButton, ListItemIcon, Menu, MenuItem, MenuList, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function List({ listName }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [expandedIndex, setExpandedIndex] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleItemClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const dummyData = [
        {
            id: 1,
            name: "Resto Bu Rina",
            location: "Kemayoran, Jakarta Pusat",
            categories: "Restoran",
            angkatan: "2022",
            description:
                "Giulia's Chicago Style Pizzeria merupakan restoran rumahan yang mengusung tema western, dengan menu utamanya yaitu pizza tebal ala Chicago yang terlihat seperti pie. Giulia's Pizzeria sering membuka booth di berbagai event yang digemari anak muda.",
            address:
                "Jl. Bangka VIIIC No.20, RT.5/RW.12, Pela Mampang, Kec. Mampang Prpt., Jakarta, Daerah Khusus Ibukota Jakarta",
            hours: "10:30 - 21:00",
            phone: "0815 1917 1850",
        },
        {
            id: 2,
            name: "Resto Kojo",
            location: "Cipete, Jakarta Selatan",
            categories: "Restoran Keren",
            angkatan: "2016",
            description:
                "Makanannya enak pelayanannya lezat yummy",
            address:
                "Jl. Bangka VIIIC No.20, RT.5/RW.12, Pela Mampang, Kec. Mampang Prpt., Jakarta, Daerah Khusus Ibukota Jakarta",
            hours: "10:30 - 21:00",
            phone: "0815 1917 1850",
        },
        {
            id: 3,
            name: "Resto Kojo",
            location: "Cipete, Jakarta Selatan",
            categories: "Restoran Keren",
            angkatan: "2016",
            description:
                "Makanannya enak pelayanannya lezat yummy",
            address:
                "Jl. Bangka VIIIC No.20, RT.5/RW.12, Pela Mampang, Kec. Mampang Prpt., Jakarta, Daerah Khusus Ibukota Jakarta",
            hours: "10:30 - 21:00",
            phone: "0815 1917 1850",
        },
        {
            id: 4,
            name: "Resto Kojo",
            location: "Cipete, Jakarta Selatan",
            categories: "Restoran Keren",
            angkatan: "2016",
            description:
                "Makanannya enak pelayanannya lezat yummy",
            address:
                "Jl. Bangka VIIIC No.20, RT.5/RW.12, Pela Mampang, Kec. Mampang Prpt., Jakarta, Daerah Khusus Ibukota Jakarta",
            hours: "10:30 - 21:00",
            phone: "0815 1917 1850",
        },
        {
            id: 5,
            name: "Resto Kojo",
            location: "Cipete, Jakarta Selatan",
            categories: "Restoran Keren",
            angkatan: "2016",
            description:
                "Makanannya enak pelayanannya lezat yummy",
            address:
                "Jl. Bangka VIIIC No.20, RT.5/RW.12, Pela Mampang, Kec. Mampang Prpt., Jakarta, Daerah Khusus Ibukota Jakarta",
            hours: "10:30 - 21:00",
            phone: "0815 1917 1850",
        },
        {
            id: 6,
            name: "Resto Kojo",
            location: "Cipete, Jakarta Selatan",
            categories: "Restoran Keren",
            angkatan: "2016",
            description:
                "Makanannya enak pelayanannya lezat yummy",
            address:
                "Jl. Bangka VIIIC No.20, RT.5/RW.12, Pela Mampang, Kec. Mampang Prpt., Jakarta, Daerah Khusus Ibukota Jakarta",
            hours: "10:30 - 21:00",
            phone: "0815 1917 1850",
        },
    ]

    return (
        <>
            <Box
                component={Paper}
                sx={{
                    bgcolor: "white",
                    width: "360px",
                    height: "518px",
                    borderRadius: "12px",
                    overflow: "hidden",
                }}
            >
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignContent={'center'}
                    p={"16px"}
                    borderBottom={'1px solid black'}
                >
                    <Typography fontSize={"16px"} fontWeight={"Reguler"} color={"text.secondary"}>{listName}</Typography>
                    <IconButton
                        onClick={handleClick}
                        sx={{ width: "20px", height: "20px" }}
                        disableRipple={true}
                        aria-controls={open ? 'sort-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <SortIcon />
                    </IconButton>
                </Stack>
                <Stack
                    height={"100%"}
                    width={"100%"}
                    px={"26px"}
                    paddingTop={"18px"}
                    paddingBottom={"28px"}
                    gap={"10px"}
                    sx={{
                        overflow: "hidden",
                        overflowY: "scroll",
                    }}
                >
                    {/* List Start */}
                    {dummyData.map((item, index) => (
                        <Stack
                            key={item.id}
                            width={"100%"}
                            bgcolor={"primary.main"}
                            borderRadius={"12px"}
                            px={"20px"}
                            py={"14px"}
                            gap={"12px"}
                            sx={{
                                cursor: "pointer",
                            }}
                            onClick={() => handleItemClick(index)}
                        >
                            <Stack
                                direction={"row"}
                                justifyContent={"space-between"}
                            >
                                <Stack
                                    width={"42px"}
                                    height={"42px"}
                                    bgcolor={"white"}
                                    borderRadius={"21px"}
                                >

                                </Stack>
                                <Stack>
                                    <Typography fontWeight={"Bold"} fontSize={"14px"}>{item.name}</Typography>
                                    <Typography fontWeight={"Reguler"} fontSize={"10px"}>{item.location}</Typography>
                                    <Stack direction={"row"} gap={"8px"}>
                                        <Typography fontWeight={"Reguler"} fontSize={"10px"}>Kategori:</Typography>
                                        <Typography fontWeight={"Reguler"} fontSize={"10px"} color={"text.secondary"} bgcolor={"secondary.main"} borderRadius={"8px"} width={"80px"} align='center'>{item.categories}</Typography>
                                        <Typography fontWeight={"Reguler"} fontSize={"10px"} color={"text.secondary"} bgcolor={"secondary.main"} borderRadius={"8px"} width={"80px"} align='center'>{`HIPMI ${item.angkatan}`}</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>

                            {expandedIndex === index && (
                                <Stack gap={"8px"} width={"100%"}>
                                    <Stack direction={"row"} width={"100%"} height={"88px"} gap={"6px"}>
                                        <Stack bgcolor={"white"} borderRadius={"12px"} width={"88px"} height={"88px"} />
                                        <Stack bgcolor={"white"} borderRadius={"12px"} width={"88px"} height={"88px"} />
                                        <Stack bgcolor={"white"} borderRadius={"12px"} width={"88px"} height={"88px"} />
                                    </Stack>


                                    <Typography fontWeight={"Reguler"} fontSize={"10px"} align='justify'>
                                        Giulia's Chicago Style Pizzeria merupakan restoran rumahan yang mengusung tema western, dengan menu utamanya yaitu pizza tebal ala Chicago yang terlihat seperti pie. Giulia's Pizzeria sering membuka booth di berbagai event yang digemari anak muda.
                                    </Typography>

                                    <>
                                        <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
                                            <Typography fontWeight={"Reguler"} fontSize={"10px"}>Alamat</Typography>
                                            <Typography fontWeight={"Reguler"} fontSize={"10px"} align='justify' width={"160px"}>
                                                E Jl. Bangka VIIIC No.20, RT.5/RW.12, Pela Mampang, Kec. Mampang Prpt., Jakarta, Daerah Khusus Ibukota Jakarta
                                            </Typography>
                                        </Stack>
                                        <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
                                            <Typography fontWeight={"Reguler"} fontSize={"10px"} >Jam Operasional</Typography>
                                            <Typography fontWeight={"Reguler"} fontSize={"10px"} align='justify' width={"160px"}>
                                                10:30 - 21:00 0815 1917 1850
                                            </Typography>
                                        </Stack>
                                        <Stack direction={"row"} justifyContent={"space-between"}>
                                            <Typography fontWeight={"Reguler"} fontSize={"10px"} >Telepon</Typography>
                                            <Typography fontWeight={"Reguler"} fontSize={"10px"} align='justify' width={"160px"}>
                                                0815 1917 1850
                                            </Typography>
                                        </Stack>
                                    </>
                                </Stack>
                            )}
                        </Stack>
                    ))}
                    {/* List End */}
                </Stack>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="sort-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        borderRadius: '12px',
                        width: 200,
                        color: 'text.secondary',
                        overflow: 'visible',
                        mt: 1.5,
                        bgcolor: 'text.primary',
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Typography ml={2} fontSize={"12px"} fontWeight={"Medium"} color={"#8F8D8F"}> SORT BY</Typography>
                <MenuList dense>
                    <MenuItem sx={{ fontSize: "12px" }}>
                        <ListItemIcon>
                            <Check />
                        </ListItemIcon>
                        Log Out
                    </MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}
