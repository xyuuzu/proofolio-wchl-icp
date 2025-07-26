import React from "react";
import { useAuth } from "./AuthProvider";

export default function Home(){
    const {login} = useAuth();

    return (
        <div>
            <h2>Clcik Button Below to login</h2>
                <button id="login" onClick={login}>
                    Login
                </button>
        </div>
    )
}