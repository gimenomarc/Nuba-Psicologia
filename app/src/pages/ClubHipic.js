import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ClubHipic = () => {
  const { t } = useTranslation();

  return (
    <div className="py-32 bg-gradient-to-b from-white via-lilac-50/20 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lilac-200 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-lilac-600 uppercase tracking-wider">Club Hípic Julivert</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-lilac-600 via-salmon-600 to-rose-600 bg-clip-text text-transparent">
            Club Hípic Julivert
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Activitats que combinen psicologia i cavalls per al benestar emocional i el creixement personal.
          </p>
        </div>

        <div className="space-y-16 mb-20">
          {/* Mindfulness con Caballos */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-salmon-100/30 to-transparent rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
            <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
              <div className="flex items-start gap-8">
                <div className="w-20 h-20 bg-gradient-to-br from-salmon-400 to-salmon-600 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-extrabold mb-6 text-gray-800">
                    Mindfulness amb Cavalls
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    T'has aturat mai a notar què passa dins teu mentre observes un cavall? El mindfulness amb cavalls és una pràctica que combina atenció plena i connexió amb l'animal. Mitjançant exercicis de respiració, observació i interacció respectuosa amb el cavall, els participants aprenen a estar presents, reconèixer les seves emocions i desenvolupar una major coherència interna.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    És una experiència tranquil·la, enriquidora i reflexiva, que convida a portar aquesta presència a la vida quotidiana. Estar present, sentir, connectar: aquí i ara amb cada pas.
                  </p>
                  <div className="bg-salmon-50 rounded-2xl p-6 border-l-4 border-salmon-500">
                    <p className="text-lg text-gray-700">
                      <strong className="text-salmon-700">Públic objectiu:</strong> Adults que volen aprendre a gestionar l'estrès i les emocions, millorar la concentració i la consciència corporal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Superar Pors y Traumes */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 to-transparent rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform"></div>
            <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
              <div className="flex items-start gap-8">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-rose-600 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-extrabold mb-6 text-gray-800">
                    Superar Pors i Traumes amb Cavalls
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Com es reconstrueix la confiança després d'un accident o una experiència que ens ha marcat? Aquesta teràpia combina la teràpia narrativa amb tècniques cognitiu-conductuals amb exercicis vivencials amb cavalls per processar traumes i por.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Es treballa a consulta i en interacció directa amb l'animal, ajudant a comprendre les pròpies reaccions, integrar l'experiència i reconstruir la confiança i el sentit de seguretat. És un espai on experimentar el canvi com a vivència real, amb suport i seguretat.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-8 italic text-rose-600">
                    No és el cavall qui et guia, ets tu mateix que reaprenes a confiar.
                  </p>
                  <div className="bg-rose-50 rounded-2xl p-6 border-l-4 border-rose-500">
                    <p className="text-lg text-gray-700">
                      <strong className="text-rose-700">Públic objectiu:</strong> Genets o persones amb fòbies/pors després de traumes amb cavalls, que volen recuperar seguretat i control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Refuerzo Emocional */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-lilac-100/30 to-transparent rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
            <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
              <div className="flex items-start gap-8">
                <div className="w-20 h-20 bg-gradient-to-br from-lilac-400 to-lilac-600 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-extrabold mb-6 text-gray-800">
                    Reforç Emocional amb Cavalls
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Com podem conèixer-nos millor i enfortir la nostra autoestima amb un mirall tan sincer com un cavall? Aquestes sessions utilitzen el cavall com a mirall emocional per treballar autoestima, empoderament i regulació emocional.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Permet experimentar lideratge, límits i autocontrol de manera vivencial i segura, observant com les nostres emocions i actituds afecten la interacció amb l'animal i amb els altres.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-8 italic text-lilac-600">
                    Aprendre a confiar en tu mateix mentre confies en ell.
                  </p>
                  <div className="bg-lilac-50 rounded-2xl p-6 border-l-4 border-lilac-500">
                    <p className="text-lg text-gray-700">
                      <strong className="text-lilac-700">Públic objectiu:</strong> Adolescents, adults i famílies que busquen millorar l'autoestima, la coherència interna i la regulació emocional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Building */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-salmon-100/30 to-transparent rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform"></div>
            <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
              <div className="flex items-start gap-8">
                <div className="w-20 h-20 bg-gradient-to-br from-salmon-300 to-salmon-500 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-extrabold mb-6 text-gray-800">
                    Team Building amb Cavalls
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Què passa quan l'equip ha d'aprendre a comunicar-se sense paraules i a confiar sense pressions? Aquestes sessions combinen dinàmiques de grup amb la interacció amb cavalls, fomentant empatia, confiança, coordinació i presa de decisions conjunta.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Els participants descobreixen habilitats personals i col·lectives, reflexionen sobre la comunicació i el lideratge, i experimenten un aprenentatge vivencial transferible a la feina.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-8 italic text-salmon-600">
                    Aprendre junts, créixer junts: cada pas compta.
                  </p>
                  <div className="bg-salmon-50 rounded-2xl p-6 border-l-4 border-salmon-500">
                    <p className="text-lg text-gray-700">
                      <strong className="text-salmon-700">Públic objectiu:</strong> Empreses i grups professionals que volen millorar cohesió, comunicació i lideratge a través d'experiències vivencials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Excursiones Escolares */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 to-transparent rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
            <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
              <div className="flex items-start gap-8">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-rose-600 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-extrabold mb-6 text-gray-800">
                    Excursions Escolars i Tallers Educatius amb Cavalls
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    I si aprendre sobre responsabilitat, empatia i treball en equip fos una aventura amb cavalls? Les excursions escolars amb cavalls permeten aprendre valors com responsabilitat, empatia, autocontrol i cooperació, amb activitats adaptades a l'edat i necessitats del grup.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Els alumnes connecten amb els animals i amb els companys, experimentant el desenvolupament emocional i social d'una manera pràctica i divertida.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-8 italic text-rose-600">
                    Deixa que els cavalls t'ensenyin a posar-te a la pell dels altres.
                  </p>
                  <div className="bg-rose-50 rounded-2xl p-6 border-l-4 border-rose-500">
                    <p className="text-lg text-gray-700">
                      <strong className="text-rose-700">Públic objectiu:</strong> Escolars de diverses edats que volen aprendre habilitats emocionals i socials d'una manera pràctica i vivencial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hípic Clínic */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-lilac-100/30 to-transparent rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform"></div>
            <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
              <div className="flex items-start gap-8">
                <div className="w-20 h-20 bg-gradient-to-br from-lilac-400 to-lilac-600 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-extrabold mb-6 text-gray-800">
                    Hípic Clínic
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Com seria poder perfeccionar les teves habilitats amb cavalls mentre aprens a gestionar les teves emocions en cada repte? Els Hipic Clinic són seminaris pràctics dissenyats per combinar aprendre i perfeccionar tècniques eqüestres amb estratègies psicològiques per gestionar l'estrès, les emocions i la concentració.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Guiats per una genet professional i una psicòloga, els participants treballen habilitats de muntar, conduir i comunicar-se amb el cavall, mentre exploren recursos per mantenir la calma i el control en situacions de pressió. Cada sessió és intensa, vivencial i enfocada a potenciar el rendiment i el benestar, proporcionant eines tant tècniques com emocionals que es poden aplicar immediatament en la pràctica eqüestre.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-8 italic text-lilac-600">
                    Aprendre/perfeccionar la tècnica, entrenar la ment.
                  </p>
                  <div className="bg-lilac-50 rounded-2xl p-6 border-l-4 border-lilac-500">
                    <p className="text-lg text-gray-700">
                      <strong className="text-lilac-700">Públic objectiu:</strong> Genets, aficionats i professionals de l'equitació que volen millorar tècnica, confiança i gestió emocional en competicions o entrenaments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative mt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-lilac-100/30 to-salmon-100/30 rounded-3xl transform rotate-1"></div>
          <div className="relative bg-gradient-to-r from-lilac-100 to-salmon-100 rounded-3xl p-16 text-center shadow-2xl border border-white/50">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">
              Interessat en les nostres activitats?
            </h2>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Contacta amb nosaltres per a més informació sobre horaris, preus i disponibilitat.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-salmon-500 to-rose-500 text-white px-12 py-5 rounded-full font-bold hover:from-salmon-600 hover:to-rose-600 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 text-lg"
            >
              Contactar
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubHipic;
