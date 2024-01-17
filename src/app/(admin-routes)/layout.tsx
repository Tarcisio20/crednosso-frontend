import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { MenuAdmin } from "@/components/admin/MenuAdmin";

interface PrivateLayoutProps {
    children : ReactNode
}

export default async function PrivateLayout({ children } : PrivateLayoutProps){
    const session = await getServerSession(nextAuthOptions)

    if(!session){
        redirect('/login')
    }

    return <>
            <MenuAdmin />
            <div className="flex flex-col gap-4 h-full items-center justify-center p-4">
                {children}
            </div>
        </>
}