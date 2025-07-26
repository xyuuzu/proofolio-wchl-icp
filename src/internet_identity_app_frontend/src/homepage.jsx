import React, { useState } from "react";
import { useAuth } from "./AuthProvider";


export default function Homepage(){
    
    const [result,setResult] = useState("");
    
    const {callFunction , logout} =useAuth();

    const handleClick = async () => {
        const id = await callFunction.idprincipal();

        setResult(id);
    }
 
    return (
        <div>
            <h2>Wellcome to homePage</h2>
        
                <button
                type="button"
                onClick ={handleClick}>
                    Show ID
                </button>

                <h3>This is your id principal {result}</h3>

                <button id="logout" onClick={logout}>
                    logout
                </button>
        </div>
    )
}