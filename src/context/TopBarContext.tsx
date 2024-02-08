import { createContext, useState } from "react";
import { TopBarContextType } from "../hooks/types";

export const TopBarContext = createContext<TopBarContextType>({
    title: "",
    setTitle: () => {},
});


const TopBarContextProvider = ({ children }:{children: React.ReactNode}) => {

    const [title,setTitle]=useState("");

    const contextData = {
        title,
        setTitle
    };



    return (
        <TopBarContext.Provider value={contextData}>
            {children}
        </TopBarContext.Provider>
    )


}


export default TopBarContextProvider;
