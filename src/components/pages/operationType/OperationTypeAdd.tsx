"use client"

import { useState } from "react";
import { addOperationType } from '@/api/admin'
import { ButtonComuns } from "@/components/admin/ButtonComuns"
import { TitlePage } from "@/components/admin/TitlePage"
import { ErrorComponent } from "@/components/admin/ErrorComponent";
import { useRouter } from "next/navigation";

type Props = {
    token : string | undefined;
    idUser : string | undefined;
}

export const OperationTypeAdd = ({ token, idUser } : Props) => {

    const router = useRouter()

    const [nameOperationType, setNameOperationType] = useState('')
    const [loading, setLoading] = useState(false)
    const [msgError, setMsgError] = useState('')

    const addOperationTypeFunction = async ()  => {
        setLoading(true)
        setMsgError('')
        if(nameOperationType !== ''){
            const addOT = await addOperationType(token as string, idUser as string, { name_full : nameOperationType })
            if(addOT.error){
                setMsgError(addOT.error)
            }
            if(addOT.success){
                router.back()
            }else{
                setMsgError('Erro ao salvar, favor tentar novamente mais tarde!')
            }
        }else{
            setMsgError('Favor, Preencer todos os campos!')
        }
        setLoading(false)
    }

    return(
        <>
            <TitlePage title="Adicionar Tipo de Operação" />
            <div className="flex flex-col gap-2 items-center justify-center w-full">
                <label className="text-center uppercase font-bold">INFORMAÇÕES GERAIS</label>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">NOME COMPLETO</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center" disabled={loading} type="text" value={nameOperationType} onChange={e=>setNameOperationType(e.target.value)} />
                </div>
                <div className="flex items-center justify-center mt-3 w-2/3">
                    <ButtonComuns label={!loading ? "Adicionar Tipo de Operação" : "Aguarde ..."} color="green" onClick={addOperationTypeFunction} />
                </div>
                {!loading && msgError !== '' && <ErrorComponent label={msgError} />} 
            </div>
        </>
    )
}