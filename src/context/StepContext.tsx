/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";
import { SignupFormData } from "../hooks/types";
interface StepContextType {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>
    data: SignupFormData;
    setData: React.Dispatch<React.SetStateAction<SignupFormData>>
}


export const StepContext = createContext<StepContextType>({
    step: 1,
    setStep: () => { },
    data: {
        email: "",
        password1: "",
        password2: "",
        name: "",
        username: "",
        country: "",
        phone: "",
        gender: "male",
        date_of_birth: "",

    },
    setData:()=>{}
});


const StepContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [step, setStep] = useState(1);

    const [data, setData] = useState<SignupFormData>({
        email: "",
        password1: "",
        password2: "",
        name: "",
        username: "",
        country: "",
        phone: "",
        gender: "male",
        date_of_birth: "",
    });

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
