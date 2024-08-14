"use client"
import { createTheme } from "@mui/material"
import { Hanken_Grotesk } from "next/font/google"

const hankenGrotesk = Hanken_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
})

const theme = createTheme({
    typography: {
        fontFamily: hankenGrotesk.style.fontFamily,
        fontSize: 16,
        fontWeightLight: 300,
        fontWeightReguler: 400,
        fontWeightMedium: 500,
        fontWeightSemibold: 600,
        fontWeigtBold: 700
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 240,
            md: 600,
            lg: 1000,
            xl: 1500,
        }
    },
    palette: {
        primary: {
            main: "#0532BB",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#C3F500",
            contrastText: "#49454F"
        },
        text: {
            primary: "#ffffff",
            secondary: "#000000",
        },
        background: {
            default: "#49454F"
        }

    },
    zIndex: {
        fab: 1050,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    textTransform: "none",
                    minWidth: 0,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                },
            },
        },
    }
})

export default theme