/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Select from "react-select";

const GenderSelect = ({ sendValue }: { sendValue: (value: any) => void }) => {
    // Define options for gender select
const [value, setValue] = useState<any>("");

const customStyles = {
    control: (provided: any) => ({
        ...provided,
        padding: "4px",
        display: "flex",
        flexWrap: "nowrap",
        borderRadius: "7px",
    }),
    menu: (provided: any) => ({
        ...provided,
    }),
};



    const changeHandler = (value: any) => {
        setValue(value);
        sendValue(value);
    };


    const options = [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" },
    ];

    return (
        <Select
            name="gender"
            options={options}
            value={value}
            onChange={changeHandler}
            styles={customStyles}
            placeholder="Select Gender"
            isSearchable={false}
        />
    );
};

export default GenderSelect;
