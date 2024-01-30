"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getAllTreasuries } from '@/api/admin'
import { TreasuryType } from "@/types/TreasuryType"
import { TitlePage } from "@/components/admin/TitlePage"
import { NothingToShow } from "@/components/admin/NothingToShow"
import { GenereateTotalValuesCassetesInReal } from "@/Utils/GenereateTotalValuesCassetesInReal"
import { ButtonForRedirects } from "@/components/admin/ButtonForRedirects"
import { ButtonTableActions } from "@/components/admin/ButtonTableActions"
type Props = {
    token : string | undefined;
    idUser : string | undefined;
}

export const TreasuryHome =  ({ token, idUser } : Props) => {

    const router = useRouter()

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

    const edit = (id : string) => {
        router.push(`treasury/edit/${id}`)
        return
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
                            <th>Saldo </th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading && treasuries.length > 0 && treasuries.map((item, key) =>(
                        <tr key={key} className="py-2 ">
                            <th>{item.id_system}</th>
                            <th>{item.name_full}</th>
                            <th>{item.shortened_name}</th>
                            <th>{ GenereateTotalValuesCassetesInReal( parseFloat(item.balance_cass_10), parseFloat(item.balance_cass_20), parseFloat(item.balance_cass_50), parseFloat(item.balance_cass_100) ) }</th>
                            <th>{item.status === true ? 'Ativo' : 'Inativo'}</th>
                            <th className="flex justify-center  items-center gap-2">
                                <ButtonTableActions label="Editar" page="treasury" idElement={"1"} type="edit" color="cyan" onclick={()=>edit(item.id.toString())} />
                                <ButtonTableActions label="Rejeitar" page="treasury" color="red" type="del" idElement={"1"} onclick={()=>{}} />
                            </th>
                        </tr>
                        ))}
                    </tbody>
                </table>
                )}
                {!loading && treasuries.length === 0 && <NothingToShow label="Tesourarias" />}
            </div>
        </>
    )
}