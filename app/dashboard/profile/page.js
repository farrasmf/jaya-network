import { Avatar, Box, Stack, Typography } from '@mui/material'
import FotoReno from '@/assets/reno-adityo.jpg'
import Image from 'next/image'
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
                px: "200px",
                py: "94px",
            }}
        >
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
            >

                <Image priority alt='Reno Adityo' src={FotoReno} height={300} />
                <Typography
                    fontSize={"16px"}
                    fontWeight={"Reguler"}
                    color={"text.secondary"}
                    width={"50%"}
                    textAlign={"justify"}
                >
                    Reno Adityo adalah pengusaha yang lahir dan
                    besar di Jakarta. Pada tahun 2014, Reno
                    mendirikan PT Lamandau Subur Sejahtera
                    yang kemudian berkembang menjadi
                    Lamandau Group yang mencakup industri
                    pupuk, logistik, konstruksi, F&B, hingga
                    finance & tax consultant pada tahun 2022.

                    Kesuksesannya dalam bisnis membawanya ke
                    berbagai organisasi seperti Heritage Millenials
                    Future Leader, HIPMI Jaya dan KNPI. Ia juga
                    memiliki jejak dalam politik dengan menjadi

                    komandan TKN Fantapreneur (Prabowo-
                    Gibran), juga menjadi Wabendum HIPMI Jaya

                    dan Ketua Badan Otonom Jaya Golf.
                </Typography>
            </Stack>

            <Stack direction={"row"} justifyContent={"flex-end"}>
                <Stack bgcolor={"primary.main"} width={"50%"} borderRadius={"12px"} p={"24px"}>

                    <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
                        <Typography fontWeight={"Medium"} fontSize={"16px"} color={"text.primary"}>Nama Lengkap</Typography>
                        <Typography fontWeight={"Medium"} fontSize={"16px"} align='justify' width={"160px"} color={"text.primary"}>
                            Reno Adityo
                        </Typography>
                    </Stack>

                    <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
                        <Typography fontWeight={"Medium"} fontSize={"16px"} color={"text.primary"}>Tempat & Tanggal Lahir</Typography>
                        <Typography fontWeight={"Medium"} fontSize={"16px"} align='justify' width={"160px"} color={"text.primary"}>
                            Jakarta, 13 Januari 1985
                        </Typography>
                    </Stack>

                    <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
                        <Typography fontWeight={"Medium"} fontSize={"16px"} color={"text.primary"}>Alamat</Typography>
                        <Typography fontWeight={"Medium"} fontSize={"16px"} align='justify' width={"160px"} color={"text.primary"}>
                            Jl. Melati Blok A1 No.12 RT 002/RW 013, Menteng, Jakarta Pusat, DKI JKarta
                        </Typography>
                    </Stack>

                    <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
                        <Typography fontWeight={"Medium"} fontSize={"16px"} color={"text.primary"}>Media Sosial</Typography>
                        <Typography fontWeight={"Medium"} fontSize={"16px"} align='justify' width={"160px"} color={"text.primary"}>
                            @bersama.reno (Insragram)
                        </Typography>
                    </Stack>

                    <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
                        <Typography fontWeight={"Medium"} fontSize={"16px"} color={"text.primary"}>No Telepon</Typography>
                        <Typography fontWeight={"Medium"} fontSize={"16px"} align='justify' width={"160px"} color={"text.primary"}>
                            +628 2200 123 457
                        </Typography>
                    </Stack>

                    <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
                        <Typography fontWeight={"Medium"} fontSize={"16px"} color={"text.primary"}>Email</Typography>
                        <Typography fontWeight={"Medium"} fontSize={"16px"} align='justify' width={"160px"} color={"text.primary"}>
                            reno.adityo@gmail.com
                        </Typography>
                    </Stack>

                </Stack>
            </Stack>
        </Box>
    )
}
