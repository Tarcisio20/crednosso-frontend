"use client"

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getOperationTypeById, editOperartionType } from '@/api/admin'
import { ButtonComuns } from "@/components/admin/ButtonComuns"
import { TitlePage } from "@/components/admin/TitlePage"
import { ErrorComponent } from "@/components/admin/ErrorComponent";

type Props = {
    token : string | undefined;
    idUser : string | undefined;
}

export const OperationTypeEdit = ({ token, idUser } : Props) => {
    
    const params = useParams()
    const router = useRouter()

    const [nameOperationType, setNameOperationType] = useState('')
    const [statusOperationType, setStatusOperationType] = useState('')
    const [loading, setLoading] = useState(false)
    const [msgError, setMsgError] = useState('')

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

    const addOperationType = async () => {
        setLoading(true)
        if(nameOperationType !== '' && statusOperationType !== ''){
            const OperationTypeEdited = await editOperartionType(token as string, idUser as string, params.id.toString(), 
            { name_full : nameOperationType, status : statusOperationType === '1' ? true : false  }
            )
            if(OperationTypeEdited.error){
                setMsgError(OperationTypeEdited.error)
            }
            if(OperationTypeEdited.operationType){
                router.back()
            }else{
                setMsgError('Erro ao Editar, favor tentar novamente mais tarde!')
            }
        }else{
            setMsgError('Favor, Preencher todos os campos!')
        }
        setLoading(false)
    }

    return(
        <>
            <TitlePage title="Editar Tipo de Operação" />
            <div className="flex flex-col gap-2 items-center justify-center w-full">
                <label className="text-center uppercase font-bold">INFORMAÇÕES GERAIS</label>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">NOME COMPLETO</label>
                    <input 
                        className="h-6 rounded outline-none text-gray-900 text-center" 
                        disabled={loading} 
                        type="text" 
                        value={nameOperationType}
                        onChange={e=>setNameOperationType(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">STATUS</label>
                    <select className="h-6 rounded outline-none text-gray-900 text-center" disabled={loading} value={statusOperationType} onChange={e=>setStatusOperationType(e.target.value)} >
                        <option value="1">ATIVO</option>
                        <option value="0">INATIVO</option>
                    </select>
                </div>
                <div className="flex items-center justify-center mt-3 w-2/3">
                    <ButtonComuns label={!loading ? "Editar Tipo de Operação" : "Aguarde ..."} disabled={loading} color="green" onClick={addOperationType} />
                </div>
                {!loading && msgError !== '' && <ErrorComponent label={msgError} />}
            </div>
        </>
    )
}