

export default function Content(props) {
    return (
        <div className={`flex flex-col h-full p-0 sm:px-2 md:px-8 lg:px-24 xl:px-32 items-stretch justify-center`}>
            <div className={`flex flex-col w-full justify-center items-center`}>
                <p className={`pt-24 text-8xl font-bold text-center antialiased tracking-tighter`}>
                    Bem vindo ao
                </p>
                <div className={`flex pb-24 text-8xl font-black text-center antialiased tracking-tighter`}>
                    <p>
                        Projeto Design Patterns
                    </p>
                    <span className={`text-sky-300`}></span>
                </div>


            </div>
            {props.children}
        </div>
    )
}
