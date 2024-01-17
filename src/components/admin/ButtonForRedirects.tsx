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
        <button onClick={handleRedirect} className="bg-green-600 border-b-4 border-b-green-600 px-4 py-2 rounded text-xl hover:border-b-4 hover:border-b-slate-600" >{label}</button>
    )
}