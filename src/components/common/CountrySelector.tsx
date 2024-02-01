/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function CountrySelector() {
    const [value, setValue] = useState<any>("");
    const options = useMemo(() => countryList().getData(), []);

    const changeHandler = (value:any) => {
        setValue(value);
    };

    return <Select options={options} value={value} onChange={changeHandler} />;
}

export default CountrySelector;
