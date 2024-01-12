"use client"

import { FormEvent, useState } from "react"

const Page = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return(
        <div className="flex items-center justify-center h-screen">
            <form method="POST" onSubmit={handleSubmit} className="flex items-center justify-center flex-col gap-8 h-1/3 rounded-lg  shadow-sm shadow-white  bg-gray-300 p-10">
                <div className="flex items-center flex-col gap-2">
                    <label className="text-slate-700 uppercase ">E-mail</label>
                    <input 
                       type="text"
                       name="email"
                       placeholder="Digite o seu e-mail"
                       className="h-8 w-full text-slate-700 text-center outline-none rounded-lg border-2 border-slate-500"
                       value={email}
                       onChange={e=>setEmail(e.target.value)}   
                    />
                </div>
                <div className="flex items-center flex-col gap-2  h-full">
                    <label className="text-slate-700 uppercase ">Senha</label>
                    <input
                       type="password"
                       name="password"
                       placeholder="Digite o seu e-mail"
                       className="h-8 w-full text-slate-700 text-center outline-none rounded-lg border-2 border-slate-500"
                       value={pass}
                       onChange={e=>setPass(e.target.value)}
                    />
                </div>
                <div>
                    <button className="uppercase text-slate-600 bg-lime-600 h-10 w-full p-4">Entrar</button>
                </div>
            </form>
        </div>
    )
}
export default Page