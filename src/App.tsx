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
import FrameLayout from "./layouts/FrameLayout";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import PrivateRoute from "./components/utils/PrivateRoute";
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
import SuspenseLoader from "./components/utils/SuspenseLoader";
const ResetPasswordPage = lazy(() => import("./pages/ResetPasswordPage"));
const LogoutPage = lazy(() => import("./pages/LogoutPage"));
const VerifyEmailPage = lazy(() => import("./pages/VerifyEmailPage"));
const AccountActivationPage = lazy(() => import("./pages/AccountActivationPage"));
const PasswordResetConfirmPage = lazy(() => import("./pages/PasswordResetConfirmPage"));
const GoogleLoginPage = lazy(() => import("./pages/GoogleLoginPage"))

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<MainLayout />}>
            <Route path="/accounts/password/reset/confirm/:uid/:token" element={<PasswordResetConfirmPage/>}/>
            <Route path="/logout" element={<LogoutPage />} />
            <Route element={<ProtectedRoute />}>
                <Route index element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                <Route path='/verify-email' element={<VerifyEmailPage />} />
                <Route path='/accounts/activate/:token' element={<AccountActivationPage />} />
                <Route path="/oauth2/google" element={<GoogleLoginPage/>}/>
            </Route>
        </Route>,
        <Route path="/account" element={<FrameLayout />}>
            <Route element={<PrivateRoute />}>
                    <Route index element={<AccountPage />} />

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
