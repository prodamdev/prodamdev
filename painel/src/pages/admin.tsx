import Head from 'next/head'
import Navbar from '../components/Navbar'
import useAppData from '../data/hook/UseAppData'
import Link from 'next/link'
import Content from '../components/Content'
import Hero from '../components/Hero'


export default function Admin() {
    const { theme } = useAppData()
    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 to-black text-gray-200">
            <Head>
                <title>Prodam - Projeto Design Patterns</title>
                <meta name="description" content="" />
                <link rel="icon" href="favicon.svg" />
                <link rel="mask-icon" href="favicon.svg" color="#000000" />
            </Head>

            <main className="flex flex-col w-full h-full items-stretch justify-center">
                <Navbar title="Projeto Design Patterns" src="" />
                <Content firstline="Bem vindo ao" pagetitle="Projeto Design Patterns">
                    <div className={`flex flex-col`}>
                        <Hero />
                    </div>
                </Content>
            </main>

        </div>
    )
}
