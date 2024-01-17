"use client"

import { useRouter } from "next/navigation";

type Props = {
    label : string;
    url : string;
    type? : string;
}

export const ButtonForRedirects = ({ label, url, type } : Props ) => {

    const router = useRouter()
    const handleRedirect = () => {
        router.push(url)
    }

    return (
        <button onClick={handleRedirect} >{label}</button>
    )
}