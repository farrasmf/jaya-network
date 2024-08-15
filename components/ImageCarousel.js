"use client"
import { Box, Icon, Stack, Typography } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import Image from 'next/image';
import { ArrowDownIcon } from '@/assets/Svg';

export default function ImageCarousel({ images, height, width, slidesPreview, profileCarousel }) {
    return (
        <Box
            sx={{
                width: '100%',
                height: '447px',
                bgcolor: 'primary.main',
                display: 'flex',
                flexDirection: 'column',
                py: '30px',
                gap: '20px',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {profileCarousel ?
                <Stack>
                    <Typography
                        fontSize={"24px"}
                        fontWeight={"Bold"}
                        color={"text.primary"}
                        align='center'
                    >
                        Kenalan yuk!
                    </Typography>

                    <Typography
                        fontSize={"16px"}
                        fontWeight={"Reguler"}
                        color={"text.primary"}
                        align='center'
                    >
                        Bersama kawula muda HIPMI Jaya, kita dapat mencapai tujuan bersama!
                    </Typography>
                </Stack>
                : <></>}

            <Stack width={'100%'} height={height}>
                <Swiper
                    slidesPerView={slidesPreview}
                    spaceBetween={24}
                    freeMode={true}
                    modules={[FreeMode, Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                >
                    {images?.map((image, index) => (
                        <SwiperSlide key={index} style={{ borderRadius: "12px", overflow: "hidden" }}>
                                <Image
                                    src={image}
                                    alt="image"
                                    style={{ objectFit: "cover" }}
                                />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Stack>

            {profileCarousel ?
                <Stack justifyContent={"center"} alignItems={"center"}>
                    <Typography
                        fontSize={"16px"}
                        fontWeight={"Reguler"}
                        color={"text.primary"}
                        align='center'
                    >
                        cek database lengkap di sini
                    </Typography>
                    <Icon color='white'>
                        <ArrowDownIcon />
                    </Icon>
                </Stack>
                : <></>}
        </Box>
    )
}
