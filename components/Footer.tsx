import { Container } from "@/components/Container"

export const Footer = () => {
    return (
        <header className="w-screen border-t border-zinc-200">
            <Container>
                <footer className="p-5 flex items-center justify-between">
                    <div>
                        <a href="/">Active Cool Services  @ {new Date().getFullYear()}</a>
                    </div>
                    <div>
                        Developed and Maintained by <a className="font-semibold underline" href="https://anav.dev">Anav</a>
                    </div>
                </footer>
            </Container>
        </header>
    )
}
