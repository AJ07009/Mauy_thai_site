import Link from "next/link";

const NavLink = ({ href, title }) => {
return (
    <Link
    href={href}
    className='font-bold py-2 pl-3 pr-4  text-[#ADB7BE] md:text-2xl sm:text-xl rounded md:p-0 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-600  to-yellow-600'
    >
    {title}
    </Link>
    );
};

export default NavLink;
