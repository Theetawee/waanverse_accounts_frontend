import StepFrame from "./StepFrame";

//Step Ten handles Agreement

const StepTen = () => {
    const Statement = (
        <div className="  text-gray-700">
            <p>By creating an account, you agree to our Terms and Conditions</p>
        </div>
    );

    return (
        <>
            <StepFrame childOne={Statement} next={false} />
        </>
    );
};

export default StepTen;
