import { Container } from "@/components/Container"
import Image from "next/image"

export const Hero = () => {
    return (
        <Container>
            <div className="text-center min-h-screen flex flex-col items-center justify-center gap-5 w-full">
                <h1 className="text-6xl font-bold">We Supply and Install Air Cons</h1>
                <p className="text-xl text-zinc-500">Active Cool has been the choice for
                    {" "}
                    <span className="text-black">
                        large-scale commercial jobs
                    </span>
                    <br />
                    and residential customers in Fiji for over 20 years.</p>
                <div className="space-x-5">
                    <button className="py-2 px-6 rounded-full bg-gradient">
                        <a href="/">Contact Us</a>
                    </button>
                    <button className="py-2 px-6 rounded-full bg-zinc-200">
                        <a href="/">Learn More</a>
                    </button>
                </div>
            </div>
        </Container >
    )
}
