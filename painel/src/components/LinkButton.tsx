import Link from 'next/link'

export default function LinkButton(props) {

    function renderLinkButton() {
        return (
            <a className={`
                flex justify-center items-center
                p-2
                mx-8
                my-2
                rounded-lg
                border border-sky-500
                hover:border-sky-300
                hover:bg-gradient-to-t from-sky-500/10 to-black/0
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
        <Link href={props.url} >
            {renderLinkButton()}
        </Link>
    )
}

/*className={`
flex
justify - center
items - stretch
text - gray - 300 hover: text - slate - 50
hover: bg - gradient - to - t from - sky - 500 / 20 to - black
cursor - pointer
transition - all
    `}
    */