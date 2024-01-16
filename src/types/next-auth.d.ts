import NextAuth from "next-auth"

declare module 'next-auth' {
    interface Session {

            userReturn : {
                idUser : string
                token : string
                nivel : string
            }  
        
    }
}