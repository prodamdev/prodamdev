import Link from "next/link"
import ArticleButton from "./ArticleButton"
import Bar from "./Bar"
import LinkButton from "./LinkButton"

export default function Hero(props) {
    return (
        <div className={`flex w-full justify-items-start gap-x-4`}>
            <div className={`text-left text-gray-100 flex flex-col w-1/5 p-2 mt-4 rounded-lg`}>
                <h3 className={`text-lg w-full text-left
                    underline decoration-1 underline-offset-2 decoration-sky-500/50
                    pl-4 pr-5 mb-4 
                    rounded text-gray-200`}>
                    Projetos</h3>
                <div className={`flex w-full flex-col mx-8 pr-12`}>
                    <div className={`flex flex-col justify-center items-center p-0 m-0 h-0.5`}>
                    </div>
                    <Bar level={100} name='SISA' />
                    <Bar level={75} name='GDP' />
                    <Bar level={50} name='NGDS' />
                    <Bar level={30} name='WIFE LIVRE' />
                    <Bar level={10} name='Project Design Patterns' />
                </div>
                <div className={`flex w-full flex-col pl-4`}>
                    <LinkButton url='https://prodam.dev/projects' text='+' target='_self' className='text-amber-300 border-amber-500 hover:border-amber-300 hover:bg-gradient-to-t from-amber-500/10 to-black/0' />
                </div>
            </div>
            <div className={`text-left text-gray-100 flex flex-col w-1/5 p-2 mt-4 rounded-lg`}>
                <h3 className={`text-lg w-full text-left
                    underline decoration-1 underline-offset-2 decoration-sky-500/50
                    pl-4 pr-5 mb-4
                    rounded text-gray-200`}>
                    Artigo</h3>
                <div className={`flex w-full flex-col pl-4`}>
                    <ArticleButton url='/articles/tellmemore' title='Apresentando' text='' target='_blank' img='/articles/tellmemore.png' />
                    <LinkButton url='/articles/' text='+' target='_self' className='text-amber-300 border-amber-500 hover:border-amber-300 hover:bg-gradient-to-t from-amber-500/10 to-black/0' />
                </div>
            </div>
            <div className={`text-left text-gray-100 flex flex-col w-1/5 p-2 mt-4 rounded-lg`}>
                <h3 className={`text-lg w-full text-left
                    underline decoration-1 underline-offset-2 decoration-sky-500/50
                    pl-4 pr-5 mb-4 
                    rounded text-gray-200`}>
                    Templates</h3>
                <div className={`flex w-full flex-col`}>
                    <LinkButton url='https://templates.prodam.dev/admin/' text='Admin' target='_blank' />
                    <LinkButton url='https://templates.prodam.dev/sites/' text='Sites' target='_blank' />
                    <LinkButton url='https://templates.prodam.dev/cms/' text='CMS' target='_blank' />
                    <LinkButton url='https://templates.prodam.dev/intranet/' text='Intranet' target='_blank' />
                    <LinkButton url='https://templates.prodam.dev/' text='+' target='_self' className='text-amber-300 border-amber-500 hover:border-amber-300 hover:bg-gradient-to-t from-amber-500/10 to-black/0' />
                </div>
            </div>
            <div className={`text-left text-gray-100 flex flex-col w-1/5 p-2 mt-4 rounded-lg`}>
                <h3 className={`text-lg w-full text-left
                    underline decoration-1 underline-offset-2 decoration-sky-500/50
                    pl-4 pr-5 mb-4 
                    rounded text-gray-200`}>
                    Vue</h3>
                <div className={`flex w-full flex-col`}>
                    <LinkButton url='https://vue.prodam.dev/component/datatable' text='Datatable' target='_blank' />
                    <LinkButton url='https://vue.prodam.dev/project/admin_001' text='Projeto Portfolio' target='_blank' />
                    <LinkButton url='https://vue.prodam.dev/component/modal' text='Modal' target='_blank' />
                    <LinkButton url='https://vue.prodam.dev/component/lgpd' text='Banner LGPD' target='_blank' />
                    <LinkButton url='https://vue.prodam.dev/' text='+' target='_self' className='text-amber-300 border-amber-500 hover:border-amber-300 hover:bg-gradient-to-t from-amber-500/10 to-black/0' />
                </div>
            </div>
            <div className={`text-left text-gray-100 flex flex-col w-1/5 p-2 mt-4 rounded-lg`}>
                <h3 className={`text-lg w-full text-left
                    underline decoration-1 underline-offset-2 decoration-sky-500/50
                    pl-4 pr-5 mb-4 
                    rounded text-gray-200`}>
                    Next</h3>
                <div className={`flex w-full flex-col`}>
                    <LinkButton url='https://next.prodam.dev/component/hero' text='Hero' target='_blank' />
                    <LinkButton url='https://next.prodam.dev/project/abc' text='Projeto ABC' target='_blank' />
                    <LinkButton url='https://next.prodam.dev/component/button' text='Button' target='_blank' />
                    <LinkButton url='https://next.prodam.dev/component/appprovider' text='AppProvider' target='_blank' />
                    <LinkButton url='https://next.prodam.dev/' text='+' target='_self' className='text-amber-300 border-amber-500 hover:border-amber-300 hover:bg-gradient-to-t from-amber-500/10 to-black/0' />
                </div>
            </div>

        </div >
    )
}