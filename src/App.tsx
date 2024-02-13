import { lazy } from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const AccountPage = lazy(() => import("./pages/AccountPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
import ProtectedRoute from "./components/utils/ProtectedRoute";
import AuthRequired from "./components/utils/AuthRequired";
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
import SuspenseLoader from "./components/utils/SuspenseLoader";
const ResetPasswordPage = lazy(() => import("./pages/ResetPasswordPage"));
const LogoutPage = lazy(() => import("./pages/LogoutPage"));
const VerifyEmailPage = lazy(() => import("./pages/VerifyEmailPage"));
const AccountActivationPage = lazy(
    () => import("./pages/AccountActivationPage")
);
const PasswordResetConfirmPage = lazy(
    () => import("./pages/PasswordResetConfirmPage")
);
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const SecurityPage = lazy(() => import("./pages/SecurityPage"));
const UpdateImage = lazy(() => import("./pages/UpdateImage"));
const UpdateInfo = lazy(() => import("./pages/UpdateInfo"));
import MainLayout from "./layouts/MainLayout";
import FrameLayout from "./layouts/FrameLayout";
const ChangePasswordPage = lazy(() => import("./pages/ChangePasswordPage"));

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<MainLayout />}>
            <Route path="/logout" element={<LogoutPage />} />

            <Route path="/privacy" element={<PrivacyPage />} />
            <Route element={<ProtectedRoute />}>
                <Route
                    path="/accounts/password/reset/confirm/:uid/:token"
                    element={<PasswordResetConfirmPage />}
                />

                <Route index element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                <Route path="/verify-email" element={<VerifyEmailPage />} />
                <Route
                    path="/accounts/activate/:token"
                    element={<AccountActivationPage />}
                />
            </Route>
        </Route>,
        // Protected Routes
        <Route path="/" element={<FrameLayout />}>
            <Route element={<AuthRequired />}>
                <Route index path="/account/home" element={<AccountPage />} />
                <Route path="/account/info" element={<ProfilePage />} />
                <Route path="/account/security" element={<SecurityPage />} />
                <Route path="/account/update/image" element={<UpdateImage />} />
                <Route path="/account/update/info" element={<UpdateInfo />} />
                <Route
                    path="/account/password/change"
                    element={<ChangePasswordPage />}
                />
            </Route>
        </Route>,
        <Route
            path="*"
            element={
                <SuspenseLoader>
                    <NotFoundPage />
                </SuspenseLoader>
            }
        />,
    ])
);

function App() {
    return (
        <>
            <RouterProvider router={router} />

            <Toaster />
        </>
    );
}

export default App;
