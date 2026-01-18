import { useTranslation } from 'react-i18next';

const QuienSoy = () => {
  const { t } = useTranslation();

  return (
    <div className="py-32 bg-gradient-to-b from-salmon-50/20 via-white to-rose-50/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-salmon-200 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-salmon-600 uppercase tracking-wider">Sobre mi</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-salmon-600 via-rose-600 to-lilac-600 bg-clip-text text-transparent">
            {t('quienSoy.titulo')}
          </h1>
        </div>

        {/* Foto y Presentación */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-salmon-200/50 to-rose-200/50 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
            <div className="relative bg-gradient-to-br from-white to-salmon-50/50 rounded-3xl p-10 shadow-2xl border border-salmon-100 h-full">
              <div className="aspect-square rounded-3xl mb-6 overflow-hidden shadow-xl relative">
                <img 
                  src="/images/nuba_perfil.jpg" 
                  alt="Núria Llurba - Psicòloga" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 to-transparent rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform"></div>
            <div className="relative bg-gradient-to-br from-white via-salmon-50/20 to-white rounded-3xl p-12 shadow-2xl border border-salmon-100/50 h-full">
              <h2 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-salmon-600 via-rose-600 to-lilac-600 bg-clip-text text-transparent">
                Núria Llurba
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Em dic Núria Llurba i soc psicòloga, especialitzada en teràpia sexual i de parella, amb formació complementària en teràpia familiar, i properament també en neuropsicologia i psicologia perinatal.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-salmon-100 to-rose-100 rounded-full border border-salmon-200">
                <svg className="w-5 h-5 text-salmon-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-salmon-700 font-bold text-lg">
                  Psicòloga col·legiada nº 33667
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cronología de Experiencia */}
        <div className="relative mb-32">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-salmon-600 uppercase tracking-wider">La meva trajectòria professional</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-salmon-600 via-rose-600 to-lilac-600 bg-clip-text text-transparent">
              Experiència professional
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Experiència sòlida i formació contínua per oferir un acompanyament rigorós i actualitzat.
            </p>
          </div>

          {/* Cronología moderna - Diseño centrado que aprovecha todo el espacio */}
          <div className="relative space-y-12 md:space-y-16">
            {/* Elementos decorativos de fondo orgánicos */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/4 right-[10%] w-32 h-32 bg-salmon-200/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-[15%] w-40 h-40 bg-rose-200/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-[20%] w-36 h-36 bg-lilac-200/20 rounded-full blur-3xl"></div>
            </div>

            {/* Item 1 - Psicologia Forense */}
            <div className="relative w-full group">
              <div className="relative bg-gradient-to-br from-white via-salmon-50/30 to-white rounded-3xl p-8 lg:p-12 shadow-xl border border-salmon-100/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Elemento decorativo superior izquierdo */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-salmon-400 to-salmon-600 rounded-2xl flex items-center justify-center shadow-xl rotate-12 group-hover:rotate-6 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                
                {/* Círculo decorativo pequeño */}
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-salmon-300/40 rounded-full"></div>
                
                <div className="flex flex-col">
                  <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-salmon-100 to-salmon-50 rounded-full mb-5 border border-salmon-200/50">
                    <span className="text-sm font-semibold text-salmon-700">Psicologia Forense</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 leading-tight">Equip d'Assessorament Tècnic Penal</h3>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-4">
                    En l'àmbit de la justícia penal, la meva tasca es va centrat en la protecció i recollida del testimoni de menors víctimes d'abús sexual, prova preconstituïda. Mitjançant l'entrevista cognitiva, es garanteix que el testimoni de l'infant tingui validesa judicial en un entorn protegit, evitant que hagi de declarar davant el tribunal i minimitzant el seu impacte emocional.
                  </p>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    Aquesta experiència m'ha proporcionat les habilitats necessàries per treballar amb delicadesa, empatia i rigor professional, competències que trasllado a tots els àmbits de la meva pràctica.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 2 - Universitat de Barcelona */}
            <div className="relative w-full group">
              <div className="relative bg-gradient-to-br from-white via-rose-50/30 to-white rounded-3xl p-8 lg:p-12 shadow-xl border border-rose-100/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Elemento decorativo superior izquierdo */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl flex items-center justify-center shadow-xl -rotate-12 group-hover:-rotate-6 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                
                {/* Círculo decorativo pequeño */}
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-rose-300/40 rounded-full"></div>
                
                <div className="flex flex-col">
                  <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-rose-100 to-rose-50 rounded-full mb-5 border border-rose-200/50">
                    <span className="text-sm font-semibold text-rose-700">Psicoteràpia</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 leading-tight">Universitat de Barcelona</h3>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-4">
                    Actualment, formo part d'un equip terapèutic a la UB especialitzat en l'abordatge de teràpia sexual i de parella. En aquest context, col·laboro en la intervenció de casos complexos des d'una mirada compartida, tasca que combino amb el meu rol com a terapeuta en altres processos clínics dins de la mateixa unitat.
                  </p>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    Aquest espai de pràctica continuada em permet desenvolupar i perfeccionar les meves competències en teràpia sistèmica i en l'acompanyament a parelles i persones amb dificultats sexuals. Així mateix, m'aporta habilitats clau en la supervisió de casos i en l'anàlisi clínica compartida amb altres professionals del sector.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3 - Formació continuada */}
            <div className="relative w-full group">
              <div className="relative bg-gradient-to-br from-white via-lilac-50/30 to-white rounded-3xl p-8 lg:p-12 shadow-xl border border-lilac-100/50 hover:shadow-2xl transition-all duration-300">
                {/* Elemento decorativo superior izquierdo */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-lilac-400 to-lilac-600 rounded-2xl flex items-center justify-center shadow-xl -rotate-12 group-hover:-rotate-6 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                
                {/* Círculos decorativos pequeños */}
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-lilac-300/40 rounded-full"></div>
                <div className="absolute top-8 -right-2 w-4 h-4 bg-lilac-200/50 rounded-full"></div>
                
                {/* Header */}
                <div className="mb-8">
                  <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-lilac-100 to-lilac-50 rounded-full mb-6 border border-lilac-200/50">
                    <span className="text-sm font-semibold text-lilac-700">Formació continuada</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 leading-tight">Especialitzacions i formació constant</h3>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    La meva trajectòria acadèmica s'inicia amb el Grau en Psicologia per la Universitat Oberta de Catalunya (UOC), on vaig cursar l'especialitat en Psicologia de la Salut, una base fonamental per a l'abordatge del benestar humà des d'una perspectiva científica.
                  </p>
                </div>
                
                {/* Grid de formaciones mejorado */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
                  {/* Màster Teràpia Sexual */}
                  <div className="group/card relative bg-white rounded-2xl p-7 border-2 border-lilac-100/50 shadow-md hover:shadow-2xl hover:border-lilac-300/50 transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-start gap-5 mb-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-lilac-400 to-lilac-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/card:scale-110 group-hover/card:rotate-3 transition-transform">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div className="flex-1 pt-1">
                        <h4 className="font-bold text-gray-800 text-xl leading-tight mb-3">Màster en Teràpia Sexual i de Parella</h4>
                      </div>
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed">Amb l'objectiu d'especialitzar-me en la complexitat de les relacions i la intimitat, vaig realitzar el Màster en Teràpia Sexual i de Parella a la Universitat de Barcelona (UB), una formació que m'ha proporcionat les competències clíniques necessàries per intervenir en les dinàmiques vinculars i la salut sexual.</p>
                  </div>
                  
                  {/* Dol Gestacional */}
                  <div className="group/card relative bg-white rounded-2xl p-7 border-2 border-lilac-100/50 shadow-md hover:shadow-2xl hover:border-lilac-300/50 transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-start gap-5 mb-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-lilac-400 to-lilac-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/card:scale-110 group-hover/card:rotate-3 transition-transform">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div className="flex-1 pt-1">
                        <h4 className="font-bold text-gray-800 text-xl leading-tight mb-3">Dol Gestacional i Neonatal</h4>
                      </div>
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed">Així mateix, m'he especialitzat en l'acompanyament del dol gestacional i neonatal a través d'una formació específica al Col·legi Oficial de Psicologia de Catalunya (COPC), per atendre amb la delicadesa i el rigor els processos de dol davant la mort d'un fill o filla en l'etapa perinatal.</p>
                  </div>
                  
                  {/* Màster Neuropsicologia */}
                  <div className="group/card relative bg-white rounded-2xl p-7 border-2 border-lilac-100/50 shadow-md hover:shadow-2xl hover:border-lilac-300/50 transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-start gap-5 mb-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-lilac-400 to-lilac-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/card:scale-110 group-hover/card:rotate-3 transition-transform">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div className="flex-1 pt-1">
                        <h4 className="font-bold text-gray-800 text-xl leading-tight mb-3">Màster en Neuropsicologia</h4>
                      </div>
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed">En la meva aposta per una actualització constant i una visió transversal de la persona, actualment estic cursant el Màster en Neuropsicologia a la UOC, amb l'objectiu d'aprofundir en les bases neurobiològiques del comportament i el funcionament cognitiu.</p>
                  </div>
                  
                  {/* Postgrau Perinatal */}
                  <div className="group/card relative bg-white rounded-2xl p-7 border-2 border-lilac-100/50 shadow-md hover:shadow-2xl hover:border-lilac-300/50 transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-start gap-5 mb-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-lilac-400 to-lilac-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/card:scale-110 group-hover/card:rotate-3 transition-transform">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div className="flex-1 pt-1">
                        <h4 className="font-bold text-gray-800 text-xl leading-tight mb-3">Postgrau en Psicologia Perinatal</h4>
                      </div>
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed">Paral·lelament, en breus iniciaré el postgrau en Psicologia Perinatal a la UNIR, una especialització que em permetrà ampliar l'atenció i el suport emocional durant l'embaràs, el part i el postpart.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enfoque */}
        <div className="relative group mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-lilac-100/30 to-rose-100/30 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform"></div>
          <div className="relative bg-gradient-to-br from-lilac-50 to-rose-50 rounded-3xl p-12 shadow-2xl border border-lilac-100">
            <h3 className="text-4xl font-extrabold mb-8 text-gray-800 flex items-center gap-5">
              <div className="w-16 h-16 bg-gradient-to-br from-lilac-400 to-lilac-600 rounded-2xl flex items-center justify-center shadow-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              El meu enfocament
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              El meu enfocament es sistèmic però incorporo eines d'altres corrents per poder oferir unes sessions més adaptades a cada persona i circumstància. La teràpia sistèmica parteix de la idea que les dificultats d'una persona no es poden entendre aïlladament, sinó que s'han d'entendre dins del context de les seves relacions i dels sistemes en què participa.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Aquesta perspectiva m'ajuda a veure patrons, connexions i influències que sovint passen desapercebuts, i a intervenir de manera que es generin canvis reals i sostenibles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienSoy;
