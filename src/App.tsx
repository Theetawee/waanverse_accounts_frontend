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
import FrameLayout from "./layouts/FrameLayout";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import PrivateRoute from "./components/utils/PrivateRoute";

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<MainLayout />}>
            <Route element={<ProtectedRoute />}>
                <Route index element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Route>
        </Route>,
        <Route path="/account" element={<FrameLayout />}>
            <Route element={<PrivateRoute />}>
                <Route index element={<AccountPage />} />
            </Route>
        </Route>,
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
