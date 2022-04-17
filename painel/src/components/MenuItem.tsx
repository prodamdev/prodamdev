import Link from 'next/link'

export default function MenuItem(props) {

    function renderMenuItem() {
        return (
            <a className={`
                flex justify-center items-center
                px-4
                hover:border-b-2 border-sky-500 
                hover:decoration-8
                hover:decoration-sky-500
                transition-all
                ${props.className}
                `} target={props.target}>
                {props.icon}
                <span className={` font-light`}>
                    {props.text}
                </span>
            </a>
        )
    }

    return (
        <li onClick={props.onClick} className={`
            flex
            justify-center
            items-stretch
            text-gray-300 hover:text-slate-50
            hover:bg-gradient-to-t from-sky-500/20 to-black
            cursor-pointer
            transition-all
            `}>
            {props.url ? (
                <Link href={props.url}>
                    {renderMenuItem()}
                </Link>
            ) : (
                renderMenuItem()
            )
            }

        </li>
    )
}