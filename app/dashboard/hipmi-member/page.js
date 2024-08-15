"use client"
import FilterSelect from '@/components/FilterSelect'
import ImageCarousel from '@/components/ImageCarousel'
import List from '@/components/List'
import PageDescription from '@/components/PageDescription'
import SearchField from '@/components/SearchField'
import { Box, Paper, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProfileImage1 from '@/assets/Profile Carousel/profile-1.jpg';
import ProfileImage2 from '@/assets/Profile Carousel/profile-2.jpg';
import ProfileImage3 from '@/assets/Profile Carousel/profile-3.jpg';
import ProfileImage4 from '@/assets/Profile Carousel/profile-4.jpg';
import ProfileImage5 from '@/assets/Profile Carousel/profile-5.jpg';
import ProfileImage6 from '@/assets/Profile Carousel/profile-6.jpg';
import ProfileImage7 from '@/assets/Profile Carousel/profile-7.jpg';
import JakartaUtara from '@/assets/jakarta-utara.svg'
import JakartaPusat from '@/assets/jakarta-pusat.svg'
import JakartaBarat from '@/assets/jakarta-barat.svg'
import JakartaTimur from '@/assets/jakarta-timur.svg'
import JakartaSelatan from '@/assets/jakarta-selatan.svg'
import { readMember } from '../action'

export default function Page() {
    const [memberData, setMemberMData] = useState([]);
    const [filteredMemberData, setFilteredMemberData] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [cityFilter, setCityFilter] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    console.log(memberData);
    
    const profileImage = [ ProfileImage1, ProfileImage2, ProfileImage3, ProfileImage4, ProfileImage5, ProfileImage6, ProfileImage7, ProfileImage2, ProfileImage3 ];

    const cityFilterData = [ "Jakarta Utara", "Jakarta Pusat", "Jakarta Barat", "Jakarta Timur", "Jakarta Selatan",]

    const categoryFilterData = ["Food & Beverage", "Kesehatan", "Manufaktur", "Perkebunan & Kehutanan", "Keuangan", "Asuransi & Dana Pensiun", "Pangan & Pupuk", "Transportasi & Logistik", "Pariwisata", "Telekomunikasi & Media", "Pendidikan", "Teknologi Digital", "Hiburan", "Energi"]

    useEffect(() => {
        const fetchData = async () => {
            const result = await readMember();
            const { error, data } = JSON.parse(result);
            if (data) {
                setMemberMData(data);
            } else if (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        let temp = memberData.filter((item) => {
            return (
                item.full_name.toLowerCase().includes(searchValue.toLowerCase()) &&
                item.kota_kabupaten.toLowerCase().includes(cityFilter.toLowerCase()) &&
                item.business[0].category.toLowerCase().includes(categoryFilter.toLowerCase())
            );
        });
        setFilteredMemberData(temp);
    }, [
        searchValue,
        memberData,
        cityFilter,
        categoryFilter,
    ])

    const handleSearch = (value) => {
        setSearchValue(value);
    };

    const getFillColor = (cityName) => {
        return cityFilter === cityName ? "#C3F500" : "0532BB";
    };

    const getCityPosition = () => {
        switch (cityFilter) {
            case "Jakarta Utara": return { top: "120px", left: "120px" };
            case "Jakarta Pusat": return { top: "90px", left: "420px" };
            case "Jakarta Barat": return { top: "80px", left: "330px" };
            case "Jakarta Timur": return { top: "250px", left: "80px" };
            case "Jakarta Selatan": return { top: "280px", left: "400px" };
            default: return { bottom: "0", right: "100px" };
        }
    };

    const cityPosition = getCityPosition();

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
            <ImageCarousel height={"200px"} images={profileImage} slidesPreview={7} profileCarousel={true}  />

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
                        <SearchField title={"Anggota"} onSearch={handleSearch} searchValue={searchValue}/>
                        <List listName={"Daftar Anggota"} listData={filteredMemberData} memberList={true}/>
                    </Stack>

                    <Stack gap={"38px"} display={"flex"} flexDirection={"column"} alignItems={"flex-start"}>
                        <Stack direction={"row"} gap={"18px"}>
                            <FilterSelect filterName={"Kota"} labelName={"Pilih Kota"} filterData={cityFilterData} filter={cityFilter} setFilter={setCityFilter} />
                            <FilterSelect filterName={"Kategori"} labelName={"Pilih Kategori"} filterData={categoryFilterData} filter={categoryFilter} setFilter={setCategoryFilter} />
                        </Stack>
                        <Box width={"100%"} height={"500px"} position={"relative"}>
                            <JakartaUtara style={{ position: "absolute", top: "0", left: "120px", color: getFillColor("Jakarta Utara") }} />
                            <JakartaPusat style={{ position: "absolute", top: "78.5px", left: "261px", color: getFillColor("Jakarta Pusat") }} />
                            <JakartaBarat style={{ position: "absolute", top: "16px", left: "76px", color: getFillColor("Jakarta Barat") }} />
                            <JakartaTimur style={{ position: "absolute", top: "116px", left: "341.5px", color: getFillColor("Jakarta Timur") }} />
                            <JakartaSelatan style={{ position: "absolute", top: "203px", left: "165px", color: getFillColor("Jakarta Selatan") }} />
                            <Stack
                                position={"absolute"}
                                p={"20px"}
                                bgcolor={"#8F8D8F"}
                                sx={{
                                    borderRadius: "12px",
                                    opacity: "0.9",
                                    ...cityPosition,
                                }}
                                zIndex={10}
                            >
                                <Typography
                                    fontSize={"20px"}
                                    fontWeight={"Bold"}
                                    color={"text.primary"}
                                >
                                    {cityFilter? cityFilter : "DKI Jakarta"}
                                </Typography>
                                <Typography color={"text.primary"}>{`Jumlah Anggota: ${filteredMemberData.length}`}</Typography>
                            </Stack>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}