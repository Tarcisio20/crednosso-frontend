"use client"

import { Button } from "@/components/admin/Button"
import { InputFiled } from "@/components/admin/InputFiled"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

const Page = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPass] = useState<string>('')
    const [loading, setLoading] = useState(false)
    const [warning, setWarning] = useState('')

    const router = useRouter()

    const handleSubmit = async () => {
        setLoading(true)
        const result = await signIn('credentials', { email, password, redirect : false })
        if(result?.error){
            setWarning(result.error)
            setLoading(false)
            return false
        }
        setLoading(false)
        router.replace('/admin')
    }

    return(
        <div className="flex items-center justify-center h-screen">
            <div className="flex items-center justify-center flex-col gap-8 ">
                <div className="flex items-center flex-col gap-2">
                    <InputFiled
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Digite seu e-mail"
                        disabled={loading}
                    />
                    <InputFiled
                        type="password"
                        value={password}
                        onChange={e => setPass(e.target.value)}
                        placeholder="Digite a sua senha"
                        disabled={loading}
                    />
                </div>    
                <div>
                    <Button
                        value={loading ? 'Carregando...' : 'Entrar'}
                        onClick={handleSubmit}
                        disabled={loading}
                    />
                    {warning && 
                        <div className="border border-dashed border-gray-400 p-3" >{warning}</div>
                    }
                </div>
            </div>
        </div>
    )
}
export default Page