"use client"
import { SortIcon } from '@/assets/Svg'
import { Check } from '@mui/icons-material';
import { Box, IconButton, ListItemIcon, Menu, MenuItem, MenuList, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function List({ listName, listData, memberList }) {
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

    return (
        <>
            <Box
                component={Paper}
                sx={{
                    border: "1px solid black",
                    width: "360px",
                    height: "518px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "none",
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
                    {listData?.map((item, index) => (
                        <Stack
                            position={"relative"}
                            key={index}
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
                                    <Typography fontWeight={"Bold"} fontSize={"14px"}>{item.company_name || item.full_name}</Typography>
                                    <Typography fontWeight={"Reguler"} fontSize={"10px"}>{`${item.kelurahan}, ${item.kota_kabupaten}`}</Typography>
                                    <Stack direction={"row"} gap={"8px"}>
                                        <Typography fontWeight={"Reguler"} fontSize={"10px"}>Kategori:</Typography>
                                        <Typography fontWeight={"Reguler"} fontSize={"10px"} color={"text.secondary"} bgcolor={"secondary.main"} borderRadius={"8px"} width={"80px"} align='center'>{item.category || item.business[0].category}</Typography>
                                        <Typography fontWeight={"Reguler"} fontSize={"10px"} color={"text.secondary"} bgcolor={"secondary.main"} borderRadius={"8px"} width={"80px"} align='center'>HIPMI {item.membership_year || item.members.membership_year}</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>

                            {!memberList && expandedIndex === index && (
                                <Stack gap={"8px"} width={"100%"}>
                                    <Stack direction={"row"} width={"100%"} height={"88px"} gap={"6px"}>
                                        <Stack bgcolor={"white"} borderRadius={"12px"} width={"88px"} height={"88px"} />
                                        <Stack bgcolor={"white"} borderRadius={"12px"} width={"88px"} height={"88px"} />
                                        <Stack bgcolor={"white"} borderRadius={"12px"} width={"88px"} height={"88px"} />
                                    </Stack>


                                    <Typography fontWeight={"Reguler"} fontSize={"10px"} align='justify'>
                                        {item.company_description}
                                    </Typography>

                                    <>
                                        <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
                                            <Typography fontWeight={"Reguler"} fontSize={"10px"}>Alamat</Typography>
                                            <Typography fontWeight={"Reguler"} fontSize={"10px"} align='justify' width={"160px"}>
                                                {`${item.company_address}, ${item.kecamatan}, ${item.kelurahan}, ${item.kota_kabupaten}, ${item.provinsi}`}
                                            </Typography>
                                        </Stack>
                                        <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
                                            <Typography fontWeight={"Reguler"} fontSize={"10px"} >Jam Operasional</Typography>
                                            <Typography fontWeight={"Reguler"} fontSize={"10px"} align='justify' width={"160px"}>
                                                {`${item.open_hour} - ${item.close_hour}`}
                                            </Typography>
                                        </Stack>
                                        <Stack direction={"row"} justifyContent={"space-between"}>
                                            <Typography fontWeight={"Reguler"} fontSize={"10px"} >Telepon</Typography>
                                            <Typography fontWeight={"Reguler"} fontSize={"10px"} align='justify' width={"160px"}>
                                                {item.phone_number}
                                            </Typography>
                                        </Stack>
                                    </>
                                </Stack>
                            )}

                            {memberList && expandedIndex === index && (
                                <Stack gap={"8px"} width={"100%"} >
                                    <Stack direction={"row"} width={"100%"} height={"88px"} gap={"6px"}>
                                        <Stack bgcolor={"white"} borderRadius={"12px"} width={"88px"} height={"88px"} />
                                        <Stack bgcolor={"white"} borderRadius={"12px"} width={"88px"} height={"88px"} />
                                        <Stack bgcolor={"white"} borderRadius={"12px"} width={"88px"} height={"88px"} />
                                    </Stack>


                                    <Typography fontWeight={"Reguler"} fontSize={"10px"} align='justify'>
                                        {item.self_description}
                                    </Typography>

                                    <>
                                        <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
                                            <Typography fontWeight={"Reguler"} fontSize={"10px"}>Alamat</Typography>
                                            <Typography fontWeight={"Reguler"} fontSize={"10px"} align='justify' width={"160px"}>
                                                {`${item.address}, ${item.kecamatan}, ${item.kelurahan}, ${item.kota_kabupaten}, ${item.provinsi}`}
                                            </Typography>
                                        </Stack>

                                        <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
                                            <Typography fontWeight={"Reguler"} fontSize={"10px"} >Media Sosial</Typography>
                                            <Typography fontWeight={"Reguler"} fontSize={"10px"} align='justify' width={"160px"}>
                                                {`${item.social_media} (Insragram)`}
                                            </Typography>
                                        </Stack>

                                        <Stack direction={"row"} justifyContent={"space-between"}>
                                            <Typography fontWeight={"Reguler"} fontSize={"10px"} >Telepon</Typography>
                                            <Typography fontWeight={"Reguler"} fontSize={"10px"} align='justify' width={"160px"}>
                                                {item.phone_number}
                                            </Typography>
                                        </Stack>

                                        <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
                                            <Typography fontWeight={"Reguler"} fontSize={"10px"} >Email</Typography>
                                            <Typography fontWeight={"Reguler"} fontSize={"10px"} align='justify' width={"160px"}>
                                                {item.email}
                                            </Typography>
                                        </Stack>

                                        <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
                                            <Typography fontWeight={"Reguler"} fontSize={"10px"} >Hobi</Typography>
                                            <Typography fontWeight={"Reguler"} fontSize={"10px"} align='justify' width={"160px"}>
                                                {item.interest}
                                            </Typography>
                                        </Stack>
                                    </>
                                </Stack>
                            )}
                        </Stack>
                    ))}
                    {/* List End */}
                    <Stack
                        width={"100%"}
                        height={"400px"}
                        bgcolor={"white"}
                        borderRadius={"12px"}
                        px={"20px"}
                        py={"14px"}
                        gap={"12px"}
                    />

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
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
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
                        Name (A - Z)
                    </MenuItem>
                    <MenuItem sx={{ fontSize: "12px" }}>
                        <ListItemIcon>
                        </ListItemIcon>
                        Name (Z - A)
                    </MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}
