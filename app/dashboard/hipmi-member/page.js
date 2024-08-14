import FilterSelect from '@/components/FilterSelect'
import ImageCarousel from '@/components/ImageCarousel'
import List from '@/components/List'
import PageDescription from '@/components/PageDescription'
import SearchField from '@/components/SearchField'
import { Box, Paper, Stack } from '@mui/material'
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
                title={'Anggota HIPMI Jaya'}
                description={'HIPMI Jaya takkan bisa mencapai titik sekarang tanpa anggota-anggotanya. Dengan database anggota HIPMI Jaya, tiap anggota dapat memperluas koneksi dan berinteraksi dengan lebih mudah.'}
            />
            <ImageCarousel profileCarousel={true} />

            <Box width={"100%"} px={"110px"} pb={"100px"}>
                <Stack
                    width={"100%"}
                    py={"46px"}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    gap={"60px"}
                >
                    <Stack gap={"38px"}>
                        <SearchField title={"Anggota"} />
                        <List listName={"Daftar Anggota"} />
                    </Stack>

                    <Stack gap={"38px"} display={"flex"} flexDirection={"column"} alignItems={"flex-start"}>
                        <Stack direction={"row"} gap={"18px"}>
                            <FilterSelect filterName={"Kota"} labelName={"Pilih Kota"} />
                            <FilterSelect filterName={"Kategori"} labelName={"Pilih Kategori"} />
                        </Stack>
                        <Box component={Paper} width={"100%"} height={"500px"} bgcolor={"white"} borderRadius={"12px"}>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}