import Head from 'next/head'
import Navbar from '../components/Navbar'
import useAppData from '../data/hook/UseAppData'
import Link from 'next/link'
import Content from '../components/Content'
import Hero from '../components/Hero'
import Main from '../components/Main'


export default function Home() {
  const { theme } = useAppData()
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 to-black text-gray-200">
      <Head>
        <title>ProdamDEV</title>
        <meta name="description" content="" />
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
        <meta name="googlebot" content="noindex" />
        <meta name="googlebot-news" content="nosnippet" />
        <link rel="icon" href="favicon.svg" />
        <link rel="mask-icon" href="favicon.svg" color="#000000" />
      </Head>

      <Main type="1">
        <Navbar title="Projeto ProdamDEV" src="" />
        <Content firstline="Bem vindo ao" pagetitle="Projeto ProdamDEV">
          <div className={`flex flex-col`}>
            <div>
              <grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration></html>
            </div>
            <Hero />
          </div>
        </Content>
      </Main>

    </div>
  )
}
