"use client"
import FilterSelect from '@/components/FilterSelect'
import PageDescription from '@/components/PageDescription'
import { Box, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ClusterImage1 from '@/assets/Business Cluster/cluster-image-1.png';
import ClusterImage2 from '@/assets/Business Cluster/cluster-image-2.png';
import ClusterImage3 from '@/assets/Business Cluster/cluster-image-3.png';
import ClusterImage4 from '@/assets/Business Cluster/cluster-image-4.png';
import ClusterImage5 from '@/assets/Business Cluster/cluster-image-5.png';
import ClusterImage6 from '@/assets/Business Cluster/cluster-image-6.png';
import ClusterImage7 from '@/assets/Business Cluster/cluster-image-7.png';
import ClusterImage8 from '@/assets/Business Cluster/cluster-image-8.png';
import ClusterImage9 from '@/assets/Business Cluster/cluster-image-9.png';
import ClusterImage10 from '@/assets/Business Cluster/cluster-image-10.png';
import ClusterImage11 from '@/assets/Business Cluster/cluster-image-11.png';
import ClusterImage12 from '@/assets/Business Cluster/cluster-image-12.png';
import ClusterImage13 from '@/assets/Business Cluster/cluster-image-13.png';
import ClusterImage14 from '@/assets/Business Cluster/cluster-image-14.png';
import Image from 'next/image'


export default function Page() {
    const [clusterFilter, setClusterFilter] = useState("");

    const clusterData = [
        { id: 1, name: "Food & Beverages (FnB)", image: ClusterImage1 },
        { id: 2, name: "Kesehatan", image: ClusterImage2 },
        { id: 3, name: "Manufaktur", image: ClusterImage3 },
        { id: 4, name: "Perkebunan & Kehutanan", image: ClusterImage4 },
        { id: 5, name: "Keuangan", image: ClusterImage5 },
        { id: 6, name: "Asuransi & Dana Pensiun", image: ClusterImage6 },
        { id: 7, name: "Pangan & Pupuk", image: ClusterImage7 },
        { id: 8, name: "Transportasi & Logistik", image: ClusterImage8 },
        { id: 9, name: "Pariwisata", image: ClusterImage9 },
        { id: 10, name: "Telekomunikasi & Media", image: ClusterImage10 },
        { id: 11, name: "Pendidikan", image: ClusterImage11 },
        { id: 12, name: "Teknologi Digital", image: ClusterImage12 },
        { id: 13, name: "Hiburan", image: ClusterImage13 },
        { id: 14, name: "Energi", image: ClusterImage14 },
    ]

    const clusterFilterData = [
        "Food & Beverages",
        "Kesehatan",
        "Manufaktur",
        "Perkebunan & Kehutanan",
        "Keuangan",
        "Asuransi & Dana Pensiun",
        "Pangan & Pupuk",
        "Transportasi & Logistik",
        "Pariwisata",
        "Telekomunikasi & Media",
        "Pendidikan",
        "Teknologi Digital",
        "Hiburan",
        "Energi",
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
                <FilterSelect filterName={"Klaster"} labelName={"Pilih klaster"} filterData={clusterFilterData} filter={clusterFilter} setFilter={setClusterFilter} />
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
                                    <Stack height={"100%"} width={"50%"} overflow={"hidden"}>
                                        <Image
                                            src={data.image}
                                            alt={data.name}
                                            style={{ objectFit: "cover" }}
                                        />
                                    </Stack>
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