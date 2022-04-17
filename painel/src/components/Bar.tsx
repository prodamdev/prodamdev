
export default function Bar(props) {
    const barwidth = `${props.level}%`

    function barlvl() {
        const barlvlmd = ''
        if (props.level >= 75) {
            return 'from-sky-600 to-sky-300'
        } else if (props.level < 75 && props.level >= 50) {
            return 'from-indigo-600 to-sky-600'
        } else {
            return 'from-red-600 to-amber-600'
        }
    }

    function baralert() {
        const baralertmd = ''
        if (props.level >= 75) {
            return ''
        } else if (props.level < 75 && props.level >= 50) {
            return (
                <div>
                    <span className={`animate-ping absolute inline-flex h-2 w-2 rounded-full bg-amber-400`}></span>

                </div>
            )
        } else {
            return (
                <div>
                    <span className={`animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400`}></span>

                </div>

            )
        }
    }

    return (
        <div className={`flex flex-col text-white rounded ml-4 mr-4 mb-3.5`}>
            <div className={`flex relative`}>
                <div className={``}><p className={`text-sm pb-1`}>{props.name}</p> {baralert()}</div>
            </div>
            <div className={`flex items-center ml-2 rounded-full bg-gradient-to-r from-gray-900 to-slate-800`}>
                <div className={`flex items-center px-4 py-1 rounded-full bg-gradient-to-r ${barlvl()}`} style={{ width: barwidth }}>
                </div>
            </div>
        </div>
    )
}
