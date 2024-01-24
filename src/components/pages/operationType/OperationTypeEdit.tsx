"use client"

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getOperationTypeById } from '@/api/admin'
import { ButtonComuns } from "@/components/admin/ButtonComuns"
import { TitlePage } from "@/components/admin/TitlePage"

type Props = {
    token : string | undefined;
    idUser : string | undefined;
}

export const OperationTypeEdit = ({ token, idUser } : Props) => {
    
    const params = useParams()

    const [nameOperationType, setNameOperationType] = useState('')
    const [statusOperationType, setStatusOperationType] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        getOperationTypeByIdFunction()
    }, [])

    const getOperationTypeByIdFunction = async () => {
        setLoading(true)
        const op = await getOperationTypeById(token as string, idUser as string, params.id.toString())
        setNameOperationType(op.operationType[0].name_full)
        setStatusOperationType(op.operationType[0].status === true ? '1' : '0')
        setLoading(false)
    }

    return(
        <>
            <TitlePage title="Editar Tipo de Operação" />
            <div className="flex flex-col gap-2 items-center justify-center w-full">
                <label className="text-center uppercase font-bold">Informações Gerais</label>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">Nome</label>
                    <input 
                        className="h-6 rounded outline-none text-gray-900 text-center" 
                        disabled={loading} 
                        type="text" 
                        value={nameOperationType}
                        onChange={e=>setNameOperationType(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">Status</label>
                    <select className="h-6 rounded outline-none text-gray-900 text-center" disabled={loading} value={statusOperationType} onChange={e=>setStatusOperationType(e.target.value)} >
                        <option value="1">Ativo</option>
                        <option value="0">Inativo</option>
                    </select>
                </div>
                <div className="flex items-center justify-center mt-3 w-2/3">
                    <ButtonComuns label="Editar Tipo de Operação" color="green" onClick={()=>{}} />
                </div>
            </div>
        </>
    )
}