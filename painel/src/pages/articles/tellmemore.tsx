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
        <title>Prodam - Projeto ProdamDEV</title>
        <meta name="description" content="" />
        <link rel="icon" href="favicon.svg" />
        <link rel="mask-icon" href="favicon.svg" color="#000000" />
      </Head>

      <Main type={type}>
        <Navbar type={type} title="Projeto ProdamDEV" src="" />
        <Content type={type} firstline="" pagetitle="Apresentação">
          <div className={`flex flex-col w-full h-screen`}>
            <div className={`overflow-y-scroll snap snap-y snap-mandatory`}>

              <div className={`flex flex-col items-start justify-start w-full h-screen bg-gradient-to-r from-neutral-900 to-black snap-start p-4`}>

                <div className="py-8">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-left">
                      <h3 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Projeto ProdamDEV</h3>
                      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
                        Percepção de desafios
                      </p>
                      <p className="mt-4 max-w-2xl text-xl text-gray-200">
                        A PRODAM possui como objetivo principal o desenvolvimento de software, em diversas linguagens e plataformas, com diferentes tipos de profissionais e áreas de atuação, como Banco de Dados, Análise de Dados, Desenvolvimento de Sistemas, Web, Mobile, Frontend, Backend, Infraestrutura de TI, etc. Entretanto não percebo uma área comum para os desenvolvedores, para que possam buscar soluções internas, colaboração, troca de conhecimento, cooperação, aplicar propostas, acompanhar projetos, etc.
                      </p>
                    </div>

                    <div className="mt-10">
                      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <div>
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-orange-500 text-white">

                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">Gerar</p>
                          </div>
                          <div className="mt-2 ml-16 text-base text-gray-200">A PRODAM gerar desenvolve continuamente, mas durante esse desenvolvimento possivelmente muito mais é criado ou poderíamos ser capazes de criar ainda mais.</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <div>
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-orange-700 text-white">

                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">Manter</p>
                          </div>
                          <div className="mt-2 ml-16 text-base text-gray-200">Tudo que se desenvolve é disperso em várias ferramentas, como o EA, TFS, pastas na rede, e-mails, arquivos locais, em mentes, etc. Além de dificultar o acesso, dificulta manter e gerir essa informação.</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <div>
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-orange-900 text-white">

                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">Compartilhar</p>
                          </div>
                          <div className="mt-2 ml-16 text-base text-gray-200">Com tanta informação gerada e em tantos locais, compartilhar alguma coisa extremamente boa e que poderia ajudar alguém fica extremamente difícil.</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

















              </div>

              <div className={`flex flex-col items-start justify-start w-full h-screen bg-gradient-to-r from-gray-900 to-black snap-start p-4`}>

                <div className="py-8">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-left">
                      <h3 className="text-base text-sky-600 font-semibold tracking-wide uppercase">Projeto ProdamDEV</h3>
                      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
                        Objetivo
                      </p>
                      <p className="mt-4 max-w-2xl text-xl text-gray-200">
                        O projeto tem como objetivo resolver ou mitigar essas percepções, propondo algumas soluções em evolução.
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
                          <div className="mt-2 ml-16 text-base text-gray-200">Possibilitar desenvolver mais e em menos tempo, utilizando-se de colaboração interna e talvez externa, estimulando a progressão tecnológica, o reaproveitamento de componentes, códigos e projetos.</div>
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
                          <div className="mt-2 ml-16 text-base text-gray-200">Ao gerar, manter e compartilhar projetos, templates e componentes, será possível evoluir esses itens, sendo melhorados a cada utilização e gerando novas versões, bases e funcionalidades. O uso de versões refinadas aumentará a qualidade do produto final. O contato com esse compartilhamento promoverá uma visão mais crítica nos projetos futuros. Também é possível evitar erros comuns no desenvolvimento, evitando assim o retrabalho.</div>
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
                          <div className="mt-2 ml-16 text-base text-gray-200">O projeto busca apresentar várias tecnologias aos desenvolvedores, de forma passiva, e também àqueles que estejam iniciando-se de forma ativa, ao ter códigos com base de projetos prontos para analisar, templates e componentes para aplicar nos projetos, o aprendizado é melhorado e permite a adoção mais efetiva.</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

















              </div>

              <div className={`flex flex-col items-start justify-start w-full h-screen bg-gradient-to-r from-zinc-900 to-black snap-start p-4`}>

                <div className="py-8">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-left">
                      <h3 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Projeto ProdamDEV</h3>
                      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
                        Conceito
                      </p>
                      <p className="mt-4 max-w-2xl text-xl text-gray-200">
                        Proporcionar um ambiente para os desenvolvedores aprimorarem suas habilidades, obter novas perspectivas e soluções, além de aprimorar a qualidade do produto final.
                      </p>
                    </div>

                    <div className="mt-10">
                      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <div>
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-emerald-500 text-white">

                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">Hangar para os desenvolvedores</p>
                          </div>
                          <div className="mt-2 ml-16 text-base text-gray-200">Assim como aviões, do pequeno ao grande, todos tem asas, várias peças em comum, mudam as dimensões, mas todos precisam voar. O mesmo acontece com software, um local para criar e acompanhar projetos, produzir um artigo, buscar componentes prontos para diversas plataformas ou que possam ser usados em qualquer projeto, acompanhar o que outros desenvolvedores na empresa produziram, etc.</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <div>
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-emerald-700 text-white">

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
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-emerald-900 text-white">

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

              <div className={`flex flex-col items-start justify-start w-full h-screen bg-gradient-to-r from-slate-900 to-black snap-start p-4`}>

                <div className="py-8">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-left">
                      <h3 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Projeto ProdamDEV</h3>
                      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
                        Protótipo
                      </p>
                      <p className="mt-4 max-w-2xl text-xl text-gray-200">
                        Esse protótipo apresenta alguns desses conceitos aplicados. Acessando https://prodam.dev permitirá entrar nesse site e até mesmo nessa apresentação, disponível na seção Artigo.
                      </p>
                    </div>

                    <div className="mt-10">
                      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <div>
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-indigo-500 text-white">

                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">O Ambiente</p>
                          </div>
                          <div className="mt-2 ml-16 text-base text-gray-200">Permitir ao desenvolvedor ter um ambiente de desenvolvimento semelhante ao de produção seria importante para prevenir problemas que só ocorrem em produção, com a capacidade de desenvolver em múltiplas linguagens, frameworks ou tecnologias, seja para teste, proposta de versão ou desenvolver uma iniciativa de um projeto, como esse. Esse protótipo foi uma iniciativa criada em NextJS, com frameworkCSS Tailwind, utilizando ambiente de nuvem da Vercel, onde o projeto é armazenado em um repositório GitHub, e ao um push local para o repositório, o ambiente é automaticamente atualizado, mas há também no mesmo ambiente um local para o Templates só com HTML/JS/CSS e outro só para VueJS para comportar seus componentes, projetos, etc, e poderia existir outros para outras tecnologias. </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              <div className={`flex flex-col items-start justify-start w-full h-screen bg-gradient-to-r from-neutral-900 to-black snap-start p-4`}>

                <div className="py-8">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-left">
                      <h3 className="text-base text-rose-600 font-semibold tracking-wide uppercase">Projeto ProdamDEV</h3>
                      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
                        Módulos
                      </p>
                      <p className="mt-4 max-w-2xl text-xl text-gray-200">
                        O projeto possui alguns módulos básicos de seu conceito.
                      </p>
                    </div>

                    <div className="mt-10">
                      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <div>
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-rose-300 text-white">

                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">Artigos</p>
                          </div>
                          <div className="mt-2 ml-16 text-base text-gray-200">Textos produzidos pelos desenvolvedores da Prodam, com temas pertinentes e relevantes.</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <div>
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-rose-500 text-white">

                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">Templates</p>
                          </div>
                          <div className="mt-2 ml-16 text-base text-gray-200">Um local para manter e compartilhar o Templates criados na Prodam.</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <div>
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-rose-700 text-white">

                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">Componentes</p>
                          </div>
                          <div className="mt-2 ml-16 text-base text-gray-200">Seção para os Componentes, seja em HTML/JS/CSS, .Net, VueJS ou qualquer outra linguagem ou framework, modularizados, testados, documentados e prontos para uso.</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <div>
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-rose-900 text-white">

                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">Projetos</p>
                          </div>
                          <div className="mt-2 ml-16 text-base text-gray-200">Há três conceitos, primeiro para manter e compartilhar projetos modificados para esse propósito, segundo para criar e manter documentação para desenvolvedores de projetos desenvolvidos, e terceiro é acompanhar projetos de seu núcleo ou gerência no nível de impedimento e status.</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              <div className={`flex flex-col items-start justify-start w-full h-screen bg-gradient-to-r from-gray-900 to-black snap-start p-4`}>

                <div className="py-8">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-left">
                      <h3 className="text-base text-lime-600 font-semibold tracking-wide uppercase">Projeto ProdamDEV</h3>
                      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
                        Templates
                      </p>
                      <p className="mt-4 max-w-2xl text-xl text-gray-200">
                        É uma ferramenta para melhorar senso crítico, acelerar os projetos, aumentar a produtividade e aumentar a qualidade, e de persuasão.
                      </p>
                    </div>

                    <div className="mt-10">
                      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <div>
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-lime-500 text-white">

                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">Design Patterns - Templates</p>
                          </div>
                          <div className="mt-2 ml-16 text-base text-gray-200">É comum na Prodam produzir o HTML/CSS do zero, produzir o UI/UX do zero, o Layout do zero, etc.Ou mais ou menos isso. Podemos usar um boiler plate, mas no final reescrever sempre é necessário. E todo mundo tem uma visão única do mundo, principalmente os clientes. E é ainda mais comum o uso do exaustivo e surrado Bootstrap, muito útil e largamente utilizado, o que é parte do seu problema. A necessidade de aliar eficiência e qualidade, e ainda ser atraente. A proposta é desenvolver Templates, para as mais diversas necessidades. <br></br>Um Dashboard com gráficos? Há 10 versões disponíveis, os desenvolvedores podem escolher um deles, ou oferecer essas opções para escolha dos interessados. Prontos e fáceis de customizar, alterar cores, adicionar algo. Prontos para qualquer projeto. E novas versões irão surgir, as que existem podem estar ainda melhores daqui um tempo.
                            <br></br>
                            Um exemplo simples. Aplicar um template inteiramente em HTML/JS para um projeto NextJS, vai exigir apenas trocar todas as class por className.</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              <div className={`flex flex-col items-start justify-start w-full h-screen bg-gradient-to-r from-zinc-900 to-black snap-start p-4`}>

                <div className="py-8">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-left">
                      <h3 className="text-base text-amber-600 font-semibold tracking-wide uppercase">Projeto ProdamDEV</h3>
                      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
                        Componentes
                      </p>
                      <p className="mt-4 max-w-2xl text-xl text-gray-200">
                        Blocos de construção de qualquer projetos, de uso recorrente ou não, prontos para uso.
                      </p>
                    </div>

                    <div className="mt-10">
                      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <div>
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-amber-500 text-white">

                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">Design Patterns - Componentes</p>
                          </div>
                          <div className="mt-2 ml-16 text-base text-gray-200">Todo projeto gera algo que pode ser separado, emancipado de seu pai gerador e ser utilizado como um componente. Pode ser um em VueJS, NextJS, .Net, JS, Python, etc. É um conjunto de linhas para aplicar caso necessário.
                            <br></br>O objetivo é evitar se possível e se for de fácil acesso intermanete, a busca as vezes cansativa e as vezes infrutífera de encontrar um código/componente na internet, stackoverflow, sites, colocar no seu projeto e testar.
                            <br></br>Se existir um disponível, documentado e testado, seria ótimo. Talvez quem produziu esse código esteja disponível auxiliar.</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              <div className={`flex flex-col items-start justify-start w-full h-screen bg-gradient-to-r from-slate-900 to-black snap-start p-4`}>

                <div className="py-8">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-left">
                      <h3 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Projeto ProdamDEV</h3>
                      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
                        Projetos
                      </p>
                      <p className="mt-4 max-w-2xl text-xl text-gray-200">
                        Três conceitos sobre projetos, sua componentização, sua documentação e seu acompanhamento.
                      </p>
                    </div>

                    <div className="mt-10">
                      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <div>
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-blue-500 text-white">

                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">Design Patterns - Projetos</p>
                          </div>
                          <div className="mt-2 ml-16 text-base text-gray-200">Há vários projetos complexos, com muitas regras de negócio ou grandes demais, mas há também projetos com a possibilidade de serem compartilhados, não em sua totalidade, mas sua base funcional e modificado para esse propósito, com documentação para sua implementação e inicialização. Permitindo dessa forma acelerar outros produtos e projetos, poupando algumas horas ou dias de desenvolvimento. </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <div>
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-blue-700 text-white">

                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">Documentação</p>
                          </div>
                          <div className="mt-2 ml-16 text-base text-gray-200">Todo projeto há alguma documentação básica, mas há também uma documentação dos desenvolvedores para aquele projeto. Elas não são armazenadas de forma uniforme. Ou estão em e-mails, conversas ou documentação do framework, etc. Mas durante o desenvolvimento podem surgir algumas particularidades ou contornos de problemas. Provavelmente essa documentação seria mais para um ProdamDEV-Gerência/Núcleo, de forma a armazenar como um projeto deve ser instalado, armazenado, scripts que devem rodados, quais scripts e o que fazem, aspectos do projeto, quais os ambientes, endereço do TFS, qual a branch utilizada, etc. </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <div>
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-blue-900 text-white">

                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">Acompanhamento</p>
                          </div>
                          <div className="mt-2 ml-16 text-base text-gray-200">Outra função é permitir, mas apenas no nível de gerência ou núcleo, um acompanhamento dos projetos em desenvolvimento, e apenas no nível de impedimento e status. O objetivo não é ser descritivo ou detalhado, mas permitir que todos os envolvidos tenham a percepção do que está sendo criado por ele e seus colegas, o progresso realizado e algum impedimento ocorrendo. Diante de alguma falta de visibilidade do seu redor ou dos seus colegas, é uma solução para valorizar a participação da equipe e dos desenvolvedores.</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              <div className={`flex flex-col items-start justify-start w-full h-screen bg-gradient-to-r from-neutral-900 to-black snap-start p-4`}>

                <div className="py-8">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-left">
                      <h3 className="text-base text-fuchsia-600 font-semibold tracking-wide uppercase">Projeto ProdamDEV</h3>
                      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
                        Artigos
                      </p>
                      <p className="mt-4 max-w-2xl text-xl text-gray-200">
                        Para quem lê é uma reflexão, para quem escreve é compartilhar.
                      </p>
                    </div>

                    <div className="mt-10">
                      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <div>
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-fuchsia-900 text-white">

                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">Artigos</p>
                          </div>
                          <div className="mt-2 ml-16 text-base text-gray-200">Com a varidade de áreas e profissionais na Prodam, há os entusiastas da escrita e da leitura, os que buscam tendências, tecnologias, soluções e outros assuntos pertinentes da sua área de atuação, da tecnologia, do seu núcleo ou do seu grupo de desenvolvedores. O objetivo não é trazer artigos de terceiros e externos, mas desenvolvidos pelos desenvolvedores da Prodam, de modo a exercitar o hábito da busca, da interação e do compartilhamento de conhecimento.</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              <div className={`flex flex-col items-start justify-start w-full h-screen bg-gradient-to-r from-gray-900 to-black snap-start p-4`}>

                <div className="py-8">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-left">
                      <h3 className="text-base text-cyan-600 font-semibold tracking-wide uppercase">Projeto ProdamDEV</h3>
                      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
                        Futuro e o que falta
                      </p>
                      <p className="mt-4 max-w-2xl text-xl text-gray-200">
                        Por ser uma ideia em evolução, e acreditando no conceito de cocriação, novas funcionalidades ou melhores nas existentes podem surgir. Há também a necessidade de aplicar outras funções de CMS, como gerir o compartilhamento externo, quais ambientes utilizar, quais ferramentas utilizar, entre outras discussões necessárias.

                      </p>
                    </div>

                    <div className="mt-10">
                      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <div>
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-cyan-500 text-white">

                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">Experimentação</p>
                          </div>
                          <div className="mt-2 ml-16 text-base text-gray-200">Provavelmente algumas experimentações serão necessárias para validar o projeto, apesar do protótipo apresentar um conceito básico, novas funcionalidades possuem impactos maiores e provavelmente devem ser analisadas de forma mais extensas.</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <div>
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-cyan-700 text-white">

                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">CMS</p>
                          </div>
                          <div className="mt-2 ml-16 text-base text-gray-200">O desenvolvimento da parte administrativa do próprio conteúdo e como se dará esse gerenciamento também é discutível, alguns módulos são autogerenciáveis, mas permissões e outras seções provavelmente não. Talvez a criação do CMS seja um propósito paralelo para o projeto.</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative">
                          <div>
                            <div className="absolute flex items-center justify-start h-12 w-12 rounded-md bg-cyan-900 text-white">

                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">CMS</p>
                          </div>
                          <div className="mt-2 ml-16 text-base text-gray-200">O desenvolvimento da parte administrativa do próprio conteúdo e como se dará esse gerenciamento também é discutível, alguns módulos são autogerenciáveis, mas permissões e outras seções provavelmente não.</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              <div className={`flex flex-col items-start justify-start w-full h-screen bg-gradient-to-r from-blue-900 to-black snap-start p-4`}>

                <div className="py-8">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-left">
                      <h3 className="text-base text-cyan-600 font-semibold tracking-wide uppercase">Projeto ProdamDEV</h3>
                      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
                        Conclusão
                      </p>
                      <p className="mt-4 max-w-2xl text-xl text-gray-200">
                        Da mesma forma que existe a preocupação com assuntos laterais na Prodam, como o Portal, RH, Convênio, DIPAR, etc, os desenvolvedores precisam de atenção, pela falta deles nos projetos, para a valorização dos interessados, para novos projetos e para o futuro da própria empresa.
                      </p>
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
