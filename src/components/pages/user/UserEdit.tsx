"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import  { getUserById, editUserById }  from '@/api/admin'
import { ButtonComuns } from "@/components/admin/ButtonComuns"
import { TitlePage } from "@/components/admin/TitlePage"

type Props = {
    token : string | undefined;
    idUser : string | undefined;
}

export const UserEdit = ({ token, idUser } : Props) => {

    const param = useParams()

    const [loading, setLoading] = useState(false)
    const [nameUser, setNameUser] = useState('')
    const [emailUser, setEmailUser] = useState('')
    const [nivelUser, setNivelUser] = useState('')
    const [statusUser, setStatusUser] = useState('')

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
        setStatusUser(us.user?.status)
        console.log(us)
    }

    const handleEditUser = async () => {
        const userEdited = await editUserById(token as string, idUser as string , param.id as string, {
            name_full : nameUser !== '' ? nameUser : '',
            email : emailUser !== '' ? emailUser : '',
            user_type : nivelUser,
            status : statusUser,
        })
        console.log(userEdited)
    }

    return(
        <>
            <TitlePage title="Editar Usuário" />
            {!loading && (
            <div className="flex flex-col gap-2 items-center justify-center w-full">
                <label className="text-center uppercase font-bold">Informações Gerais</label>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">Nome</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center" type="text" defaultValue={nameUser} onChange={e=>setNameUser(e.target.value)}  />
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">E-mail</label>
                    <input className="h-6 rounded outline-none text-gray-900 text-center" type="text" defaultValue={emailUser} onChange={e=>setEmailUser(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">Nivel</label>
                    <select className="h-6 rounded outline-none text-gray-900 text-center" value={nivelUser} onChange={e=>setNivelUser(e.target.value)} >
                        <option value="comum"  >Comum</option>
                        <option value="admin" >Admin</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2 w-1/3 text-center">
                    <label className="uppercase">Status</label>
                    <select className="h-6 rounded outline-none text-gray-900 text-center" value={statusUser} onChange={e=>setStatusUser(e.target.value)} >
                        <option value="1">Ativo</option>
                        <option value="0">Inativo</option>
                    </select>
                </div>
                <div className="flex items-center justify-center mt-3 w-2/3">
                    <ButtonComuns label="Editar Usuário" color="green" onClick={handleEditUser} />
                    <ButtonComuns label="Resetar senha" color="green" onClick={()=>{}} />
                </div>
            </div>
            )}
            {loading && <p>Aguarde</p>}
        </>
    )
}