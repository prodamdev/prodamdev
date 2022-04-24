import { DesignLogo, Design2Logo } from "./icons";

export default function Content(props) {

    if (props.type == 1) {
        return (
            <div className={`flex flex-col h-full p-0 sm:px-2 md:px-8 lg:px-24 xl:px-32 items-stretch justify-center`}>
                <div className={`flex flex-col w-full justify-center items-center`}>
                    <p className={`pt-24 text-8xl font-bold text-center antialiased tracking-tighter`}>
                        {props.firstline}
                    </p>
                    <div className={`flex pb-24 text-8xl font-black text-center antialiased tracking-tighter`}>
                        <p>
                            {props.pagetitle}
                        </p>
                        <span className={`text-sky-300`}>{DesignLogo}</span>
                    </div>
                </div>
                {props.children}
            </div>
        )
    } else if (props.type == 2) {
        return (
            <div className={`flex flex-col grow w-full h-screen overflow-hidden items-stretch justify-start`}>
                <div className={`bg-gradient-to-r from-sky-900/50 to-black text-gray-200 flex flex-col w-full justify-start items-start border-b border-sky-500/25`}>
                    <div className={`float-right p-2 text-xl font-black antialiased tracking-tighter`}>
                        <p className={``}>
                            {props.firstline}
                        </p>
                        <p className={``}>
                            {props.pagetitle} <span className={`text-sky-300 text-xl`}>{Design2Logo}</span>
                        </p>

                    </div>
                </div>
                {props.children}
            </div>
        )
    } else {
        return (
            <div className={`flex flex-col h-full p-0 sm:px-2 md:px-8 lg:px-24 xl:px-32 items-stretch justify-center`}>
                <div className={`flex flex-col w-full justify-center items-center`}>
                    <p className={`pt-24 text-8xl font-bold text-center antialiased tracking-tighter`}>
                        {props.firstline}
                    </p>
                    <div className={`flex pb-24 text-8xl font-black text-center antialiased tracking-tighter`}>
                        <p>
                            {props.pagetitle}
                        </p>
                        <span className={`text-sky-300`}>{DesignLogo}</span>
                    </div>
                </div>
                {props.children}
            </div>
        )
    }




}
