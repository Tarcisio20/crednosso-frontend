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
 
 return <button onClick={logout} className="bg-red-800 py-1 px-4 rounded hover:bg-red-800/80">Sair</button>
}