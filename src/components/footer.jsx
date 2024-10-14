import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {

    return <footer className="bg-slate-100">
        <div className="w-full flex flex-col justify-center sm:justify-around sm:flex-row gap-4 py-4">

            <div className="w-full sm:w-1/4 flex flex-col justify-center items-center">
                <p className="text-blue-600 font-semibold text-xl sm:text-2xl ">TecheZ</p>
                <p className="text-xl text-gray-500">The NewZ Tank</p>
            </div>

            <div className="w-full sm:w-1/4 flex flex-col justify-center items-center">
                <p className="text-blue-600 font-semibold text-xl sm:text-2xl ">About</p>
                <p className="text-sm text-gray-500 text-center">Welcome to Techez. It's have more Tech Media NewZ for you.
                </p>
            </div>

            <div className="w-full sm:w-1/4 flex flex-col justify-center items-center">
                <p className="text-blue-600 font-semibold text-xl sm:text-2xl ">Follow Us</p>
                <span className="flex gap-5 p-5">
                    <a href="https://www.twitter.com/synoize"><FaXTwitter className="clickEffect text-2xl text-gray-900" title="Synoize | x"/></a>
                    <a href="https://www.instagram.com/synoize"><FaInstagram className="text-2xl text-pink-600" title="Synoize | instagram"/></a>
                    <a href="https://www.youtube.com/@synoize"><FaYoutube className="text-2xl text-red-600" title="Synoize | youtube"/></a>
                    <a href="https://www.linkedin.com/in/synoize/"><FaLinkedin className="text-2xl text-blue-900" title="Synoize | linkedin"/></a>
                    <a href="https://www.github.com/synoize"><FaGithub className="text-2xl text-gray-900" title="Synoize | github"/></a>
                    
                </span>
            </div>
        </div>

        <div className="w-full flex justify-center items-center p-4 text-xs sm:text-sm bg-slate-200">
            <p>All rights are reserved - 2024 copyright | <a href="" className="hover:text-blue-800 cursor-pointer">TecheZ</a></p>
        </div>
    </footer>
}