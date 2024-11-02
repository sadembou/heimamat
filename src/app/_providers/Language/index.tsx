'use client'

import React, { createContext, useContext, useState, SetStateAction } from "react";

type ILanguageContextType ={
  languageChoice:string,
  setLanguageChoice: React.Dispatch<SetStateAction<string>>,
}

export const INITIAL_LANGUAGE_CHOICE_DATA = {
  languageChoice:"fo",
  setLanguageChoice: () => "fo",
}

const LanguageChoiceContext = createContext<ILanguageContextType>(INITIAL_LANGUAGE_CHOICE_DATA);

export const LanguageProvider = ({children}: {children:React.ReactNode})=>{
  const [languageChoice, setLanguageChoice] = useState("fo");
  return(
    <LanguageChoiceContext.Provider value={
      {
        languageChoice,
        setLanguageChoice
      }
    } 
    >
      {children}
    </LanguageChoiceContext.Provider>
  )
}

export const userLanguage = ()=> useContext(LanguageChoiceContext);