export default function Main(props) {

    if (props.type == 1) {
        return (
            <main className="flex flex-col w-full h-full items-stretch justify-center">
                {props.children}
            </main>
        )
    } else if (props.type == 2) {
        return (
            <main className="flex w-full h-full items-stretch justify-start">
                {props.children}
            </main>
        )
    } else {
        return (
            <main className="flex flex-col w-full h-full items-stretch justify-center">
                {props.children}
            </main>
        )
    }
}
