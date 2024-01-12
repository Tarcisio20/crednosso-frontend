import { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextProps  {
    accessToken : string | null;
    idUser : string | null;
    setAuth : (token : string, id : string) => void; 
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

interface AuthProviderProps {
    children : ReactNode;
}

export const AuthProvider : React.FC<AuthProviderProps> = ({ children }) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [idUser, setIdUser] = useState<string | null>(null);

    const setAuth = (token: string, id: string) => {
        setAccessToken(token);
        setIdUser(id);
      };

      return(
        <AuthContext.Provider value={{ accessToken, idUser, setAuth }}>
            {children}
        </AuthContext.Provider>
      )
}

export const useAuth = () : AuthContextProps => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context
}