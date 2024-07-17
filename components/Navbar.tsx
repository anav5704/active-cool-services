import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Container } from '@/components/Container'

export const Navbar = () => {
    return (
        <header className="fixed w-screen bg-white/25 backdrop-blur-md z-10">
            <Container>
                <nav className="flex items-center justify-between p-5">
                    <div>
                        <a href="/">Active Cool</a>
                    </div >
                    <ul className="flex gap-14">
                        <a href="/">Services</a>
                        <a href="/">Products</a>
                        <a href="/">Customers</a>
                    </ul>
                    <div>
                        <SignedOut>
                            <a href="/sign-in">Sign In</a>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </nav >
            </Container>
        </header >
    )
}
