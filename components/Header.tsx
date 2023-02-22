import Link from "next/link";

const Header = () => {
    return(
        <div className="
            flex
            flex-row
            justify-around
        ">
            <Link href={'/'} className="
                bg-[#7F669D]
                text-[#FBFACD]
                pb-[1.7px]
                pt-[1.7px]
                pl-5
                pr-5
                mr-3
                ml-3
                rounded-[5px]
            ">
                Home
            </Link>
            <Link href={'/artigos'} className="
                bg-[#7F669D]
                text-[#FBFACD]
                pb-[1.7px]
                pt-[1.7px]
                pl-5
                pr-5
                mr-3
                ml-3
                rounded-[5px]
            "
            >
                Artigos
            </Link>
            <Link href={'/videos'} className="
                bg-[#7F669D]
                text-[#FBFACD]
                pb-[1.7px]
                pt-[1.7px]
                pl-5
                pr-5
                mr-3
                ml-3
                rounded-[5px]
            "
            >
                Vídeos
            </Link>
            <Link href={'/sobre'} className="
                bg-[#7F669D]
                text-[#FBFACD]
                pb-[1.7px]
                pt-[1.7px]
                pl-5
                pr-5
                mr-3
                ml-3
                rounded-[5px]
            "
            >
                Sobre
            </Link>
        </div>
    );
}
export default Header;