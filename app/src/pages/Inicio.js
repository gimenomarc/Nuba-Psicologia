import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Inicio = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      {/* Hero Section Mejorado */}
      <section className="relative overflow-hidden bg-gradient-to-br from-salmon-50 via-rose-50 to-brown-50 py-32 md:py-48">
        {/* Decorative elements mejorados */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-salmon-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brown-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-salmon-700 shadow-xl border border-salmon-200/50">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Psicòloga Col·legiada nº 33667
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.15] pb-4 bg-gradient-to-r from-salmon-600 via-rose-600 to-brown-600 bg-clip-text text-transparent">
                Benvinguda
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-medium">
                El canvi comença quan deixem de mirar només la persona.
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Acompaño des d'un enfocament sistèmic, ampliant el focus per observar patrons relacionals i obrir possibilitats de canvi ajustades a la realitat de cada persona.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Link
                  to="/contacto"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-salmon-500 to-rose-500 text-white px-10 py-5 rounded-full font-bold hover:from-salmon-600 hover:to-rose-600 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 text-lg"
                >
                  Contacta'm
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  to="/servicios"
                  className="inline-flex items-center justify-center gap-2 bg-white text-salmon-600 px-10 py-5 rounded-full font-bold hover:bg-salmon-50 transition-all shadow-xl hover:shadow-2xl border-2 border-salmon-200 text-lg"
                >
                  Veure serveis
                </Link>
              </div>
            </div>
            <div className="relative lg:mt-8">
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <img 
                  src="/images/IMG_1974.jpg" 
                  alt="Fondo" 
                  className="w-full h-full object-cover opacity-25"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-rose-200/70 to-salmon-200/70 backdrop-blur-md"></div>
              </div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/50">
                <div className="space-y-5 lg:space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-salmon-400 to-salmon-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-1">Acompanyament terapèutic online</h3>
                      <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">Des de qualsevol lloc, en un entorn segur i confidencial.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-1">Contacte inicial</h3>
                      <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">Valorem junts si soc la professional adequada pel teu cas.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-brown-400 to-brown-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-1">Centrat en els teus objectius</h3>
                      <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">L'acompanyament terapèutic es construeix al voltant de les teves necessitats i del que vols treballar.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de experiencia destacada */}
      <section className="py-20 bg-gradient-to-b from-rose-50/30 via-white to-salmon-50/20 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <span className="text-7xl sm:text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-salmon-600 via-rose-600 to-brown-600 bg-clip-text text-transparent leading-none">
                  4
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                  anys d'experiència
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva Sección: Por qué elegirme */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-rose-50/30 via-white to-salmon-50/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block mb-4 lg:mb-6">
              <span className="text-xs lg:text-sm font-semibold text-rose-600 uppercase tracking-wider">Per què escollir-me</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 lg:mb-8 bg-gradient-to-r from-salmon-600 via-rose-600 to-brown-600 bg-clip-text text-transparent">
              La meva experiència i compromís
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
              Experiència sòlida i formació contínua per oferir un acompanyament rigorós i actualitzat.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-white via-rose-50/20 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-rose-100/50 group hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-salmon-400 to-salmon-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Psicología forense</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Treball amb menors víctimes d'abús sexual en l'equip d'assessorament tècnic penal dels Jutjats de Barcelona.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white via-rose-50/20 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-rose-100/50 group hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Universitat de Barcelona</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Membre de l'equip terapèutic i especialista en teràpia sexual i de parella.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white via-rose-50/20 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-rose-100/50 group hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-brown-400 to-brown-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Formació continua</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Especialització en neuropsicologia i psicologia perinatal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores y Enfoque - Mejorado */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-salmon-50/20 via-white to-brown-50/20 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-salmon-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block mb-4 lg:mb-6">
              <span className="text-xs lg:text-sm font-semibold text-salmon-600 uppercase tracking-wider">El meu enfocament</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 lg:mb-8 bg-gradient-to-r from-salmon-600 via-rose-600 to-brown-600 bg-clip-text text-transparent">
              Com treballo
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6 lg:mb-8 px-4">
              La teràpia sistèmica parteix de la idea que les dificultats d'una persona no es poden entendre aïlladament, 
              sinó que s'han d'entendre dins del context de les seves relacions i dels sistemes en què participa.
            </p>
            <p className="text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Acompanyo des d'un enfocament sistèmic, ampliant el focus per observar patrons relacionals i obrir possibilitats de canvi ajustades a la realitat de cada persona.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-salmon-100 to-transparent rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
              <div className="relative text-center p-8 lg:p-10 bg-gradient-to-br from-white via-salmon-50/20 to-white rounded-3xl shadow-xl border border-salmon-100/50 group-hover:shadow-2xl transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-salmon-400 to-salmon-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-800">Base sistèmica adaptada</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Veig patrons, connexions i influències que sovint passen desapercebuts, 
                  per intervenir de manera que es generin canvis reals i sostenibles.
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-transparent rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform"></div>
              <div className="relative text-center p-10 bg-gradient-to-br from-white via-rose-50/20 to-white rounded-3xl shadow-xl border border-rose-100/50 group-hover:shadow-2xl transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-rose-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-800">Generació de canvis reals</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Incorporo eines d'altres corrents per oferir sessions més adaptades 
                  a cada persona i circumstància. Els objectius sempre els marca qui consulta.
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brown-100 to-transparent rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
              <div className="relative text-center p-10 bg-gradient-to-br from-white via-brown-50/20 to-white rounded-3xl shadow-xl border border-brown-100/50 group-hover:shadow-2xl transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-brown-400 to-brown-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-800">Respecte a cada vincle sense jutjar</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  La meva experiència en psicologia forense i psicoteràpia m'ha proporcionat les habilitats 
                  necessàries per treballar amb delicadesa, empatia i rigor professional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva Sección: Proceso de trabajo */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-brown-50/20 via-white to-salmon-50/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brown-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block mb-4 lg:mb-6">
              <span className="text-xs lg:text-sm font-semibold text-brown-600 uppercase tracking-wider">El procés</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 lg:mb-8 bg-gradient-to-r from-salmon-600 via-rose-600 to-brown-600 bg-clip-text text-transparent">
              Com funciona el procés
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
              Procés clar i transparent per al benestar emocional
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 relative max-w-6xl mx-auto">
            {/* Línea conectora */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-salmon-200 via-rose-200 to-brown-200"></div>
            
            <div className="relative bg-gradient-to-br from-white via-brown-50/20 to-white rounded-2xl p-6 lg:p-8 shadow-xl border border-brown-100/50 text-center group hover:shadow-2xl transition-all">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-salmon-400 to-salmon-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform border-4 border-white">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
              </div>
              <div className="mt-6 lg:mt-8">
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-800">Contacte inicial</h3>
                <p className="text-gray-600 leading-relaxed text-xs lg:text-sm">
                  Em contactes per telèfon o email per sol·licitar una consulta inicial
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-white via-brown-50/20 to-white rounded-2xl p-6 lg:p-8 shadow-xl border border-brown-100/50 text-center group hover:shadow-2xl transition-all">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform border-4 border-white">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
              </div>
              <div className="mt-6 lg:mt-8">
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-800">Entrevista telefònica</h3>
                <p className="text-gray-600 leading-relaxed text-xs lg:text-sm">
                  Parlem per telèfon per conèixer la teva demanda i valorar si sóc la professional adequada
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-white via-brown-50/20 to-white rounded-2xl p-6 lg:p-8 shadow-xl border border-brown-100/50 text-center group hover:shadow-2xl transition-all">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-brown-400 to-brown-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform border-4 border-white">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
              </div>
              <div className="mt-6 lg:mt-8">
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-800">Primera sessió</h3>
                <p className="text-gray-600 leading-relaxed text-xs lg:text-sm">
                  Establim objectius i context per començar el procés d'acompanyament
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-white via-brown-50/20 to-white rounded-2xl p-6 lg:p-8 shadow-xl border border-brown-100/50 text-center group hover:shadow-2xl transition-all">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-salmon-300 to-rose-500 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform border-4 border-white">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
              </div>
              <div className="mt-6 lg:mt-8">
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-800">Procés terapèutic a mida</h3>
                <p className="text-gray-600 leading-relaxed text-xs lg:text-sm">
                  Desenvolupem el procés terapèutic o d'assessorament i acompanyament adaptat a les teves necessitats
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-white via-brown-50/20 to-white rounded-2xl p-6 lg:p-8 shadow-xl border border-brown-100/50 text-center group hover:shadow-2xl transition-all md:col-span-2 lg:col-span-1">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-brown-500 to-rose-500 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform border-4 border-white">
                  <span className="text-white font-bold text-lg">5</span>
                </div>
              </div>
              <div className="mt-6 lg:mt-8">
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-800">Seguiment tras l'alta</h3>
                <p className="text-gray-600 leading-relaxed text-xs lg:text-sm">
                  Acompanyament continuat per assegurar el teu benestar i l'evolució del procés
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios destacados - Mejorado */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-salmon-50/20 via-rose-50/30 to-brown-50/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block mb-4 lg:mb-6">
              <span className="text-xs lg:text-sm font-semibold text-rose-600 uppercase tracking-wider">Els meus serveis</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-salmon-600 via-rose-600 to-brown-600 bg-clip-text text-transparent">
              Serveis
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
              Serveis especialitzats adaptats a les teves necessitats
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Consulta Psicológica */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-salmon-200/50 to-transparent rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform"></div>
              <div className="relative bg-gradient-to-br from-white via-salmon-50/20 to-white p-10 rounded-3xl shadow-xl border border-salmon-100/50 hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-salmon-400 to-salmon-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-800">
                  Consulta psicològica
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed flex-grow">
                  Espai de confiança per a individus, parelles o famílies.
                </p>
                <ul className="space-y-4 text-gray-600 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-salmon-500 mt-1 text-xl">✓</span>
                    <span>Teràpia de parella i familiar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-salmon-500 mt-1 text-xl">✓</span>
                    <span>Teràpia sexual</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-salmon-500 mt-1 text-xl">✓</span>
                    <span>Psicologia perinatal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-salmon-500 mt-1 text-xl">✓</span>
                    <span>Assessorament psicològic</span>
                  </li>
                </ul>
                <Link
                  to="/servicios"
                  className="inline-flex items-center gap-2 text-salmon-600 hover:text-salmon-700 font-bold group-hover:gap-3 transition-all text-lg mt-auto"
                >
                  Veure més
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Talleres */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-200/50 to-transparent rounded-3xl transform -rotate-2 group-hover:-rotate-3 transition-transform"></div>
              <div className="relative bg-gradient-to-br from-white via-rose-50/20 to-white p-10 rounded-3xl shadow-xl border border-rose-100/50 hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-800">
                  Tallers de psicoeducació
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed flex-grow">
                  Espais grupals per a nens, adolescents i famílies.
                </p>
                <ul className="space-y-4 text-gray-600 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 mt-1 text-xl">•</span>
                    <span>Assetjament escolar, gestió emocional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 mt-1 text-xl">•</span>
                    <span>Sexualitat i afectivitat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 mt-1 text-xl">•</span>
                    <span>Relacions sanes i comunicació</span>
                  </li>
                </ul>
                <Link
                  to="/servicios"
                  className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-bold group-hover:gap-3 transition-all text-lg mt-auto"
                >
                  Veure més
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Club Hípic */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-brown-200/50 to-transparent rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform"></div>
              <div className="relative bg-gradient-to-br from-white via-brown-50/20 to-white p-10 rounded-3xl shadow-xl border border-brown-100/50 hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-brown-400 to-brown-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-800">
                  Club Hípic Julivert
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed flex-grow">
                  Teràpia i formació amb cavalls en entorn natural.
                </p>
                <ul className="space-y-4 text-gray-600 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-brown-500 mt-1 text-xl">•</span>
                    <span>Mindfulness amb cavalls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brown-500 mt-1 text-xl">•</span>
                    <span>Superar traumes i pors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brown-500 mt-1 text-xl">•</span>
                    <span>Team building empresarial</span>
                  </li>
                </ul>
                <Link
                  to="/club-hipic"
                  className="inline-flex items-center gap-2 text-brown-600 hover:text-brown-700 font-bold group-hover:gap-3 transition-all text-lg mt-auto"
                >
                  Veure més
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva Sección: Cita inspiradora */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-salmon-100/50 via-rose-100/50 to-brown-100/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-salmon-200 to-transparent"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-salmon-200/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-rose-200/30 rounded-full blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-white/95 via-salmon-50/20 to-white/95 backdrop-blur-sm rounded-3xl p-16 shadow-2xl border border-salmon-100/30">
              <svg className="w-16 h-16 text-salmon-400 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849v4.858h-5.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.997 3.638-3.997 5.849v4.858h-5.999z"/>
              </svg>
              <blockquote className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 leading-relaxed">
                "Les dificultats d'una persona no es poden entendre aïlladament, 
                sinó que s'han d'entendre dins del context de les seves relacions"
              </blockquote>
              <p className="text-xl text-gray-600 font-medium">
                — Enfocament Sistèmic
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mejorado */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-salmon-50 via-rose-50 to-brown-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-salmon-200 to-transparent"></div>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-salmon-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-white/95 via-rose-50/20 to-white/95 backdrop-blur-sm rounded-3xl p-16 shadow-2xl border border-rose-100/30">
            <div className="inline-block mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-salmon-400 to-rose-500 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-salmon-600 to-rose-600 bg-clip-text text-transparent">
              Necessites ajuda?
            </h2>
            <p className="text-2xl text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed font-medium">
              Abans de començar qualsevol procés, realitzem una <strong className="text-salmon-600">entrevista telefònica inicial gratuïta</strong>.
            </p>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Aquesta primera presa de contacte serveix per conèixer-te millor, valorar si sóc la professional adequada 
              per acompanyar el teu cas, i acordar una data per a la primera sessió.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                to="/contacto"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-salmon-500 to-rose-500 text-white px-12 py-5 rounded-full font-bold hover:from-salmon-600 hover:to-rose-600 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 text-lg"
              >
                {t('nav.contacto')}
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
              <a
                href="mailto:info@nubapsicologia.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-salmon-600 px-12 py-5 rounded-full font-bold hover:bg-salmon-50 transition-all shadow-xl hover:shadow-2xl border-2 border-salmon-200 text-lg"
              >
                info@nubapsicologia.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
