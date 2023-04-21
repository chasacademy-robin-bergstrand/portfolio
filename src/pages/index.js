import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
              <Link href={"/"} className="p-4 hover:text-blue-400">
                Home
              </Link>
            </li>
            <li className="ml-auto mr-16">
              <Link href={"/projects"} className="p-4 hover:text-blue-400">
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
      <main className="flex min-h-screen flex-col py-24">
        <div className="mx-auto">
          <h2 className="mb-2 text-lg font-semibold -translate-x-8 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">
            WEB DEVELOPER
          </h2>
          <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 text-slate-400 ">
            <span className="hover:text-blue-500 transition duration-300">
              R
            </span>
            <span className="hover:text-blue-500 transition duration-300">
              o
            </span>
            <span className="hover:text-blue-500 transition duration-300">
              b
            </span>
            <span className="hover:text-blue-500 transition duration-300">
              i
            </span>
            <span className="hover:text-blue-500 transition duration-300">
              n
            </span>
            &nbsp;
            <br className="sm:hidden"></br>
            <span className="hover:text-blue-500 transition duration-300"></span>
            <span className="hover:text-blue-500 transition duration-300">
              B
            </span>
            <span className="hover:text-blue-500 transition duration-300">
              e
            </span>
            <span className="hover:text-blue-500 transition duration-300">
              r
            </span>
            <span className="hover:text-blue-500 transition duration-300">
              g
            </span>
            <span className="hover:text-blue-500 transition duration-300">
              s
            </span>
            <span className="hover:text-blue-500 transition duration-300">
              t
            </span>
            <span className="hover:text-blue-500 transition duration-300">
              r
            </span>
            <span className="hover:text-blue-500 transition duration-300">
              a
            </span>
            <span className="hover:text-blue-500 transition duration-300">
              n
            </span>
            <span className="hover:text-blue-500 transition duration-300">
              d
            </span>
          </h1>
        </div>
        <div className="max-w-4xl mx-auto mt-16">
          <p className="mb-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
            libero justo laoreet sit amet cursus sit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet
            cursus sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Nam libero justo laoreet sit amet cursus sit.
          </p>
        </div>
        {/* <section className="flex flex-col md:flex-row mt-10">
                    <div className="flex mx-auto flex-col md:w-7/12 items-start gap-2 mt-20">
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
                        <button className="bg-blue-700 py-2 px-4 rounded-lg text-white hover:bg-blue-800">
                            Contact me
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <Image width="500" height="300" src="/hero.svg"></Image>
                    </div>
                </section> */}
        <section className="mt-40">
          <h2 className="text-4xl mb-10">Tools I've worked with</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-between font-semibold">
            <div className="basis-[100px]">
              <Image
                width="100"
                height="100"
                src={"/js.svg"}
                className="h-[100px] mx-auto"
              ></Image>
              <h3 className="text-center mt-2">JavaScript</h3>
            </div>
            <div className="basis-[100px]">
              <Image
                width="100"
                height="100"
                src={"/react.svg"}
                className="h-[100px] mx-auto"
              ></Image>
              <h3 className="text-center mt-2">React</h3>
            </div>
            <div className="basis-[100px]">
              <Image
                width="100"
                height="100"
                src={"/tailwind.svg"}
                className="h-[100px] mx-auto"
              ></Image>
              <h3 className="text-center mt-2">Tailwind</h3>
            </div>
            <div className="basis-[100px]">
              <Image
                width="100"
                height="100"
                src={"/git.svg"}
                className="h-[100px] mx-auto"
              ></Image>
              <h3 className="text-center mt-2">Git</h3>
            </div>
            <div className="basis-[100px]">
              <Image
                width="100"
                height="100"
                src={"/redux.svg"}
                className="h-[100px] mx-auto"
              ></Image>
              <h3 className="text-center mt-2">Redux</h3>
            </div>
            <div className="basis-[100px]">
              <Image
                width="100"
                height="100"
                src={"/mysql.svg"}
                className="h-[100px] mx-auto"
              ></Image>
              <h3 className="text-center mt-2">MySQL</h3>
            </div>
            <div className="basis-[100px]">
              <Image
                width="100"
                height="100"
                src={"/html.svg"}
                className="h-[100px] mx-auto"
              ></Image>
              <h3 className="text-center mt-2">HTML</h3>
            </div>
            <div className="basis-[100px]">
              <Image
                width="72"
                height="72"
                src={"/css.svg"}
                className="h-[100px] mx-auto"
              ></Image>
              <h3 className="text-center mt-2">CSS</h3>
            </div>
          </div>
        </section>
        <section className="flex flex-col">
          <h2 className="text-4xl mb-10 mt-36">Projects</h2>
          <div className="md:flex gap-8">
            <div className="md:w-1/2 mb-8 md:mb-0 rounded-md overflow-hidden drop-shadow-2xl flex flex-col">
              <Image
                className="h-96 object-cover object-center"
                src={"/wordle.png"}
                width="1000"
                height="1000"
              ></Image>
              <div className="p-6 border-2 flex-grow flex flex-col">
                <h3 className="text-2xl mb-2">WORDLE</h3>
                <div className="flex gap-2 mb-4">
                  <h4 className="px-2 py-1 bg-yellow-400 rounded-md text-sm">
                    JavaScript
                  </h4>
                  <h4 className="px-2 py-1 bg-blue-300 rounded-md text-sm">
                    React
                  </h4>
                  <h4 className="px-2 py-1 bg-teal-400 rounded-md text-sm">
                    Tailwind
                  </h4>
                </div>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Nam libero justo laoreet sit amet cursus sit.
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
            <div className="md:w-1/2  rounded-md overflow-hidden drop-shadow-2xl  flex flex-col">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Nam libero justo laoreet sit amet cursus sit.
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
          </div>
          <Link
            href={"/projects"}
            className="bg-blue-400 py-2 px-4 rounded-lg text-white self-end mt-8 hover:bg-blue-500"
          >
            More projects
          </Link>
        </section>
        <section className="mt-16 flex flex-col sm:items-center">
          <h2 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 text-slate-400 text-center">
            Reach out to me!
          </h2>
          <button
            className="bg-blue-400 text-xl font-semibold py-2 px-4 rounded-lg text-white mt-8 hover:bg-blue-500"
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
          <div className="bg-gradient-to-b from-gray-300 to-gray-200 w-[600px] h-[500px] rounded-2xl p-12 z-10">
            <form
              className="flex flex-col gap-2 h-full"
              onSubmit={(e) => {
                e.preventDefault();
                setSubject("");
                setMessage("");
                setContactOpen(false);
              }}
            >
              <label for="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="p-2 rounded-md"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              ></input>
              <label for="message">Message</label>
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
                className="px-4 py-2 rounded-lg border-2 border-blue-400 self-end hover:bg-blue-400 hover:border-blue-500"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
      <footer className="border-t-2 border-gray-200 h-36 flex justify-center items-center">
        <div className="text-4xl text-gray-400 flex gap-6">
          <a
            href="https://github.com/chasacademy-robin-bergstrand"
            className="hover:text-blue-400"
          >
            <BsGithub />
          </a>
          <a className="hover:text-blue-400">
            <BsLinkedin />
          </a>
        </div>
      </footer>
    </div>
  );
}
