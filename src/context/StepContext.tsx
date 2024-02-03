/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";

interface StepContextType {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>
    data: DataType[]
    setData: React.Dispatch<React.SetStateAction<DataType[]>>
}

interface DataType{
    name: string
    value: string
}

export const StepContext = createContext<StepContextType>({
    step: 1,
    setStep: () => { },
    data: [],
    setData: () => { }
});


const StepContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [step, setStep] = useState(1);

    const [data, setData] = useState<DataType[]>([]);

    const contextData: StepContextType ={
        step,
        setStep,
        data,
        setData
    }


    return (
        <StepContext.Provider value={contextData}>
            {children}
        </StepContext.Provider>
    )
}


export default StepContextProvider;
