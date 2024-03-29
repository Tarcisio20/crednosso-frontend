"use client"

import { useEffect, useState } from "react"
import { AtmType } from "@/types/AtmType"
import { TreasuryType } from "@/types/TreasuryType"
import { getAllAtms, getAllTreasuries, getTreasuryById } from "@/api/admin"
import { ButtonForRedirects } from "@/components/admin/ButtonForRedirects"
import { ButtonTableActions } from "@/components/admin/ButtonTableActions"
import { NothingToShow } from "@/components/admin/NothingToShow"
import { TitlePage } from "@/components/admin/TitlePage"
import { useRouter } from "next/navigation"

type Props = {
    token : string | undefined;
    idUser : string | undefined;
}

export const AtmHome = ({ token , idUser } : Props) => {

    const router = useRouter()

    const [atms, setAtms] = useState<AtmType[] | []>([])
    const [treasuries, setTreasuries] = useState<TreasuryType[] | []>([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        getAtmsFunction()
        getTreasuriesFunction()
    }, [])

    const getAtmsFunction = async () => {
        setLoading(true)
        const at = await getAllAtms(token as string, idUser as string)
        setAtms(at.atms)
        setLoading(false)
    }

    const getTreasuriesFunction = async () => {
        setLoading(true)
        const t = await getAllTreasuries(token as string, idUser as string)
        setTreasuries(t.treasuries)
        setLoading(false)
    }

    const nameTreasuryById = (id : string) => {
        for(let x = 0; x < treasuries.length; x++){
            if(id == treasuries[x].id_system){
                return treasuries[x].shortened_name
            }
        }
        return ''
    }

    const edit = (id : string) => {
        router.push(`atm/edit/${id}`)
    }

    return(
        <>
            <TitlePage title="ATM'S" />
            <ButtonForRedirects label="Adicionar Atm" url="/admin/atm/add" />
            <div className="p-4 w-full">
                {!loading && atms.length > 0 && 
                <table width="100%" className="text-center table-auto border-collapse border rounded">
                    <thead>
                        <tr className="bg-slate-500 text-lg text-center border-b-2 border-y-slate-400 rounded" >
                            <th>ID SISTEMA</th>
                            <th>NOME</th>
                            <th>N. REDUZIDO</th>
                            <th>TRANSPORTADORA</th>
                            <th>STATUS</th>
                            <th>AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                    {!loading && atms.map((item, key) => (
                       <tr key={key} className="py-2 ">
                        <th>{item.id_system}</th>
                        <th>{item.name_full}</th>
                        <th>{item.shortened_name}</th>
                        <th> {nameTreasuryById(item.id_treasury)}</th>
                        <th>{item.status === true ? 'Ativo' : 'Inativo'}</th>
                        <th className="flex justify-center  items-center gap-2">
                            <ButtonTableActions label="Editar" color="cyan" page="atm" type="edit"  idElement="1" onclick={()=>edit(item.id)} />
                            <ButtonTableActions label="Excluir" color="red" page="atm" type="edit"  idElement="1" onclick={()=>{}} />
                        </th>
                        </tr> 
                    ))}
                    </tbody>
                </table>
                }
                {!loading && atms.length <= 0 && <NothingToShow label="Atm" />}
            </div>
        </>
    )
} 