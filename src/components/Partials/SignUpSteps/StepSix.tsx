import { useRef, useState } from "react";
import StepFrame from "./StepFrame";
import CountrySelector from "../../common/CountrySelector";




// Step six handles the country
const StepSix = () => {

    const [country,setCountry]=useState('')

    const countryRef = useRef<HTMLInputElement>(null);

    const countryInput = (
        <div>
            <p className="mb-2 text-gray-700 text-lg">What's your country?</p>
            <CountrySelector sendValue={(value) => setCountry(value.label)}/>
            <input type="hidden" id="waanverse_user_country" name="country" ref={countryRef} value={country} />
        </div>
    );

    return (
        <>
            <StepFrame
                childOne={countryInput}
                next={true}
                nextStep={7}
                refName={countryRef}
            />
        </>
    );
};

export default StepSix;
