import { Header } from "@/components/Header/header";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";

export function AppLayout() {
    return (
        <>
            <div className="flex flex-col min-h-screen antialiased">
                <Helmet title="Dashboard" />
                <Header />
                <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
                    <Outlet />
                </div>
            </div>
        </>
    )
}