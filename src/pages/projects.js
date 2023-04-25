import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

export default function Project() {
    const [contactOpen, setContactOpen] = useState(false);
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    /* if (contactOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "scroll";
    } */

    return (
        <div className={`max-w-7xl px-12 md:px-24 mx-auto ${inter.className}`}>
            <header className="border-b-2 border-gray-300">
                <nav>
                    <ul className="flex h-20 items-center text-xl font-semibold">
                        <li>
                            <Link
                                href={"/"}
                                className="p-4 hover:text-blue-400"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="ml-auto mr-16">
                            <Link
                                href={"/projects"}
                                className="p-4 hover:text-blue-400"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <button
                                className="bg-blue-400 py-2 px-4 rounded-lg text-white hover:bg-blue-500"
                                onClick={() => setContactOpen(true)}
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="flex min-h-screen flex-col py-12">
                <section className="flex flex-col">
                    <h2 className="text-4xl mb-10 text-center">Projects</h2>
                    <div className="md:grid grid-cols-2 gap-8">
                        <div className="w-full mb-8 md:mb-0 rounded-md overflow-hidden drop-shadow-2xl flex flex-col">
                            <Image
                                className="h-96 object-cover object-center"
                                src={"/wordle.png"}
                                width="1000"
                                height="1000"
                            ></Image>
                            <div className="p-6 border-2 flex-grow flex flex-col">
                                <h3 className="text-2xl mb-2">WORDLE</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <h4 className="px-2 py-1 bg-yellow-400 rounded-md text-sm">
                                        JavaScript
                                    </h4>
                                    <h4 className="px-2 py-1 bg-sky-400 rounded-md text-sm">
                                        React
                                    </h4>
                                    <h4 className="px-2 py-1 bg-blue-400 rounded-md text-sm">
                                        Tailwind
                                    </h4>
                                </div>
                                <p className="mb-4">
                                    I made a clone of Wordle in vanilla
                                    JavaScript before, and when once I started
                                    learning React I remade it once again using
                                    React and Tailwind.
                                </p>
                                <div className="flex gap-4 mt-auto">
                                    <a
                                        href="https://github.com/chasacademy-robin-bergstrand/react-wordle-clone"
                                        className="border-2 border-blue-400 py-2 px-4 rounded-lg text-blue-400 ml-auto hover:bg-blue-400 hover:text-white"
                                    >
                                        Github
                                    </a>
                                    <a
                                        href="https://react-wordle-clone-xi.vercel.app/"
                                        className="bg-blue-400 py-2 px-4 rounded-lg text-white hover:bg-blue-500"
                                    >
                                        View live
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full  rounded-md overflow-hidden drop-shadow-2xl  flex flex-col">
                            <Image
                                className="h-96 object-cover object-left"
                                src={"/quiz.png"}
                                width="1000"
                                height="1000"
                            ></Image>
                            <div className="p-6 border-2 flex-grow">
                                <h3 className="text-2xl mb-2">QUIZ</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <h4 className="px-2 py-1 bg-yellow-400 rounded-md text-sm">
                                        JavaScript
                                    </h4>
                                    <h4 className="px-2 py-1 bg-sky-400 rounded-md text-sm">
                                        React
                                    </h4>
                                    <h4 className="px-2 py-1 bg-purple-400 rounded-md text-sm">
                                        Redux
                                    </h4>
                                    <h4 className="px-2 py-1 bg-blue-400 rounded-md text-sm">
                                        Tailwind
                                    </h4>
                                </div>
                                <p className="mb-4">
                                    A simple admin dashboard for creating,
                                    editing and deleting quiz questions, with
                                    the data being stored with Redux. And a quiz
                                    interface for doing the quiz, answering the
                                    questions.
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        className="border-2 border-blue-400 py-2 px-4 rounded-lg text-blue-400 ml-auto hover:bg-blue-400 hover:text-white "
                                        href="https://github.com/chasacademy-robin-bergstrand/quizz-redux"
                                    >
                                        Github
                                    </a>
                                    <a
                                        className="bg-blue-400 py-2 px-4 rounded-lg text-white hover:bg-blue-500"
                                        href="http://quizz-redux.vercel.app"
                                    >
                                        View live
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full  rounded-md overflow-hidden drop-shadow-2xl  flex flex-col">
                            <Image
                                className="h-96 object-cover object-center"
                                src={"/calculator.png"}
                                width="1000"
                                height="1000"
                            ></Image>
                            <div className="p-6 border-2 flex-grow">
                                <h3 className="text-2xl mb-2">CALCULATOR</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <h4 className="px-2 py-1 bg-orange-400 rounded-md text-sm">
                                        HTML
                                    </h4>
                                    <h4 className="px-2 py-1 bg-blue-400 rounded-md text-sm">
                                        CSS
                                    </h4>
                                    <h4 className="px-2 py-1 bg-yellow-400 rounded-md text-sm">
                                        JavaScript
                                    </h4>
                                </div>
                                <p className="mb-4">
                                    A fully responsive calculator made with all
                                    vanilla languages. With a couple of
                                    different color themes, saving your
                                    preferred theme.
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        className="border-2 border-blue-400 py-2 px-4 rounded-lg text-blue-400 ml-auto hover:bg-blue-400 hover:text-white "
                                        href="https://github.com/chasacademy-robin-bergstrand/vanilla-calculator"
                                    >
                                        Github
                                    </a>
                                    <a
                                        className="bg-blue-400 py-2 px-4 rounded-lg text-white hover:bg-blue-500"
                                        href="https://vanilla-calculator-puce.vercel.app/"
                                    >
                                        View live
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-32 flex flex-col sm:items-center">
                    <h2 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 text-slate-400 text-center">
                        Reach out to me!
                    </h2>
                    <button
                        className="bg-blue-400 text-lg py-2 px-4 rounded-lg text-white mt-8 hover:bg-blue-500"
                        onClick={() => setContactOpen(true)}
                    >
                        Contact
                    </button>
                </section>
            </main>
            {contactOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
                    <div
                        className="absolute inset-0"
                        onClick={() => setContactOpen(false)}
                    ></div>
                    <div className="bg-gradient-to-b from-gray-300 to-gray-200 w-[600px] h-[500px] rounded-2xl p-8 z-10">
                        <form
                            className="flex flex-col gap-2 h-full"
                            onSubmit={(e) => {
                                e.preventDefault();
                                setSubject("");
                                setMessage("");
                                setContactOpen(false);
                            }}
                        >
                            <label for="subject" className="font-bold">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                className="p-2 rounded-md"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                            ></input>
                            <label for="message" className="font-bold">
                                Message
                            </label>
                            <textarea
                                type="text"
                                name="message"
                                id="message"
                                className="p-2 rounded-md resize-none grow"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="px-4 py-2 rounded-lg border-2 border-blue-400 self-end text-blue-400 hover:text-white hover:bg-blue-400 hover:border-blue-400"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            )}
            <footer className="border-t-2 border-gray-200 h-36 flex justify-center items-center">
                <div className="text-4xl text-gray-400 flex gap-6">
                    <a href="https://github.com/chasacademy-robin-bergstrand">
                        <BsGithub />
                    </a>
                    <a>
                        <BsLinkedin />
                    </a>
                </div>
            </footer>
        </div>
    );
}
