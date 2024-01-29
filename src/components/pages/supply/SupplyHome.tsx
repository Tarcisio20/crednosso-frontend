"use client"
import React, { useEffect, useState } from "react";
import { TitlePage } from "@/components/admin/TitlePage"
import { ButtonForRedirects } from "@/components/admin/ButtonForRedirects";
import { getAllSupply } from "@/api/admin";
import { SupplyTypes } from "@/types/SupplyTypes";
import { ButtonTableActions } from "@/components/admin/ButtonTableActions";
import { NothingToShow } from "@/components/admin/NothingToShow";

type Props = {
    token : string | undefined;
    idUser : string | undefined;
}

export const  SupplyHome =  ({ token, idUser } : Props) => {
    const [supplys, setSupplys] = useState<SupplyTypes | []>([])
    const [atms, setAtms] = useState()
    const [loading, setLoading] = useState(false)
    
    useEffect(()=>{
        getSupply()
    }, [])
    const getSupply = async () => {
        setLoading(true)
        const s = await getAllSupply(token as string, idUser as string)
        setSupplys(s.supplys)
        setLoading(false)
    }
    return(
        <>
            <TitlePage title="Abastecimentos" />
            <ButtonForRedirects label="Adicionar Abastecimento" url="/admin/supply/add" />
            <div className="p-4 w-full">
                {!loading && supplys.length > 0 && 
                <table width="100%" className="text-center table-auto border-collapse border rounded">
                    <thead>
                        <tr className="bg-slate-500 text-lg text-center border-b-2 border-y-slate-400 rounded" >
                            <th>Id</th>
                            <th>Id Atm</th>
                            <th>Data</th>
                            <th>Valor Total</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="py-2 ">
                            <th>1</th>
                            <th>Atm</th>
                            <th>15/02/2024</th>
                            <th>R$ 500.000,00</th>
                            <th>Aguardando Aprovação</th>
                            <th className="flex justify-center  items-center gap-2">
                                <ButtonTableActions label="Editar" type="edit" page="order" idElement="1" color="cyan" onclick={()=>{}} />
                                <ButtonTableActions label="Rejeitar" type="del" page="order" idElement="1" color="red" onclick={()=>{}} />
                            </th>
                        </tr>
                        <tr className="py-2 bg-slate-500">
                            <th>2</th>
                            <th>12482</th>
                            <th>16/02/2024</th>
                            <th>R$ 250.000,00</th>
                            <th>Recusado</th>
                            <th className="flex justify-center  items-center gap-2" >
                                <ButtonTableActions label="Editar" type="edit" page="order" idElement="1" color="cyan" onclick={()=>{}} />
                                <ButtonTableActions label="Rejeitar" type="del" page="order" idElement="1" color="red" onclick={()=>{}} />
                            </th>
                        </tr>
                    </tbody>
                </table>
                }
                {!loading && supplys.length <= 0 && <NothingToShow label="Abastecimentos" />}
            </div>
        </>
    )
}