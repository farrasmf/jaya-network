import { SvgIcon } from "@mui/material";

export function CancelIcon(props) {
    return (
        <SvgIcon {...props} viewBox="0 0 14 14">
            <path d="M13.067 12.1829C13.1251 12.241 13.1712 12.3099 13.2026 12.3858C13.234 12.4617 13.2502 12.543 13.2502 12.6251C13.2502 12.7072 13.234 12.7885 13.2026 12.8644C13.1712 12.9403 13.1251 13.0092 13.067 13.0673C13.009 13.1254 12.94 13.1714 12.8642 13.2028C12.7883 13.2343 12.707 13.2505 12.6249 13.2505C12.5427 13.2505 12.4614 13.2343 12.3855 13.2028C12.3097 13.1714 12.2407 13.1254 12.1827 13.0673L6.99986 7.8837L1.81705 13.0673C1.69977 13.1846 1.54071 13.2505 1.37486 13.2505C1.20901 13.2505 1.04995 13.1846 0.932672 13.0673C0.815396 12.95 0.749512 12.791 0.749512 12.6251C0.749512 12.4593 0.815396 12.3002 0.932672 12.1829L6.11627 7.0001L0.932672 1.81729C0.815396 1.70002 0.749512 1.54096 0.749512 1.3751C0.749512 1.20925 0.815396 1.05019 0.932672 0.932916C1.04995 0.81564 1.20901 0.749756 1.37486 0.749756C1.54071 0.749756 1.69977 0.81564 1.81705 0.932916L6.99986 6.11651L12.1827 0.932916C12.2999 0.81564 12.459 0.749756 12.6249 0.749756C12.7907 0.749756 12.9498 0.81564 13.067 0.932916C13.1843 1.05019 13.2502 1.20925 13.2502 1.3751C13.2502 1.54096 13.1843 1.70002 13.067 1.81729L7.88345 7.0001L13.067 12.1829Z" />
        </SvgIcon>

    )
}

export function SortIcon() {
    return (
        <SvgIcon sx={{ fontSize: "20px"}} viewBox="0 0 19 15" >
            <path d="M17.5 1H7.5" stroke="#8F8D8F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.5 5H7.5" stroke="#8F8D8F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.5 9H7.5" stroke="#8F8D8F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.64291 1V14.143M3.64291 14.143L6.5 11.5M3.64291 14.143L1 11.5" stroke="#8F8D8F" strokeWidth="1.2" strokeLinecap="round" stroke-linejoin="round" />
        </SvgIcon>
    )
}

export function ArrowDownIcon() {
    return (
        <SvgIcon sx={{ fontSize: "20px"}} viewBox="0 0 29 34">
            <path d="M7.25 12.75L14.5 21.25L21.75 12.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </SvgIcon>
    )
}
