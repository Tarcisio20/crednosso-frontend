"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import  { getUserById, editUserById }  from '@/api/admin'
import { ButtonComuns } from "@/components/admin/ButtonComuns"
import { TitlePage } from "@/components/admin/TitlePage"
import { ErrorComponent } from "@/components/admin/ErrorComponent"

type Props = {
    token : string | undefined;
    idUser : string | undefined;
}

export const UserEdit = ({ token, idUser } : Props) => {

    const param = useParams()
    const router = useRouter()

    const [loading, setLoading] = useState(false)
    const [nameUser, setNameUser] = useState('')
    const [emailUser, setEmailUser] = useState('')
    const [nivelUser, setNivelUser] = useState('')
    const [statusUser, setStatusUser] = useState('')
    const [msgError, setMsgError] = useState('')

    useEffect(()=>{
        getUser()
    }, [])

    const getUser = async () => {
        setLoading(true)
        const us = await getUserById(token as string ,  idUser as string, param.id as string)
        setLoading(false)
        setNameUser(us.user?.name_full)
        setEmailUser(us.user?.email)
        setNivelUser(us.user?.user_type)
        setStatusUser(us.user?.status === true ? '1' : '0')
    }

    const handleEditUser = async () => {
        if(nameUser !== '' && emailUser !== '' && nivelUser !== '' && statusUser !== ''){
            const userEdited = await editUserById(token as string, idUser as string , param.id as string, {
                name_full : nameUser !== '' ? nameUser : '',
                email : emailUser !== '' ? emailUser : '',
                user_type : nivelUser,
                status : statusUser === '0' ? false : true,
            })
            if(userEdited.error) setMsgError(userEdited.error)
            if(!userEdited.error) router.push('/admin/user')
        }else{
            setMsgError('Favor, Preencher todos os campos!')
        }

    }

    return(
        <>
            <TitlePage title="Editar Usuário" />
            {!loading && (
            <div className="flex flex-col gap-2 items-center justify-center w-full">
                <label className="text-center uppercase font-bold">INFORMAÇÕES GERAIS</label>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">NOME</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center" type="text" defaultValue={nameUser} onChange={e=>setNameUser(e.target.value)}  />
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">E-MAIL</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center" type="text" defaultValue={emailUser} onChange={e=>setEmailUser(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">NIVEL</label>
                    <select className="h-6 rounded outline-none text-gray-900 text-center" value={nivelUser} onChange={e=>setNivelUser(e.target.value)} >
                        <option value="comum"  >COMUM</option>
                        <option value="admin" >ADMIN</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">STATUS</label>
                    <select className="h-6 rounded outline-none text-gray-900 text-center" value={statusUser || 0} onChange={e=>setStatusUser(e.target.value)} >
                        <option value="1">ATIVO</option>
                        <option value="0">INATIVO</option>
                    </select>
                </div>
                <div className="flex items-center justify-center mt-3 w-2/3">
                    <ButtonComuns label="Editar Usuário" color="green" onClick={handleEditUser} />
                    <ButtonComuns label="Resetar senha" color="cyan" onClick={()=>{}} />
                </div>
            </div>
            )}
            {!loading && msgError !== '' &&  <ErrorComponent label={msgError} /> }
        </>
    )
}