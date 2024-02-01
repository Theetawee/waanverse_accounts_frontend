/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function CountrySelector( {sendValue}: {sendValue: (value: any) => void}) {
    const [value, setValue] = useState<any>("");
    const options = useMemo(() => countryList().getData(), []);

    const changeHandler = (value:any) => {
        setValue(value);
        sendValue(value);
    };

    return <Select name="country" options={options} value={value} onChange={changeHandler} />;
}

export default CountrySelector;
