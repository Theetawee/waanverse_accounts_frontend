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
import PrivateRoute from "./components/utils/PrivateRoute";
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
import SuspenseLoader from "./components/utils/SuspenseLoader";
const ResetPasswordPage = lazy(() => import("./pages/ResetPasswordPage"));
const LogoutPage = lazy(() => import("./pages/LogoutPage"));
const VerifyEmailPage = lazy(() => import("./pages/VerifyEmailPage"));
const AccountActivationPage = lazy(() => import("./pages/AccountActivationPage"));
const PasswordResetConfirmPage = lazy(() => import("./pages/PasswordResetConfirmPage"));
const GoogleLoginPage = lazy(() => import("./pages/GoogleLoginPage"))
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"))
const FrameLayout = lazy(() => import("./layouts/FrameLayout"))
const MainLayout = lazy(() => import("./layouts/MainLayout"))
const ProfilePage = lazy(() => import("./pages/ProfilePage"))
const SecurityPage = lazy(() => import("./pages/SecurityPage"))



const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<SuspenseLoader><MainLayout /></SuspenseLoader>}>
            <Route path="/accounts/password/reset/confirm/:uid/:token" element={<PasswordResetConfirmPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route element={<ProtectedRoute />}>
                <Route index element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                <Route path='/verify-email' element={<VerifyEmailPage />} />
                <Route path='/accounts/activate/:token' element={<AccountActivationPage />} />
                <Route path="/oauth2/google/" element={<GoogleLoginPage/>}/>
            </Route>
        </Route>,
        <Route path="/account" element={<SuspenseLoader><FrameLayout /></SuspenseLoader>}>
            <Route element={<PrivateRoute />}>
                <Route index path="/account/home" element={<AccountPage />} />
                <Route path="/account/info" element={<ProfilePage />} />
                <Route path="/account/security" element={<SecurityPage />} />

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
