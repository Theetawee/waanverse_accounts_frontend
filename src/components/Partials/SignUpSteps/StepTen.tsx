import StepFrame from "./StepFrame";

//Step Ten handles Agreement

const StepTen = () => {
    const Statement = (
        <div>
            <p>
                By creating an account, you agree to our Terms of Service and
                Privacy Policy
            </p>
            <p>
                Please make sure you have read and understood these terms before
                creating an account to avoid suspension or termination of your
                account if it violates any of these terms
            </p>
        </div>
    );

    return (
        <>
            <StepFrame childOne={Statement}  next={false} />
        </>
    );
};

export default StepTen;
