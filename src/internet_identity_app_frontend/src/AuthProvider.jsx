import React, { createContext,useContext, useEffect, useState } from "react";
import {AuthClient} from '@dfinity/auth-client'
import {createActor} from 'declarations/internet_identity_app_backend';

const AuthContext = createContext();

const defaultOptions = {
    createOptions :{
        idleOptions: {
            disableIdle:true
        }
    },

    loginOptions:{
        indentityProvider:"",

    }
}

export const useAuthClient = (Options = defaultOptions) =>{
    const [isAuth, setIsAuth] = useState(false);
    const [authUser, setAuhtUser] = useState(null);
    const [indentity, setIdentity] = useState(null);
    const [principal, setPrincipal] = useState(null);
    const [callFunction, setCallFunction] = useState(null);

    useEffect(()=>{
        AuthClient.create(Options.createOptions).then(async (client) => {
            updateClient(client);
        })
    })

    async function updateClient(client) {
        const isAuthenticated = await client.isAuthenticated();
        setIsAuth(isAuthenticated);

        const indentity = client.getIdentity();
        setIdentity(indentity);

        const principal = indentity.getPrincipal();
        setPrincipal(principal);

        setAuhtUser(client);

        const actor = createActor(canisterId, {
            AgentOption:{
                indentity   
            }
        })

        setCallFunction(actor)
    }

    const login = () => {
        authUser.login({
            ...Options.loginOptions,
            onSuccess: () =>
            {
                updateClient(authUser);
            }
        })
    }

    async function logout(){
        await authUser?.logout();
        await updateClient(authUser);
    }

    return{
        isAuth,
        login,
        logout,
        authUser,
        indentity,
        principal,
        callFunction,
    }

}

export const AuthProvider = ({children}) => {
    
    const auth = useAuthClient();    
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);