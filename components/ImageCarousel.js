"use client"
import { Box, Icon, Stack, Typography } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import 'swiper/css';
import 'swiper/css/free-mode';

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

            <Stack width={'100%'} height={"377px"}>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={24}
                    freeMode={true}
                    modules={[FreeMode, Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
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
                        <KeyboardArrowDownIcon/>
                    </Icon>
                </Stack>
                : <></>}
        </Box>
    )
}
