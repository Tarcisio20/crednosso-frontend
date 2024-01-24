"use client"

import { useEffect, useState } from "react"
import { TreasuryType } from "@/types/TreasuryType"
import { getAllTreasuries } from '@/api/admin'
import { ButtonForRedirects } from "@/components/admin/ButtonForRedirects"
import { ButtonTableActions } from "@/components/admin/ButtonTableActions"
import { TitlePage } from "@/components/admin/TitlePage"
import { NothingToShow } from "@/components/admin/NothingToShow"
type Props = {
    token : string | undefined;
    idUser : string | undefined;
}

export const TreasuryHome =  ({ token, idUser } : Props) => {

    const [treasuries, setTreasuries] = useState<TreasuryType[] | []>([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        getAllTreasuriesFunction()
    }, [])

    const getAllTreasuriesFunction =  async () => {
        setLoading(true)
        const allt = await getAllTreasuries(token as string, idUser as string)
        setTreasuries(allt.treasuries)
        setLoading(false)
    }

    return (
        <>
            <TitlePage title="Tesourarias" />
            <ButtonForRedirects label="Adicionar Tesouraria" url="/admin/treasury/add" />
            <div className="p-4 w-full">
                {!loading && treasuries.length > 0 && (
                <table width="100%" className="text-center table-auto border-collapse border rounded">
                    <thead>
                        <tr className="bg-slate-500 text-lg text-center border-b-2 border-y-slate-400 rounded" >
                            <th>Id</th>
                            <th>Nome Completo</th>
                            <th>Nome Reduzido</th>
                            <th>Saldo R$ 10,00</th>
                            <th>Saldo R$ 20,00</th>
                            <th>Saldo R$ 50,00</th>
                            <th>Saldo R$ 100,00</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="py-2 ">
                            <th>1</th>
                            <th>Tesouraria 1</th>
                            <th>Tesouraria Reduzido</th>
                            <th>R$ 00,00</th>
                            <th>R$ 00,00</th>
                            <th>R$ 00,00</th>
                            <th>R$ 00,00</th>
                            <th>1</th>
                            <th className="flex justify-center  items-center gap-2">
                                <ButtonTableActions label="Editar" page="treasury" idElement={"1"} type="edit" color="cyan" onclick={()=>{}} />
                                <ButtonTableActions label="Rejeitar" page="treasury" color="red" type="del" idElement={"1"} onclick={()=>{}} />
                            </th>
                        </tr>
                        <tr className="py-2 ">
                            <th>2</th>
                            <th>Tesouraria 2</th>
                            <th>Tesouraria Reduzido</th>
                            <th>R$ 00,00</th>
                            <th>R$ 00,00</th>
                            <th>R$ 00,00</th>
                            <th>R$ 00,00</th>
                            <th>1</th>
                            <th className="flex justify-center  items-center gap-2">
                                <ButtonTableActions label="Editar" page="treasury" idElement={"2"} type="edit" color="cyan" onclick={()=>{}} />
                                <ButtonTableActions label="Rejeitar" page="treasury" idElement={"2"} type="del" color="red" onclick={()=>{}} />
                            </th>
                        </tr>
                    </tbody>
                </table>
                )}
                {!loading && treasuries.length === 0 && <NothingToShow label="Tesourarias" />}
            </div>
        </>
    )
}