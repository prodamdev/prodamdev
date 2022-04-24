import Head from 'next/head'
import Navbar from '../../components/Navbar'
import useAppData from '../../data/hook/UseAppData'
import Link from 'next/link'
import Content from '../../components/Content'
import Hero from '../../components/Hero'
import Main from '../../components/Main'


export default function TellMeMore() {
  const { theme } = useAppData()
  const type = 2
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 to-black text-gray-200">
      <Head>
        <title>Prodam - Projeto Design Patterns</title>
        <meta name="description" content="" />
        <link rel="icon" href="favicon.svg" />
        <link rel="mask-icon" href="favicon.svg" color="#000000" />
      </Head>

      <Main type={type}>
        <Navbar type={type} title="Projeto Design Patterns" src="" />
        <Content type={type} firstline="" pagetitle="Apresentação">
          <div className={`flex flex-col w-full h-screen`}>
            <div className={`overflow-y-scroll snap snap-y snap-mandatory`}>

              <div className={`flex flex-col items-start justify-start w-full h-screen bg-gradient-to-r from-gray-900 to-black snap-start p-4`}>

                <div className="py-8">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-left">
                      <h3 className="text-base text-sky-600 font-semibold tracking-wide uppercase">Projeto Design Patterns</h3>
                      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
                        Objetivos
                      </p>
                      <p className="mt-4 max-w-2xl text-xl text-gray-200">
                        O projeto tem como objetivo resolver ou mitigar alguns problemas presentes no desenvolvimento web e mobile.
                      </p>
                    </div>

                    <div className="mt-10">
                      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <div>
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-sky-500 text-white">

                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">Produtividade</p>
                          </div>
                          <div className="mt-2 ml-16 text-base text-gray-200">Acesso à templates e componentes, reutilizando e customizando, evitando reescrever código ou realizar buscas e testes.</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <div>
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-sky-700 text-white">

                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">Qualidade</p>
                          </div>
                          <div className="mt-2 ml-16 text-base text-gray-200">Com os projetos, templates e componentes mantidos, é possível aprimorar, criar versões, novas bases e novas funcionalidades. Sendo possível aplicar as versões refinadas em projetos desenvolvidos e a cada novo projeto a qualidade é superior, evitando erros comuns no desenvolvimento.</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <div>
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-sky-900 text-white">

                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">Tecnologia</p>
                          </div>
                          <div className="mt-2 ml-16 text-base text-gray-200">O projeto busca apresentar várias tecnologias aos desenvolvedores e também àqueles que estejam iniciando nelas, ao ter arquivos com base de projetos prontos, templates e componentes para aplicar nos projetos, o aprendizado fica acelerado.</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

















              </div>

              <div className={`flex flex-col items-center justify-start w-full h-screen bg-gradient-to-r from-zinc-900 to-black snap-start p-4`}>
                <div className='flex w-full h-auto text-left'>
                  <h3 className='text-4xl font-semibold antialiased'>Produtividade e qualidade</h3>
                </div>
                <div className='flex w-full h-auto text-left text-xl hover:bg-black/50 my-4 py-4 px-4 transition-all duration-700 rounded-md cursor-pointer'>
                  <ul>
                    <li className={`py-2`}>
                      <p>
                        - Permitir um portal de acesso à todos os desenvolvedores para que possam submeter seus códigos, apoiar outros desenvolvedores e utilizar componentes prontos;
                      </p>
                    </li>
                    <li className={`py-2`}>
                      <p>
                        - Evitar retrabalho, recriar código, buscas externas e testes de componentes externos;
                      </p>
                    </li>
                    <li className={`py-2`}>
                      <p>
                        - Manter componentes criados, atualizados e melhorados de projetos desenvolvidos;
                      </p>
                    </li>
                  </ul>
                </div>
              </div>



              <div className={`flex flex-col items-start justify-start w-full h-screen bg-gradient-to-r from-zinc-900 to-black snap-start p-4`}>

                <div className="py-8">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-left">
                      <h3 className="text-base text-sky-600 font-semibold tracking-wide uppercase">Produtividade e Qualidade</h3>
                      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
                        Produtividade
                      </p>
                      <p className="mt-4 max-w-2xl text-xl text-gray-200 lg:mx-auto">
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                        accusamus quisquam.
                      </p>
                    </div>

                    <div className="mt-10">
                      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <dt>
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
                              Icone
                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">Nome</p>
                          </dt>
                          <dd className="mt-2 ml-16 text-base text-gray-200">Descrição</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
































              </div>






























            </div>









          </div>
        </Content>
      </Main>

    </div>
  )
}
