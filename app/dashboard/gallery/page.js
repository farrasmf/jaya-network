"use client"
import PageDescription from '@/components/PageDescription'
import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import GalleryImage1 from '@/assets/Gallery/gallery-image-1.png';
import GalleryImage2 from '@/assets/Gallery/gallery-image-2.png';
import GalleryImage3 from '@/assets/Gallery/gallery-image-3.png';
import GalleryImage4 from '@/assets/Gallery/gallery-image-4.png';
import GalleryImage5 from '@/assets/Gallery/gallery-image-5.png';
import GalleryImage6 from '@/assets/Gallery/gallery-image-6.png';
import Image from 'next/image';

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

            <Box width={"100%"} px={"50px"}>
                <Box
                    width={"100%"}
                    height={"1516px"}
                    px={"6px"}
                    pt={"46px"}
                >
                    <Grid container width={"100%"} height={"100%"} spacing={3}>
                        <Grid item xs={12} sm={4} md={4} lg={4} xl={3} height={"610px"}>
                            <Stack
                                border={"1px solid black"}
                                width={"380px"}
                                height={"610px"}
                                borderRadius={"12px"}
                                overflow={"hidden"}
                            >
                                <Image
                                    src={GalleryImage1}
                                    alt="gallery-image-1"
                                    objectFit="contain"
                                />
                            </Stack>
                        </Grid>

                        <Grid item xs={12} sm={4} md={4} lg={4} xl={3} height={"610px"}>
                            <Stack
                                border={"1px solid black"}
                                width={"380px"}
                                height={"610px"}
                                borderRadius={"12px"}
                                overflow={"hidden"}
                            >
                                <Image
                                    src={GalleryImage2}
                                    alt="gallery-image-2"
                                    objectFit="contain"
                                />
                            </Stack>
                        </Grid>

                        <Grid item xs={12} sm={4} md={4} lg={4} xl={3} height={"610px"}>
                            <Stack
                                border={"1px solid black"}
                                width={"100%"}
                                height={"610px"}
                                borderRadius={"12px"}
                                overflow={"hidden"}
                            >
                                <Image
                                    src={GalleryImage3}
                                    alt="gallery-image-3"
                                    objectFit="cover"
                                />
                            </Stack>
                        </Grid>

                        <Grid item xs={12} sm={4} md={4} lg={4} xl={3} height={"610px"}>
                            <Stack
                                border={"1px solid black"}
                                width={"380px"}
                                height={"610px"}
                                borderRadius={"12px"}
                                overflow={"hidden"}
                            >
                                <Image
                                    src={GalleryImage4}
                                    alt="gallery-image-4"
                                    objectFit="contain"
                                />
                            </Stack>
                        </Grid>

                        <Grid item xs={12} sm={4} md={4} lg={4} xl={3} height={"610px"}>
                            <Stack
                                border={"1px solid black"}
                                width={"380px"}
                                height={"610px"}
                                borderRadius={"12px"}
                                overflow={"hidden"}
                            >
                                <Image
                                    src={GalleryImage5}
                                    alt="gallery-image-5"
                                    objectFit="contain"
                                />
                            </Stack>
                        </Grid>

                        <Grid item xs={12} sm={4} md={4} lg={4} xl={3} height={"610px"}>
                            <Stack
                                border={"1px solid black"}
                                width={"380px"}
                                height={"610px"}
                                borderRadius={"12px"}
                                overflow={"hidden"}
                            >
                                <Image
                                    src={GalleryImage6}
                                    alt="gallery-image-6"
                                    objectFit="contain"
                                />
                            </Stack>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}