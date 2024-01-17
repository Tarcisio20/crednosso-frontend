import { req, headersPadrao } from '@/api/axios'
import { AxiosRequestConfig } from 'axios'

export const login = async (email : string, pass : string) => { 
    try{
        const json = await req.post('/login', { email : email , password : pass})
        return json.data 
    }catch(error) { return error }
}

export const getAllSupply = async (token : string, idUser : string) => {
    try{
        const data = {}
        const headersForReq = {
            ...headersPadrao,
            'Authorization' : `Token ${token}`,
            'id' : idUser
        }
        const config : AxiosRequestConfig = {
            headers : headersForReq
        }
        const json = await req.get('/admin/supply', config)
        return json.data
    }catch(error){ return false }
}
