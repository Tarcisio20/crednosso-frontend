"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getAllOperationType } from '@/api/admin'
import { OperationTypeType } from '@/types/OperationTypeType'
import { ButtonForRedirects } from "@/components/admin/ButtonForRedirects"
import { ButtonTableActions } from "@/components/admin/ButtonTableActions"
import { NothingToShow } from '@/components/admin/NothingToShow'
import { TitlePage } from "@/components/admin/TitlePage"

type Props = {
    token : string | undefined;
    idUser : string | undefined;
}

export const OperationTypeHome =  ({ token, idUser } : Props) => {

    const router = useRouter()

    const [operationTypes, setOperationTypes] = useState<OperationTypeType[] | []>([])
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        getOperationTypeFunction()
    }, [])

    const getOperationTypeFunction = async () => {
        setLoading(true)
        const ot = await getAllOperationType(token as string, idUser as string)
        setOperationTypes(ot.operationType)
        setLoading(false)
    }   

    const edit =  (id : number) => {
        router.push(`operationType/edit/${id}`)
    }

    return (
        <>
            <TitlePage title="Tipos de Operação" />
            <ButtonForRedirects label="Adicionar Tipo de Operação" url="/admin/operationType/add" />
            <div className="p-4 w-full">
            {!loading  && operationTypes.length > 0 && (
                <table width="100%" className="text-center table-auto border-collapse border rounded">
                    <thead>
                        <tr className="bg-slate-500 text-lg text-center border-b-2 border-y-slate-400 rounded" >
                            <th>Id</th>
                            <th>Nome Completo</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading && operationTypes.map((item, key)=>(
                        <tr key={key} className="py-2 ">
                            <th>{item.id}</th>
                            <th>{item.name_full}</th>
                            <th>{item.status === true ? 'Ativo' : 'Inativo'}</th>
                            <th className="flex justify-center  items-center gap-2">
                                <ButtonTableActions label="Editar" page="operationType" type="edit" idElement={"1"} color="cyan" onclick={()=>edit(parseInt(item.id))} />
                                <ButtonTableActions label="Excluir" page="operationType" type="del" color="red" idElement={"1"} onclick={()=>{}} />
                            </th>
                        </tr>
                        ))}
                    </tbody>
                </table>
                )}
                {!loading && operationTypes.length === 0 && <NothingToShow label='Tipo de Operação' />}
            </div>
        </>
    )
}