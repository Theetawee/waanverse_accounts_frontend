import { createContext, useState } from "react";
import { TopBarContextType } from "../hooks/types";

export const TopBarContext = createContext<TopBarContextType>({
    title: "",
    setTitle: () => { },
    back: false,
    setBack: () => { },
});


const TopBarContextProvider = ({ children }:{children: React.ReactNode}) => {
    const[back,setBack]=useState(false);
    const [title,setTitle]=useState("");

    const contextData = {
        title,
        setTitle,back,setBack
    };



    return (
        <TopBarContext.Provider value={contextData}>
            {children}
        </TopBarContext.Provider>
    )


}


export default TopBarContextProvider;
