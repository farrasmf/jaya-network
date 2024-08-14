import FilterSelect from '@/components/FilterSelect'
import PageDescription from '@/components/PageDescription'
import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Page() {
    const clusterData = [
        { id: 1, name: "Food & Beverages (FnB)", image: "image1" },
        { id: 2, name: "Kesehatan", image: "image2" },
        { id: 3, name: "Manufaktur", image: "image3" },
        { id: 4, name: "Perkebunan & Kehutanan", image: "image4" },
        { id: 5, name: "Keuangan", image: "image5" },
        { id: 6, name: "Asuransi & Dana Pensiun", image: "image6" },
        { id: 7, name: "Pangan & Pupuk", image: "image7" },
        { id: 8, name: "Transportasi & Logistik", image: "image8" },
        { id: 9, name: "Pariwisata", image: "image9" },
        { id: 10, name: "Telekomunikasi & Media", image: "image10" },
        { id: 11, name: "Pendidikan", image: "image11" },
        { id: 12, name: "Teknologi Digital", image: "image12" },
        { id: 13, name: "Hiburan", image: "image13" },
        { id: 14, name: "Energi", image: "image14" },
    ]

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
                title={'Klaster Usaha'}
                description={'Setiap usaha yang bernaung di bawah payung HIPMI Jaya memiliki klasternya masing-masing, di mana usaha-usaha tersebut bekerjasama agar menghasilkan ekosistem industri yang efektif dan efisien.'}
            />

            <Stack width={"100%"} px={"110px"} justifyContent={"flex-start"}>
                <FilterSelect filterName={"Klaster"} labelName={"Pilih klaster"} />
            </Stack>
            
            <Box width={"100%"} px={"110px"}>
                <Box width={"100%"} px={"48px"} py={"46px"}>
                    <Grid container spacing={"38px"}>
                        {clusterData.map((data) => (
                            <Grid item xs={6} md={6} lg={6} xl={6} key={data.id}>
                                <Stack
                                    width={"100%"}
                                    height={"172px"}
                                    bgcolor={"primary.main"}
                                    borderRadius={"12px"}
                                    gap={"21px"}
                                    direction={"row"}
                                    alignItems={"center"}
                                    overflow={"hidden"}
                                >
                                    <Stack height={"100%"} width={"50%"} bgcolor={"white"} />
                                    <Typography width={"50%"} color={"text.primary"} fontWeight={"Bold"} fontSize={"24px"}>
                                        {data.name}
                                    </Typography>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}