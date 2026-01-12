import { useTranslation } from 'react-i18next';

const ComoTrabajo = () => {
  const { t } = useTranslation();

  return (
    <div className="py-32 bg-gradient-to-b from-white via-salmon-50/20 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-salmon-200 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-salmon-600 uppercase tracking-wider">La meva metodologia</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-salmon-600 via-rose-600 to-lilac-600 bg-clip-text text-transparent">
            {t('comoTrabajo.titulo')}
          </h1>
        </div>

        {/* Modalidad */}
        <div className="relative mb-16 group">
          <div className="absolute inset-0 bg-gradient-to-br from-salmon-100/30 to-transparent rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
          <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
            <div className="flex items-start mb-8">
              <div className="bg-gradient-to-br from-salmon-400 to-salmon-600 text-white rounded-3xl p-6 mr-8 flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-1 pt-2">
                <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
                  {t('comoTrabajo.modalidad.titulo')}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  El meu acompanyament es desenvolupa en modalitat online, una forma de treball que ofereix nombrosos avantatges, permet estalviar temps i desplaçaments, facilita la conciliació amb la vida quotidiana i dona accés a la teràpia des de qualsevol lloc, sempre en un entorn segur i confidencial.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-salmon-50 rounded-2xl p-6">
                    <div className="w-12 h-12 bg-salmon-500 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Estalvi de temps</h4>
                    <p className="text-gray-600 text-sm">Sense desplaçaments ni esperes</p>
                  </div>
                  <div className="bg-rose-50 rounded-2xl p-6">
                    <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Des de casa</h4>
                    <p className="text-gray-600 text-sm">Des de qualsevol lloc còmode</p>
                  </div>
                  <div className="bg-lilac-50 rounded-2xl p-6">
                    <div className="w-12 h-12 bg-lilac-500 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Segur i confidencial</h4>
                    <p className="text-gray-600 text-sm">Entorn protegit i privat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Primer Contacto */}
        <div className="relative mb-16 group">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 to-transparent rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform"></div>
          <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
            <div className="flex items-start mb-8">
              <div className="bg-gradient-to-br from-rose-400 to-rose-600 text-white rounded-3xl p-6 mr-8 flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="flex-1 pt-2">
                <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
                  {t('comoTrabajo.primerContacto.titulo')}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  {t('comoTrabajo.primerContacto.texto')}
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Abans de començar qualsevol procés, es realitza una entrevista telefònica inicial. 
                  Aquesta primera presa de contacte serveix per conèixer millor la demanda, valorar, 
                  per ambdues parts, si sóc la professional adequada per acompanyar el cas, explicar breument 
                  la meva metodologia i acordar una data per a la primera sessió.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Es tracta d'un pas essencial per establir un vincle de confiança des del primer moment 
                  i assegurar que el procés d'acompanyament s'inicia amb claredat i tranquil·litat.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filosofía */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-lilac-100/30 to-rose-100/30 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
          <div className="relative bg-gradient-to-br from-lilac-50 to-rose-50 rounded-3xl p-12 shadow-2xl border border-lilac-100">
            <div className="flex items-start mb-8">
              <div className="bg-gradient-to-br from-lilac-400 to-lilac-600 text-white rounded-3xl p-6 mr-8 flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div className="flex-1 pt-2">
                <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
                  {t('comoTrabajo.filosofia.titulo')}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  {t('comoTrabajo.filosofia.texto')}
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Un aspecte fonamental és que els objectius sempre els marca la persona o persones consultores. 
                  Jo no imposo metes ni camins concrets, sinó que adapto l'acompanyament a les necessitats, 
                  els ritmes i les prioritats de cadascú.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Això garanteix que la intervenció sigui realment significativa per a qui la viu. 
                  Totes les sessions es duen a terme sota un compromís absolut de confidencialitat, 
                  garantint que la informació compartida queda protegida i que l'espai terapèutic 
                  és segur i respectuós.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComoTrabajo;
