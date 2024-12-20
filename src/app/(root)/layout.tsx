import Navbar from "@/component/navbar";
import "../globals.css";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="font-work-sans">
        <Navbar />
            {children}
        </main>
    )
}