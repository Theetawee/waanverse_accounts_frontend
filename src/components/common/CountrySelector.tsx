/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function CountrySelector( {sendValue}: {sendValue: (value: any) => void}) {
    const [value, setValue] = useState<any>("");
    const options = useMemo(() => countryList().getData(), []);

    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            padding:"4px",
            display: "flex",
            flexWrap: "nowrap",
            borderRadius: "7px",
        }),
        menu: (provided:any) => ({
            ...provided,
        }),
    };



    const changeHandler = (value:any) => {
        setValue(value);
        sendValue(value);
    };

    return <Select styles={customStyles}  name="country" options={options} value={value} onChange={changeHandler} />;
}

export default CountrySelector;
