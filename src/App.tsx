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
const SetSecurityQuestions = lazy(() => import("./pages/SetSecurityQuestions"));
import HasQuestions from "./components/utils/HasQuestions";
import HasNoQuestions from "./components/utils/HasNoQuestions";
const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<MainLayout />}>
            <Route element={<ProtectedRoute />}>
                <Route index element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
            </Route>
        </Route>,
        <Route path="/account" element={<FrameLayout />}>
            <Route element={<PrivateRoute />}>
                <Route element={<HasQuestions />}>
                    <Route index element={<AccountPage />} />
                </Route>
                <Route element={<HasNoQuestions />}>
                    <Route
                        path="/account/set-security-questions"
                        element={<SetSecurityQuestions />}
                    />
                </Route>
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
