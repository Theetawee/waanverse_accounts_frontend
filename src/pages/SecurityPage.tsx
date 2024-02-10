import { IoKeyOutline } from "react-icons/io5";
import Card from "../components/common/Card";
import useTopBar from "../hooks/useTopBar";

const SecurityPage = () => {
    return (
        useTopBar("Security"),
        (
            <section className="px-4">
                <div>
                    <p>
                        Manage your password, protect your account, and view
                        additional security resources.
                    </p>
                </div>
                <div className="grid grid-cols-1 py-8 sm:grid-cols-2 gap-3">
                    <Card
                        name="Change Password"
                        path="/password/change"
                        icon={IoKeyOutline}
                        description="A strong password helps protect your account from unauthorized access"
                    />
                </div>
            </section>
        )
    );
};

export default SecurityPage;
