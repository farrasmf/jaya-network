"use client"
import { Box, Button, FormControl, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import JayaNetworkLogo from '@/assets/jaya-network-logo.png'
import Image from 'next/image'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Link from 'next/link'

export default function Page() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box
            width={"100%"}
            height={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                width={"400px"}
                border={"1px solid white"}
                borderRadius={"12px"}
                pt={"46px"}
                pb={"24px"}
                px={"32px"}
                display={"flex"}
                flexDirection={"column"}
                gap={"32px"}
            >
                <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={"24px"}>
                    <Image priority alt='Jaya Network' src={JayaNetworkLogo} />
                    <Stack>
                        <Typography color={"secondary.main"} fontWeight={"Bold"} fontSize={"24px"}>
                            Register
                        </Typography>
                        <Typography color={"secondary.main"} fontWeight={"Bold"} fontSize={"16px"}>
                            Jaya Network
                        </Typography>
                    </Stack>
                </Stack>

                <Stack
                    width={"100%"}
                    component="form"
                    gap={2}
                >
                    <Stack gap={1}>
                        <Typography color={"text.primary"} fontWeight="medium">
                            Email
                        </Typography>
                        <TextField
                            variant="outlined"
                            placeholder="Enter your email"
                            InputProps={{
                                sx: {
                                    bgcolor: "white",
                                    height: "48px",
                                    borderRadius: "12px",
                                    color: "text.secondary",
                                }
                            }}
                            name="email"
                        />
                    </Stack>

                    <Stack gap={1} mt={2}>
                        <Typography color={"text.primary"} fontWeight="Medium">
                            Password
                        </Typography>
                        <FormControl>
                            <TextField
                                variant="outlined"
                                id="outlined-adornment-password"
                                placeholder="Enter your password"
                                type={showPassword ? "text" : "password"}
                                InputProps={{
                                    sx: {
                                        bgcolor: "white",
                                        height: "48px",
                                        borderRadius: "12px",
                                        color: "text.secondary",
                                    },
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                name="password"
                                // value={data?.password}
                                // onChange={handleChange}
                                // error={error.type === "blank" && !data.password ? true : false}
                                // helperText={error.type === "blank" && !data.password ? error.message : ""}
                                FormHelperTextProps={{ style: { color: "#F31260" } }}
                            />
                        </FormControl>
                    </Stack>

                    <Stack gap={1}>
                        <Typography color={"text.primary"} fontWeight="Medium">
                            Confirm Password
                        </Typography>
                        <FormControl>
                            <TextField
                                variant="outlined"
                                id="outlined-adornment-password"
                                placeholder="Enter your confirm password"
                                type={showPassword ? "text" : "password"}
                                InputProps={{
                                    sx: {
                                        bgcolor: "white",
                                        height: "48px",
                                        borderRadius: "12px",
                                        color: "text.secondary",
                                    },
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                name="password"
                                // value={data?.password}
                                // onChange={handleChange}
                                // error={error.type === "blank" && !data.password ? true : false}
                                // helperText={error.type === "blank" && !data.password ? error.message : ""}
                                FormHelperTextProps={{ style: { color: "#F31260" } }}
                            />
                        </FormControl>
                    </Stack>
                </Stack>

                <Stack gap={1}>
                    <Button
                        onClick={() => handleSubmit(data)}
                        variant="contained"
                        color="primary"
                        sx={{ height: "48px", borderRadius: "12px" }}
                    >
                        <Typography fontWeight={"Bold"}>Register</Typography>
                    </Button>

                    <Typography
                        fontSize={"12px"}
                        fontWeight={"regular"}
                        align="center"
                        color={"text.primary"}
                    >
                        Already have an account?{" "}
                        <Typography
                            component={Link}
                            href="/auth/login"
                            color="secondary.main"
                            fontSize={"12px"}
                            fontWeight={"medium"}
                        >
                            Login here
                        </Typography>
                    </Typography>
                </Stack>
            </Box>
        </Box>
    )
}
