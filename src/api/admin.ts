import { req } from '@/api/axios'
import { AuthContext } from '@/contexts/AuthContext'
import { useContext } from 'react'


export const login = async (email : string, pass : string) => { 
    try{
        const json = await req.post('/login', { email : email , password : pass})
        return json.data 
    }catch(error) { return error }
}
