"use client"
import ButtonHeader from '@/components/ButtonHeader'
import { Avatar, Box, Button, IconButton, Menu, MenuItem, Paper, Stack } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import JayaNetworkLogo from '@/assets/jaya-network-logo.png'
import { usePathname, useRouter } from 'next/navigation'
import { logOut } from './action'

export default function Layout({ children }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [activePathname, setActivePathname] = useState("");
    const open = Boolean(anchorEl);
    const pathname = usePathname();
    const router = useRouter();
    console.log(activePathname);

    useEffect(() => {
        setActivePathname(pathname);
    }, [pathname]);

    const subMenu = [
        {
            title: 'Jaya Network',
            path: '/dashboard'
        },
        {
            title: 'Anggota HIPMI Jaya',
            path: '/dashboard/hipmi-member'
        },
        {
            title: 'Klaster Usaha',
            path: '/dashboard/business-cluster'
        },
        {
            title: 'Data HIPMI Jaya',
            path: '/dashboard/hipmi-data'
        },
        {
            title: 'Gallery',
            path: '/dashboard/gallery'
        }
    ]

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    async function handleLogout() {
        const result = await logOut();
        const { error } = JSON.parse(result);
        if (!error) {
            router.push("/auth/login");
        } else {
            console.log(error);
        }
    }

    return (
        <>
            <Box sx={{ height: '100vh', width: '100%' }} bgcolor={'#262626'}>
                <Box
                    component={Paper}
                    bgcolor={'#262626'}
                    width={'100%'}
                    height={'100px'}
                    display={'flex'}
                    px={"50px"}
                    py={"8px"}
                    alignItems={'end'}
                    justifyContent={'space-between'}
                    position={'fixed'}
                    zIndex={10}
                >
                    <Image priority alt='Jaya Network' src={JayaNetworkLogo} />
                    <Stack direction={'row'} alignItems={'end'}>
                        {subMenu.map((item, index) => (
                            <ButtonHeader key={index} title={item.title} active={activePathname === item.path} path={item.path} />
                        ))}

                        <IconButton
                            onClick={handleClick}
                            size='small'
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ bgcolor: 'secondary.main', width: 32, height: 32 }}>F</Avatar>
                        </IconButton>
                    </Stack>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        pt: '100px',
                        overflow: 'hidden',
                    }}
                >
                    {children}
                </Box>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        border: '1px solid white',
                        borderRadius: '12px',
                        width: 200,
                        color: 'text.primary',
                        overflow: 'visible',
                        mt: 1.5,
                        bgcolor: '#262626',
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
            </Menu>
        </>
    )
}
