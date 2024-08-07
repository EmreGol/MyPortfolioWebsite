import Link from "next/link"

const NavLink = ({href, title}) => {
    return (
        <Link href={href} className='relative block font-semibold md:pb-2 uppercase tracking-tight text-sm'>
            <span className={title === "Home" ? 'bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent' : 'text-white font-normal'}>
                {title}
            </span>
            {title === "Home" ? 
                <span className='absolute left-1/2 transform -translate-x-1/2 bottom-0 w-2 h-[3px] bg-white rounded-full hidden md:block'></span>
            : null
        }
            
        </Link>
    )
}

export default NavLink