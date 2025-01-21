import { createContext, useState, useEffect } from "react";
import { getData } from "../api";

export const ItemsContext = createContext(null);

export const ItemsProvider = ({children})=>{
    const [items, setItems] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchItems = async()=>{
            try{
                const data = await getData();
                setItems(data)

            }catch(err){
                setError(err.message);

            }finally{
                setLoading(false)
            }

        }
        fetchItems();
    },[])

    return (
        <ItemsContext.Provider value={{items, loading,error}}>
            {children}
        </ItemsContext.Provider>
    )

}
