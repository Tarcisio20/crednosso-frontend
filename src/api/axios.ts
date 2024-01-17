import axios from "axios";


export const headersPadrao = {
    'Content-Type' : 'application/json'
}

export const req = axios.create({
    baseURL : process.env.NEXT_PUBLIC_BASE_API,
    headers : headersPadrao
})