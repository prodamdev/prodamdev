import Menu from './Menu'
import { prodamLogo, pLogo, DesignNavLogo } from './Icons'
import Logo from './Logo'
import Link from 'next/link'

export default function Navbar(props) {
    return (
        <div className={`flex w-full justify-start shrink items-stretch px-4 pr-8 bg-sky-500/5 border-b border-sky-500/25`}>
            <div className={`flex grow justify-start items-center mr-4 py-4`}>
                <Link href="/">
                    <a className={`flex items-center`}>
                        {prodamLogo('#0284c7', 128, 32)}
                    </a>
                </Link>
            </div>
            <div className={`flex shrink justify-start items-center px-8 text-gray-300`}>
                <h1 className={`text-2xl text-semibold text-gray-300`}>
                    {props.title}
                </h1>
                <span className={`text-2xl text-sky-300`}>{DesignNavLogo}</span>
                <h2 className={`text-base text-slate-300`}>{props.subtitle}</h2>
            </div>

            <Menu />
        </div>
    )
}