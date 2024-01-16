"use client"
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function  ButtonLogout(){
    const router = useRouter()

 async function logout(){
    await signOut({
        redirect : false
    })

    router.replace('/login')
 }  
 
 return <button onClick={logout}>Sair</button>
}