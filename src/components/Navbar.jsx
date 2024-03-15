import { navLinks } from "../data/navLinks";

export default function Navbar() {
    return (
        <>
            <input type="checkbox" id="toggle" className="peer hidden" />
            <nav className="hidden peer-checked:flex md:flex flex-col gap-4 sm:gap-6 md:gap-10 p-4 w-32">
                {
                    navLinks.map(link => <a className="text-sm text-slate-300 hover:text-slate-50" key={link.id} href={link.url}>{link.title}</a>)
                }
            </nav>
        </>
    )
}
