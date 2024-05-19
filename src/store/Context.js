import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const Context = React.createContext(
    {
        item:[],
        totalItem:[],
        // contactData:[],
        token:'',
        isLoggedIn:(token)=>{},

        addCart:()=>{},
        removeCart:()=>{},
        total:()=>{}
    }
);