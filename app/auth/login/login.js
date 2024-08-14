"use client"
import { Box, Button, FormControl, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import JayaNetworkLogo from '@/assets/jaya-network-logo.png'
import Image from 'next/image'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword } from '../action'
import { CancelIcon } from '@/assets/Svg'

export default function LoginPage() {
    const [data, setData] = useState({ email: "", password: "" })
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState({ type: "", message: "" });
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    async function handleSubmit(loginData) {
        if (!loginData.email || !loginData.password) {
            return setError({ type: "blank", message: "Please fill in this field" });
        }
        const result = await signInWithEmailAndPassword(loginData);
        const { data, error } = JSON.parse(result);
        if (data.user) {
            return router.push("/dashboard");
        } else {
            console.log(error);
            return setError({ type: "error", message: "Incorrect email or password. Please try again." });
        }
    }

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
                py={"46px"}
                px={"32px"}
                display={"flex"}
                flexDirection={"column"}
                gap={"32px"}
            >
                <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={"24px"}>
                    <Image priority alt='Jaya Network' src={JayaNetworkLogo} />
                    <Stack>
                        <Typography color={"secondary.main"} fontWeight={"Bold"} fontSize={"24px"}>
                            Login
                        </Typography>
                        <Typography color={"secondary.main"} fontWeight={"Bold"} fontSize={"16px"}>
                            Jaya Network
                        </Typography>
                    </Stack>
                </Stack>

                {error.type === "error" && (
                    <Stack
                        p={2}
                        bgcolor="#FEE7EF"
                        borderRadius={"8px"}
                        width={"100%"}
                        direction={"row"}
                        justifyContent={"space-between"}
                    >
                        <Typography fontSize={12} fontWeight="regular" color="red">
                            {error.message}
                        </Typography>

                        <IconButton
                            onClick={() => {
                                setError({ type: "", message: "" });
                                setData({ email: "", password: "" })
                            }}
                            sx={{
                                width: "16px",
                                height: "16px",
                            }}
                        >
                            <CancelIcon sx={{ color: "red", width: "16px", height: "16px" }}/>
                        </IconButton>
                    </Stack>
                )}

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
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'text.primary',
                                    },
                                }
                            }}
                            name="email"
                            value={data?.email}
                            onChange={handleChange}
                            error={error.type === "blank" && !data.email ? true : false}
                            helperText={error.type === "blank" && !data.email ? error.message : ""}
                            FormHelperTextProps={{ style: { color: "red"}}}
                        />
                    </Stack>

                    <Stack gap={1}>
                        <Typography color={"text.primary"} fontWeight="medium">
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
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'text.primary',
                                        },
                                    },
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                name="password"
                                value={data?.password}
                                onChange={handleChange}
                                error={error.type === "blank" && !data.password ? true : false}
                                helperText={error.type === "blank" && !data.password ? error.message : ""}
                                FormHelperTextProps={{ style: { color: "red" } }}
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
                        <Typography fontWeight={"Bold"}>Login</Typography>
                    </Button>

                    <Typography
                        fontSize={"12px"}
                        fontWeight={"regular"}
                        align="center"
                        color={"text.primary"}
                    >
                        Don’t have an account?{" "}
                        <Typography
                            component={Link}
                            href="/auth/register"
                            color="secondary.main"
                            fontSize={"12px"}
                            fontWeight={"medium"}
                        >
                            Register here
                        </Typography>
                    </Typography>
                </Stack>
            </Box>
        </Box>
    )
}
