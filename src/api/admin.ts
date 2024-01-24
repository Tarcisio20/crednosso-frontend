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

export const getAllOrderType = async (token : string, idUser : string) => {
    try {
        const data = {}
        const headersForReq = {
            ...headersPadrao,
            'Authorization' : `Token ${token}`,
            'id' : idUser
        }
        const config : AxiosRequestConfig = {
            headers : headersForReq
        }
        const json = await req.get('/admin/order_type', config)
        return json.data

    } catch(error) { return false }
}

export const getAllUser = async (token : string, idUser : string) => {
    try {
        const headersForReq = {
            ...headersPadrao,
            'Authorization' : `Token ${token}`,
            'id' : idUser
        }
        const config : AxiosRequestConfig = {
            headers : headersForReq
        }
        const json = await req.get('/admin/user', config)
        return json.data

    } catch(error) { return false }
}

export const getUserById = async (token : string, idUser : string, idEdit : string) => {
    try {
        const headersForReq = {
            ...headersPadrao,
            'Authorization' : `Token ${token}`,
            'id' : idUser
        }
        const config : AxiosRequestConfig = {
            headers : headersForReq
        }
        const json = await req.get(`/admin/user/${idEdit}`, config)

        return json.data

    } catch(error) { return false }
}
type AdduserProps = {
    name : string;
    email : string;
    type : string;
}
export const addUser = async (token : string, idUser : string, data : AdduserProps) => {
    try {
        const headersForReq = {
            ...headersPadrao,
            'Authorization' : `Token ${token}`,
            'id' : idUser
        }
        const config : AxiosRequestConfig = {
            headers : headersForReq
        }
        const json = await req.post(`/admin/user`, data, config)

        return json.data

    } catch(error) { return false }
}

export const editUserById = async (token : string, idUser : string, idEdit : string, data : {}) => {
    try {
        const headersForReq = {
            ...headersPadrao,
            'Authorization' : `Token ${token}`,
            'id' : idUser
        }
        const config : AxiosRequestConfig = {
            headers : headersForReq
        }
        const json = await req.put(`/admin/user/${idEdit}`, data, config)
        console.log(json.data)
        return json.data

    } catch(error) { return false }
}

export const getOrderTypes = async (token : string, idUser : string) => {
    try{
        const headersForReq = {
            ...headersPadrao,
            'Authorization' : `Token ${token}`,
            'id' : idUser
        }
        const config : AxiosRequestConfig = {
            headers : headersForReq
        }
        const json = await req.get('/admin/order_type', config)
        return json.data
    }catch(error){ return false }
}

export const addOrderType = async (token : string, idUser : string, data : {  name_full : string }) => {
    try{
        const headersForReq = {
            ...headersPadrao,
            'Authorization' : `Token ${token}`,
            'id' : idUser
        }
        const config : AxiosRequestConfig = {
            headers : headersForReq
        }
        const json = await req.post('/admin/order_type', data, config)
        return json.data
    }catch(error){ return false }
}


