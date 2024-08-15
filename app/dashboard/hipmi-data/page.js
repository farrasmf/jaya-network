"use client"
import FilterSelect from '@/components/FilterSelect'
import PageDescription from '@/components/PageDescription'
import { Box, Grid, Stack, Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'

const DynamicPieChart = dynamic(() => import('@/components/PieChart'), { ssr: false });

export default function Page() {
    const [dataFilter, setDataFilter] = useState("Data Anggota");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const dataFilterData = [
        "Data Anggota",
        "Aktivitas & Acara",
        "Pencapaian & Penghargaan",
        "Laporan Keuangan",
    ]

    const data1 = [
        { name: 'Jakarta Utara', value: 400 },
        { name: 'Jakarta Barat', value: 300 },
        { name: 'Jakarta Pusat', value: 300 },
        { name: 'Jakarta TImur', value: 200 },
        { name: 'Jakarta Selatan', value: 200 },
    ];

    const data2 = [
        { name: 'Pria', value: 456 },
        { name: 'Wanita', value: 312 },
    ];

    const data3 = [
        { name: '18 - 25 tahun', value: 320 },
        { name: '26 - 35 tahun ', value: 240 },
        { name: '36 - 45 tahun', value: 210 },
        { name: '46 - 55 tahun', value: 112 },
        { name: '> 55 tahun', value: 35 },
    ];

    const data4 = [
        { name: 'Golf', value: 121 },
        { name: 'Running', value: 40 },
        { name: 'Hiking', value: 215 },
        { name: 'Fishing', value: 80 },
        { name: 'Basket', value: 231 },
    ];

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
                <FilterSelect filterName={"Kategori"} labelName={"Pilih Data"} filterData={dataFilterData} filter={dataFilter} setFilter={setDataFilter} />
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
                                454
                            </Typography>
                        </Stack>
                    </Stack>

                    <Box>
                        <Grid container spacing={4}>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                <Stack border={"1px solid black"} borderRadius={"12px"} width={"100%"} height={"400px"} pt={"16px"}>
                                    <Typography alignSelf={"center"}>Pembagian Anggota Berdasarkan Lokasi</Typography>
                                    <DynamicPieChart data={data1} />
                                </Stack>
                            </Grid>

                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                <Stack border={"1px solid black"} borderRadius={"12px"} width={"100%"} height={"400px"} pt={"16px"}>
                                    <Typography alignSelf={"center"}>Pembagian Anggota Berdasarkan Jenis Kelamin</Typography>
                                    <DynamicPieChart data={data2} />
                                </Stack>
                            </Grid>

                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                <Stack border={"1px solid black"} borderRadius={"12px"} width={"100%"} height={"400px"} pt={"16px"}>
                                    <Typography alignSelf={"center"}>Pembagian Anggota Berdasarkan Usia</Typography>
                                    <DynamicPieChart data={data3} />
                                </Stack>
                            </Grid>

                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                <Stack border={"1px solid black"} borderRadius={"12px"} width={"100%"} height={"400px"} pt={"16px"}>
                                    <Typography alignSelf={"center"}>Pembagian Anggota Berdasarkan Hobi</Typography>
                                    <DynamicPieChart data={data4} />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}