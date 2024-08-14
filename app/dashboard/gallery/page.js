"use client"
import PageDescription from '@/components/PageDescription'
import { Box, Grid, Stack } from '@mui/material'
import React from 'react'

export default function Page() {
    return (
        <Box
            width={"100%"}
            height={"100%"}
            sx={{
                overflow: "hidden",
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column",
                gap: "51px",
            }}
        >
            <PageDescription
                title={'Galeri HIPMI Jaya'}
                description={'Bersama HIPMI Jaya, kita tidak akan melewatkan momen-momen penting dan seru untuk dikenang di masa mendatang nanti.'}
            />

            <Box width={"100%"} px={"110px"}>
                <Box
                    width={"100%"}
                    height={"1516px"}
                    px={"6px"}
                    pt={"46px"}
                    sx={{
                        overflow: "hidden",
                        overflowY: "scroll",
                    }}
                >
                    <Grid container width={"100%"} height={"100%"} spacing={3}>
                        <Grid item xs={12} sm={4} md={4} lg={4} xl={3}>
                            <Stack
                                bgcolor={"white"}
                                width={"100%"}
                                height={"500px"}
                                borderRadius={"12px"}
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={4} lg={4} xl={3}>
                            <Stack
                                bgcolor={"white"}
                                width={"100%"}
                                height={"500px"}
                                borderRadius={"12px"}
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={4} lg={4} xl={3}>
                            <Stack
                                bgcolor={"white"}
                                width={"100%"}
                                height={"500px"}
                                borderRadius={"12px"}
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={4} lg={4} xl={3}>
                            <Stack
                                bgcolor={"white"}
                                width={"100%"}
                                height={"500px"}
                                borderRadius={"12px"}
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={4} lg={4} xl={3}>
                            <Stack
                                bgcolor={"white"}
                                width={"100%"}
                                height={"500px"}
                                borderRadius={"12px"}
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={4} lg={4} xl={3}>
                            <Stack
                                bgcolor={"white"}
                                width={"100%"}
                                height={"500px"}
                                borderRadius={"12px"}
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={4} lg={4} xl={3}>
                            <Stack
                                bgcolor={"white"}
                                width={"100%"}
                                height={"500px"}
                                borderRadius={"12px"}
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={4} lg={4} xl={3}>
                            <Stack
                                bgcolor={"white"}
                                width={"100%"}
                                height={"500px"}
                                borderRadius={"12px"}
                            />
                        </Grid>


                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}