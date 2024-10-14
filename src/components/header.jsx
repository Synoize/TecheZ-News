import { MdOutlineNewspaper } from "react-icons/md";
import { FaMixer } from "react-icons/fa";

export const Header = ({ setSearch }) => {

    return <div className="fixed w-full -mt-28 sm:-mt-16">
        <div className="bg-slate-400 flex justify-between items-center p-4">
            <span className="flex gap-2 cursor-pointer">
                <img src="logo.png" alt="TecheZ" width={28} />
                <h1 className="text-xl font-semibold text-yellow-400">TecheZ</h1>
            </span>
            <div className="w-3/6 mx-4 hidden sm:flex justify-end ">
                <SearchHere setSearch={setSearch} />
            </div>
            <span>
                <MdOutlineNewspaper onClick={()=> alert("Welcome To TecheZ.")} className="clickEffect text-2xl text-slate-100 cursor-pointer sm:hidden" />
            </span>

            <ul className="gap-4 text-white hidden sm:flex ">
                <li className="cursor-pointer text-orange-300">Feed</li>
                <li className="cursor-pointer">Technology</li>
                <li className="cursor-pointer">Business</li>
                <li className="cursor-pointer">Startup</li>
            </ul>
        </div>
        {/* <DropdownMenu/> */}
        <div className="sm:hidden flex justify-center p-2 bg-slate-300">
            <SearchHere setSearch={setSearch} />
        </div>
    </div>
}

const SearchHere = ({ search, setSearch }) => {
    return <>
        <input onChange={(e) => setSearch(e.target.value)} value={search} name='search' type="search" className="px-2 p-2 w-full flex text-sm outline-none" placeholder="Search news here. . ."></input>
    </>
}

export const DropdownMenu = () => {
    return <div className="relative w-full h-full flex justify-end sm:hidden">
        <div className="fixed w-56 bg-slate-400 ">
            <nav className="flex justify-between items-center px-4 p-2 bg-slate-300"><p>Menu</p><span><FaMixer className="cursor-pointer" /></span></nav>
            <ul className="gap-4 text-white sm:flex ">
                <li className="pl-4 p-2 hover:bg-yellow-400">Feed</li>
                <li className="pl-4 p-2 hover:bg-yellow-400">Technology</li>
                <li className="pl-4 p-2 hover:bg-yellow-400">Business</li>
                <li className="pl-4 p-2 hover:bg-yellow-400">Startup</li>
            </ul>
        </div>
    </div>
}