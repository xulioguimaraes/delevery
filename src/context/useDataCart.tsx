import { createContext, Dispatch, ReactNode, useContext, useState } from "react";
import { ItensAttributesTypes } from "../interfaces/dataInterfaces";
interface DataCartProviderProps {
    children: ReactNode
}
interface IAtrinusts extends ItensAttributesTypes {
    qtd: number

}
export interface ICart {
    name: string
    price: string
    id: string
    qtdItem: number
    image: string
    idItemCart: number
    description: string
    obs: string
    attributes: IAtrinusts[]
}
interface IDataCart {
    cart: ICart[]
    setCart: Dispatch<any>
}
const DataCartContext = createContext({} as IDataCart)

export const DataCartProvider = ({ children }: DataCartProviderProps) => {
    const [cart, setCart] = useState<ICart[]>([])
    return <>
        <DataCartContext.Provider value={{ cart, setCart }}>
            {children}
        </DataCartContext.Provider>
    </>
}

export const useDataCart = () => useContext(DataCartContext)