import { BiSolidDonateBlood } from "react-icons/bi"
import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <div className="mt-10">
            <footer className="flex flex-col">
                <div className="flex flex-col justify-around gap-5 bg-[#EB2C29] py-8 md:flex-row md:gap-0 items-center text-white">
                    <aside className="flex items-center justify-center gap-3 text-xl">
                        <BiSolidDonateBlood className="hidden md:flex text-[45px] text-white" />
                        <p>BloodUnity
                        </p>
                    </aside>
                    <nav className="text-lg">
                        <ul className="flex h-full items-center justify-center gap-3">
                        <li>
                                <Link to="/" className="cursor-pointer hover:underline">Home</Link>
                            </li>
                            <li>
                                <Link to="/Donation Requests" className="cursor-pointer hover:underline">Donation Requests</Link>
                            </li>
                            <li>
                                <Link to="/Blogs" className="cursor-pointer hover:underline">Blogs</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <aside className="bg-[#e9423f] text-white py-5 text-center text-sm">
                    <p>&copy; 2024 NavigateUI. All Rights Reserved.</p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer