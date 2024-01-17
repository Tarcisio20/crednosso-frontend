"use client"
import React, { useEffect, useState } from "react";
import { TitlePage } from "@/components/admin/TitlePage"
import { ButtonForRedirects } from "@/components/admin/ButtonForRedirects";
import { useSession } from "next-auth/react";
import { getAllSupply } from "@/api/admin";
import { SupplyTypes } from "@/types/SupplyTypes";
import { TablesScreen } from "@/components/admin/TablesScreen";


const Page =  () => {
    const [supplys, setSupplys] = useState<SupplyTypes | undefined>()    
    const { data : session, status } = useSession()
    
    useEffect(()=>{
        getSupply()
    })
    const getSupply = async () => {
        const s = await getAllSupply(session?.userReturn.token ?? '', session?.userReturn.idUser ?? '')
        setSupplys(s.supplys)
    }
    return(
        <>
            <TitlePage title="Abastecimentos" />
            <ButtonForRedirects label="Adicionar" url="/admin/supply/add" />
            {supplys  && supplys.length > 0 &&  <TablesScreen />}
            {supplys && supplys.length <= 0 && <p className="text-lg  text-red-400">Nada a mostrar</p>}
        </>
    )
}


export default Page