import FilterSelect from '@/components/FilterSelect'
import PageDescription from '@/components/PageDescription'
import { Box, Grid, Stack, Typography } from '@mui/material'
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
                title={'Data HIPMI Jaya'}
                description={'HIPMI Jaya menyediakan statistik sesuai update terbaru bagi para anggota maupun calon anggota untuk meneliti lebih lanjut mengenai informasi-informasi yang relevan.'}
            />

            <Stack width={"100%"} px={"110px"} justifyContent={"flex-start"}>
                <FilterSelect filterName={"Klaster"} labelName={"Pilih klaster"} />
            </Stack>

            <Box width={"100%"} px={"110px"} pb={"100px"}>
                <Stack width={"100%"} px={"18px"} gap={"32px"}>
                    <Stack px={"100px"}>
                        <Stack
                            bgcolor={"primary.main"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            py={"32px"}
                            borderRadius={"12px"}
                        >
                            <Typography fontSize={"24px"} fontWeight={"bold"} color={"text.primary"}>
                                Jumlah Anggota Aktif HIPMI Jaya 2024
                            </Typography>

                            <Typography fontSize={"96px"} fontWeight={"bold"} color={"secondary.main"}>
                                157
                            </Typography>
                        </Stack>
                    </Stack>

                    <Box>
                        <Grid container spacing={4}>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                <Stack border={"1px solid #E3E3E3"} borderRadius={"12px"} width={"100%"} height={"400px"} />
                            </Grid>

                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                <Stack border={"1px solid #E3E3E3"} borderRadius={"12px"} width={"100%"} height={"400px"} />
                            </Grid>

                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                <Stack border={"1px solid #E3E3E3"} borderRadius={"12px"} width={"100%"} height={"400px"} />
                            </Grid>

                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                <Stack border={"1px solid #E3E3E3"} borderRadius={"12px"} width={"100%"} height={"400px"} />
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}