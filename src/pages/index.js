import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="max-w-7xl px-24 mx-auto ">
            <header className="border-b-2 border-gray-300">
                <nav>
                    <ul className="flex h-20 items-center text-lg font-semibold">
                        <li>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li className="ml-auto mr-16">
                            <Link href={"/"}>Projects</Link>
                        </li>
                        <li>
                            <button className="bg-blue-700 py-2 px-4 rounded-lg text-white">
                                Contact
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="flex min-h-screen flex-col py-24">
                <section className="flex mt-10">
                    <div className="flex flex-col w-7/12 items-start gap-2 mt-20">
                        <h2>Web Developer</h2>
                        <h1 className="text-5xl mb-4">Robin Bergstrand</h1>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Nam libero justo laoreet sit
                            amet cursus sit. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Nam
                            libero justo laoreet sit amet cursus sit.
                        </p>
                        <button className="bg-blue-700 py-2 px-4 rounded-lg text-white">
                            Contact me
                        </button>
                    </div>
                    <div>
                        <Image width="500" height="300" src="/hero.svg"></Image>
                    </div>
                </section>
                <section className="mt-40">
                    <h2 className="text-4xl mb-10">Skills</h2>
                    <div className="flex gap-10 justify-between font-semibold">
                        <div>
                            <Image
                                width="100"
                                height="100"
                                src={"/js.bmp"}
                                className="h-[100px]"
                            ></Image>
                            <h3 className="text-center mt-2">JavaScript</h3>
                        </div>
                        <div>
                            <Image
                                width="100"
                                height="100"
                                src={"/react.svg"}
                                className="h-[100px]"
                            ></Image>
                            <h3 className="text-center mt-2">React</h3>
                        </div>
                        <div>
                            <Image
                                width="100"
                                height="100"
                                src={"/tailwind.svg"}
                                className="h-[100px]"
                            ></Image>
                            <h3 className="text-center mt-2">Tailwind</h3>
                        </div>
                        <div>
                            <Image
                                width="100"
                                height="100"
                                src={"/git.svg"}
                                className="h-[100px]"
                            ></Image>
                            <h3 className="text-center mt-2">Git</h3>
                        </div>
                        <div>
                            <Image
                                width="100"
                                height="100"
                                src={"/redux.svg"}
                                className="h-[100px]"
                            ></Image>
                            <h3 className="text-center mt-2">Redux</h3>
                        </div>
                        <div>
                            <Image
                                width="100"
                                height="100"
                                src={"/mysql.svg"}
                                className="h-[100px]"
                            ></Image>
                            <h3 className="text-center mt-2">MySQL</h3>
                        </div>
                        <div>
                            <Image
                                width="100"
                                height="100"
                                src={"/html.svg"}
                                className="h-[100px]"
                            ></Image>
                            <h3 className="text-center mt-2">HTML</h3>
                        </div>
                        <div>
                            <Image
                                width="72"
                                height="72"
                                src={"/css.svg"}
                                className="h-[100px]"
                            ></Image>
                            <h3 className="text-center mt-2">CSS</h3>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col">
                    <h2 className="text-4xl mb-10 mt-36">Projects</h2>
                    <div className="flex gap-8">
                        <div className="w-1/2 rounded-md overflow-hidden drop-shadow-2xl flex flex-col">
                            <Image
                                className="h-96 object-cover object-center"
                                src={"/wordle.png"}
                                width="1000"
                                height="1000"
                            ></Image>
                            <div className="p-6 border-2 flex-grow flex flex-col">
                                <h3 className="text-2xl mb-2">WORDLE</h3>
                                <div className="flex gap-2 mb-4">
                                    <h4 className="px-2 py-1 bg-blue-200 rounded-md text-sm">
                                        JavaScript
                                    </h4>
                                    <h4 className="px-2 py-1 bg-blue-200 rounded-md text-sm">
                                        React
                                    </h4>
                                    <h4 className="px-2 py-1 bg-blue-200 rounded-md text-sm">
                                        Tailwind
                                    </h4>
                                </div>
                                <p className="mb-4">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Nam libero justo laoreet sit amet cursus
                                    sit.
                                </p>
                                <div className="flex gap-4 mt-auto">
                                    <a
                                        href="https://github.com/chasacademy-robin-bergstrand/react-wordle-clone"
                                        className="bg-blue-700 py-2 px-4 rounded-lg text-white ml-auto hover:bg-blue-800"
                                    >
                                        Github
                                    </a>
                                    <a
                                        href="https://react-wordle-clone-xi.vercel.app/"
                                        className="bg-blue-700 py-2 px-4 rounded-lg text-white hover:bg-blue-800"
                                    >
                                        View live
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 rounded-md overflow-hidden drop-shadow-2xl  flex flex-col">
                            <Image
                                className="h-96 object-cover object-left"
                                src={"/quiz.png"}
                                width="1000"
                                height="1000"
                            ></Image>
                            <div className="p-6 border-2 flex-grow">
                                <h3 className="text-2xl mb-2">QUIZ</h3>
                                <div className="flex gap-2 mb-4">
                                    <h4 className="px-2 py-1 bg-blue-200 rounded-md text-sm">
                                        JavaScript
                                    </h4>
                                    <h4 className="px-2 py-1 bg-blue-200 rounded-md text-sm">
                                        React
                                    </h4>
                                    <h4 className="px-2 py-1 bg-blue-200 rounded-md text-sm">
                                        Redux
                                    </h4>
                                    <h4 className="px-2 py-1 bg-blue-200 rounded-md text-sm">
                                        Tailwind
                                    </h4>
                                </div>
                                <p className="mb-4">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Nam libero justo laoreet sit amet cursus
                                    sit.
                                </p>
                                <div className="flex gap-4">
                                    <button className="bg-blue-700 py-2 px-4 rounded-lg text-white ml-auto">
                                        Github
                                    </button>
                                    <button className="bg-blue-700 py-2 px-4 rounded-lg text-white">
                                        View live
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="bg-blue-700 py-2 px-4 rounded-lg text-white self-end mt-8">
                        More projects
                    </button>
                </section>
            </main>
        </div>
    );
}
