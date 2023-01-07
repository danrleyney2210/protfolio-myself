import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";


type TypeLanguage = 'en' | 'pt' | 'es'

type ContextSite = {
  language: string | any
  setLanguage: Dispatch<SetStateAction<TypeLanguage>>
}

type Props = {
  children: ReactNode
}



export const Context = createContext({} as ContextSite)


export function ContextProvider({ children }: Props) {
  const [language, setLanguage] = useState<TypeLanguage>('en')


  return (
    <Context.Provider
      value={{
        language,
        setLanguage
      }}
    >
      {children}
    </Context.Provider>
  )
}

export function useContextSite() {
  const contextSite = useContext(Context)
  return contextSite
}