import Menu from './Menu'
import { prodamLogo, pLogo, DesignNavLogo, DevNavLogo, DevLogo, Dev2Logo } from './icons'
import Logo from './Logo'
import Link from 'next/link'

export default function Navbar(props) {

    if (props.type == 1) {
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
                    <span className={`text-2xl text-sky-300`}>{DevNavLogo}</span>
                    <h2 className={`text-base text-slate-300`}>{props.subtitle}</h2>
                </div>

                <Menu type={props.type} />
            </div>
        )
    } else if (props.type == 2) {
        return (
            <div className={`flex flex-col justify-start shrink items-center bg-sky-500/5 border-r border-sky-500/25 w-48`}>
                <div className={`flex flex-col shrink justify-start items-center mr-4 py-4`}>
                    <Link href="/">
                        <a className={`flex flex-col items-center`}>
                            {prodamLogo('#0284c7', 128, 32)}
                        </a>
                    </Link>
                </div>
                <div className={`flex shrink justify-start items-center text-gray-300 px-4`}>
                    <h1 className={`text-xl text-semibold text-gray-300`}>
                        {props.title}<span className={`text-2xl text-sky-300`}>{DevNavLogo}</span>
                    </h1>

                    <h2 className={`text-base text-slate-300`}>{props.subtitle}</h2>
                </div>

                <Menu type={props.type} />
            </div>
        )
    } else {
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
                    <span className={`text-2xl text-sky-300`}>{DevNavLogo}</span>
                    <h2 className={`text-base text-slate-300`}>{props.subtitle}</h2>
                </div>

                <Menu />
            </div>
        )
    }






}