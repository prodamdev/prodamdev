import Link from 'next/link'
import Image from 'next/image'

export default function ArticleButton(props) {

    function renderArticleButton() {
        return (
            <a className={`
                flex flex-col justify-start items-stretch
                ${props.className}
                `} target={props.target}>

                <h3 className={`text-lg pt-3 pb-2 font-medium`}>
                    {props.title}
                </h3>
                <p className={`font-light my text-justify line-clamp-2 text-ellipsis`}>
                    {props.text}
                </p>
            </a>
        )
    }

    return (
        <div className={`
                flex flex-col justify-center items-center
                p-2
                mx-8
                my-2
                rounded-lg
                border border-sky-500
                hover:border-sky-300
                hover:bg-gradient-to-t from-sky-500/10 to-black/0
                transition-all
                ${props.className}
                `}>
            <div className={`
                flex w-full h-28 mb-2 rounded-md overflow-hidden
                `}>
                <Link href={props.url} passHref>
                    <a className={`
                    w-full
                    ${props.className}
                    `} target={props.target} >
                        <Image src={props.img} alt={props.alt} className={`object-cover`} layout='responsive' objectFit='contain' width="100%" height="100%" />
                    </a>
                </Link>
            </div>
            <Link href={props.url} >
                {renderArticleButton()}
            </Link>
        </div>

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