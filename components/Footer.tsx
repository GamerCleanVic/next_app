import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

const Footer = () => {
    return(
        <pre 
            className="
                bg-[#DEBACE]
                rounded-[5px]
                pr-5
                pl-5
                pb-2
                pt-2
                flex
                flex-row
                justify-around
                text-[#FBFACD]

            "
        >
            <Link href={'#'} className="
                bg-[#7F669D]
                pr-3
                pl-3
                pb-[1.7px]
                pt-[1.7px]
                mr-2
                ml-2
                rounded-[5px]
                text-center
                uppercase
                font-bold
            ">
                <i className="fa-brands fa-linkedin mr-1"></i>
                LinkedIn
            </Link>
            <Link href={'#'} className="
                bg-[#7F669D]
                pr-3
                pl-3
                pb-[1.7px]
                pt-[1.7px]
                mr-2
                ml-2
                rounded-[5px]
                text-center
                uppercase
                font-bold
            ">
                <i className="fa-brands fa-square-twitter mr-1"></i>
                Twitter
            </Link>
            <Link href={'#'} className="
                bg-[#7F669D]
                pr-3
                pl-3
                pb-[1.7px]
                pt-[1.7px]
                mr-2
                ml-2
                rounded-[5px]
                text-center
                uppercase
                font-bold
            ">
                <i className="fa-brands fa-square-instagram mr-1"></i>
                Instagram
            </Link>
            <Link href={'#'} className="
                bg-[#7F669D]
                pr-3
                pl-3
                pb-[1.7px]
                pt-[1.7px]
                mr-2
                ml-2
                rounded-[5px]
                text-center
                uppercase
                font-bold
            ">
                <i className="fa-brands fa-square-facebook mr-1"></i>
                Facebook
            </Link>
        </pre>
    );
}
export default Footer;