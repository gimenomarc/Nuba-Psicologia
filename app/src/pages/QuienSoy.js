import { useTranslation } from 'react-i18next';

const QuienSoy = () => {
  const { t } = useTranslation();

  return (
    <div className="py-32 bg-gradient-to-b from-white via-salmon-50/20 to-white relative overflow-hidden">
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
            <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 h-full">
              <h2 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-salmon-600 via-rose-600 to-lilac-600 bg-clip-text text-transparent">
                Núria Llurba
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Em dic Núria Llurba i soc psicòloga, especialitzada en teràpia sexual i de parella, amb formació complementària en psicologia perinatal, i properament també en neuropsicologia.
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
              <span className="text-sm font-semibold text-salmon-600 uppercase tracking-wider">La meva trajectòria</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-salmon-600 via-rose-600 to-lilac-600 bg-clip-text text-transparent">
              Experiència Professional
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Un recorregut que combina psicologia forense, psicoteràpia i especialització en teràpia sexual i de parella
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Línea vertical del timeline */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-salmon-200 via-rose-200 to-lilac-200 transform md:-translate-x-1/2"></div>

            {/* Items del timeline */}
            <div className="space-y-16">
              {/* Item 1 */}
              <div className="relative flex items-start gap-8">
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-salmon-400 to-salmon-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 ml-24 md:ml-0 md:mr-auto md:w-[45%]">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                    <div className="inline-block px-4 py-2 bg-salmon-100 rounded-full mb-4">
                      <span className="text-sm font-semibold text-salmon-700">Psicologia Forense</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Equip d'Assessorament Tècnic Penal</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Treball amb menors víctimes d'abús sexual en l'equip d'assessorament tècnic penal dels Jutjats de Barcelona.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Aquesta experiència m'ha proporcionat les habilitats necessàries per treballar amb delicadesa, empatia i rigor professional, competències que trasllado a tots els àmbits de la meva pràctica.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative flex items-start gap-8">
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 ml-24 md:ml-auto md:w-[45%]">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                    <div className="inline-block px-4 py-2 bg-rose-100 rounded-full mb-4">
                      <span className="text-sm font-semibold text-rose-700">Psicoteràpia</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Universitat de Barcelona</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Formant part de l'equip terapèutic de la universitat de Barcelona, com a terapeuta especialitzada en sexualitat i teràpia de parella.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Aquest espai m'ha permès desenvolupar i perfeccionar les meves competències en teràpia sistèmica i en l'acompanyament de parelles i persones amb dificultats sexuals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative flex items-start gap-8">
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-lilac-400 to-lilac-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 ml-24 md:ml-0 md:mr-auto md:w-[45%]">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                    <div className="inline-block px-4 py-2 bg-lilac-100 rounded-full mb-4">
                      <span className="text-sm font-semibold text-lilac-700">Formació Continuada</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Especialitzacions</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Formació complementària en psicologia perinatal i properament també en neuropsicologia per oferir un servei complet i adaptat a diferents necessitats.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-lilac-500 mt-1">✓</span>
                        <span>Teràpia sexual i de parella</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-lilac-500 mt-1">✓</span>
                        <span>Psicologia perinatal</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-lilac-500 mt-1">✓</span>
                        <span>Neuropsicologia (en curs)</span>
                      </li>
                    </ul>
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
