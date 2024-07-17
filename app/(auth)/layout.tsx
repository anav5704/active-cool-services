export default function AuthLayout({ children, }: { children: React.ReactNode }) {
    return (
        <main className="h-screen w-screen grid place-items-center">
            {children}
        </main>

    )
}
