import { useTranslation } from 'react-i18next';

const Servicios = () => {
  const { t } = useTranslation();

  return (
    <div className="py-32 bg-gradient-to-b from-white via-salmon-50/20 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-salmon-200 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-salmon-600 uppercase tracking-wider">Els meus serveis</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-salmon-600 via-rose-600 to-lilac-600 bg-clip-text text-transparent">
            {t('servicios.titulo')}
          </h1>
        </div>

        {/* Consulta Psicológica - Introducción */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-salmon-600 to-rose-600 bg-clip-text text-transparent">
              {t('servicios.consulta.titulo')}
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Els serveis de consulta estan pensats per oferir un espai de confiança i cura personalitzat, on poder parlar obertament de les pròpies emocions, dificultats i necessitats. Cada procés és únic, i per això l'acompanyament s'adapta a la realitat de cada persona, parella o família. L'objectiu és donar suport, oferir eines i facilitar un camí de creixement i benestar emocional enfocat al canvi.
            </p>
          </div>

          <div className="space-y-16">
            {/* Terapia de Pareja */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-salmon-100/30 to-transparent rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
                <div className="flex items-start gap-8 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-salmon-400 to-salmon-600 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-extrabold mb-6 text-gray-800">
                      Teràpia de Parella
                    </h3>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Què passa quan la parella deixa de ser un lloc on descansar i es converteix en un espai ple de malentesos, pors, silencis o distància? Sovint no és falta d'estima, sinó falta d'eines.
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      La teràpia de parella és un espai per posar llum al que passa, entendre què s'ha anat trencant i trobar noves maneres de comunicar-se i de reconnectar. Treballem per identificar què manté els conflictes actius i com transformar aquestes dinàmiques perquè la relació sigui el lloc on els seus integrants volen estar.
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                      Cada procés és únic. Per exemple, hi ha parelles que volen retrobar-se i d'altres que busquen tancar una etapa de manera conscient i respectuosa. En tots els casos, la teràpia ofereix una guia per comprendre, decidir i avançar cap a la relació que es vol tenir. No té perquè ser el final, sinó una crida a fer-ho diferent.
                    </p>
                    <div className="bg-salmon-50 rounded-2xl p-6 border-l-4 border-salmon-500">
                      <p className="text-lg text-gray-700 mb-4">
                        <strong className="text-salmon-700">A qui s'adreça:</strong> A parelles de qualsevol edat, orientació o tipus de relació que vulguin millorar la seva comunicació, resoldre conflictes, o revisar el seu vincle amb l'acompanyament d'un professional.
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-lg text-gray-700">
                          <strong className="text-salmon-700">Durada:</strong> Sessions d'una hora aproximadament.
                        </p>
                        <p className="text-3xl font-extrabold text-salmon-600">
                          70€ la sessió
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terapia Familiar */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 to-transparent rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform"></div>
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
                <div className="flex items-start gap-8 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-rose-600 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-extrabold mb-6 text-gray-800">
                      Teràpia Familiar
                    </h3>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Quan una família deixa de funcionar com abans, què està passant realment? És una qüestió d'edats, de moments vitals… o de maneres de relacionar-se que ja no encaixen?
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Les famílies canvien, evolucionen i es reorganitzen constantment. El que un dia va servir per sostenir el grup, amb el temps pot començar a generar tensió, incomprensió o distància. La teràpia familiar ofereix un espai per observar aquestes dinàmiques, entendre com s'han construït i decidir com es poden transformar.
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                      No es tracta de buscar responsables, sinó de donar veu a totes les parts i posar paraules al que sovint queda silenciat. El treball terapèutic permet identificar patrons que es repeteixen, revisar rols i crear noves formes de comunicació que afavoreixin una convivència més clara i respectuosa. No es tracta de tornar enrere, sinó de trobar una nova manera d'estar junts.
                    </p>
                    <div className="bg-rose-50 rounded-2xl p-6 border-l-4 border-rose-500">
                      <p className="text-lg text-gray-700 mb-4">
                        <strong className="text-rose-700">A qui s'adreça:</strong> A famílies que senten que la manera com estan convivint o relacionant-se ja no funciona com voldrien. A famílies que volen entendre què està passant entre els seus membres, posar paraules al que passa i trobar noves formes d'estar junts. No importa la composició ni el moment vital, l'important és la voluntat de revisar i obrir espais de canvi.
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-lg text-gray-700">
                          <strong className="text-rose-700">Durada:</strong> Sessions d'una hora aproximadament.
                        </p>
                        <p className="text-3xl font-extrabold text-rose-600">
                          70€ la sessió
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terapia Sexual */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-lilac-100/30 to-transparent rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
                <div className="flex items-start gap-8 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-lilac-400 to-lilac-600 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-extrabold mb-6 text-gray-800">
                      Teràpia Sexual
                    </h3>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Què passa quan el sexe deixa de ser un espai de plaer, connexió o curiositat i es converteix en una font de dubtes, tensions, silencis o incomoditat?
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      La teràpia sexual és un espai per parlar de sexualitat amb naturalitat, sense presses ni judicis. Un lloc on poder explorar com vivim la intimitat, què ens limita, què ens genera malestar i què ens agradaria canviar. La sexualitat no és només una resposta física, sinó una experiència profundament lligada a les emocions, a la història personal i a la manera com ens relacionem amb els altres.
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      En aquest espai es treballen tant les dificultats sexuals que generen malestar com el desig de comprendre's millor i viure la sexualitat amb més llibertat. Es posen paraules a allò que costa expressar, s'identifiquen bloquejos, creences o pors, i es construeixen noves maneres de relacionar-se amb el propi cos, el plaer i la intimitat.
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                      La teràpia sexual pot ser individual o en parella. En el cas de les parelles, sovint el més difícil no és el que passa al llit, sinó el que no s'arriba a dir. Aquest espai permet parlar obertament de sexualitat, millorar la comunicació íntima i trobar formes més satisfactòries i respectuoses de viure-la junts. Potser és el moment de transformar el dubte en descobriment.
                    </p>
                    <div className="bg-lilac-50 rounded-2xl p-6 border-l-4 border-lilac-500">
                      <p className="text-lg text-gray-700 mb-4">
                        <strong className="text-lilac-700">A qui s'adreça:</strong> Aquest servei s'adreça a persones, parelles, vincles de qualsevol edat, identitat o orientació. La diversitat forma part de la sexualitat, i aquest és un espai on cada vivència és respectada.
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-lg text-gray-700">
                          <strong className="text-lilac-700">Durada:</strong> Sessions d'una hora aproximadament.
                        </p>
                        <p className="text-3xl font-extrabold text-lilac-600">
                          70€ la sessió
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Psicología Perinatal */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-salmon-100/30 to-transparent rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform"></div>
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
                <div className="flex items-start gap-8 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-salmon-300 to-salmon-500 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-extrabold mb-6 text-gray-800">
                      Psicologia Perinatal
                    </h3>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Com ens preparem emocionalment per a una nova vida, quan la biologia, les emocions i els canvis vitals es barregen en un mateix espai? Com podem sentir-nos segurs i recolzats quan tot està en constant moviment i el que sentim és intens, desconegut o confús?
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      La psicologia perinatal és l'acompanyament professional de mares, pares i famílies durant tot el període que envolta l'embaràs, la criança inicial i els processos reproductius. No només es tracta de comprendre el que passa en el cos, sinó també de donar eines per gestionar les emocions, el vincle amb el nadó i les relacions familiars. És un espai per parlar, entendre i construir recursos que afavoreixin el benestar emocional durant moments de canvi, alegria, incertesa o dificultat.
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Els processos de reproducció assistida poden ser especialment intensos, tractaments mèdics, proves, esperes, repeticions d'intents i canvis hormonals que afecten l'estat d'ànim. Sovint la persona o la parella es sent sola, aclaparada o insegura. El recolzament psicològic ofereix un espai on expressar pors i dubtes, gestionar l'ansietat, cuidar-se i sostenir l'equilibri emocional, així com eines per comunicar-se amb la parella i l'entorn.
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                      El dol gestacional i neonatal és una experiència profunda i sovint silenciada, que genera tristesa, ràbia, culpa i desconcert, entre moltes altres emocions. Comptar amb un espai segur i respectuós on sentir-se escoltat i acompanyat permet posar paraules al dolor, compartir records i construir un nou equilibri emocional. El camí que ve és més ferm quan tens suport al teu costat.
                    </p>
                    <div className="bg-salmon-50 rounded-2xl p-6 border-l-4 border-salmon-500">
                      <p className="text-lg text-gray-700 mb-4">
                        <strong className="text-salmon-700">A qui s'adreça:</strong> Aquest servei està pensat per a qualsevol persona, parella o família que estigui vivint un procés perinatal, ja sigui de reproducció assistida, gestació, inici de criança o dol.
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-lg text-gray-700">
                          <strong className="text-salmon-700">Durada:</strong> Sessions d'una hora aproximadament.
                        </p>
                        <p className="text-3xl font-extrabold text-salmon-600">
                          70€ la sessió
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Asesoramiento */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 to-transparent rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
                <div className="flex items-start gap-8 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-rose-300 to-rose-500 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-extrabold mb-6 text-gray-800">
                      Assessorament i Acompanyament Psicològic
                    </h3>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Què passa quan la vida et posa davant reptes que semblen massa grans per afrontar-los sol?
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      L'assessorament i l'acompanyament psicològic és un lloc on parlar obertament de les pròpies dificultats, descobrir noves perspectives i experimentar estratègies que ajudin a sentir-se més equilibrat i segur. No és només per moments crítics: és també un espai per créixer personalment, conèixer millor els propis recursos i aprendre a gestionar els alts i baixos de la vida amb més serenitat.
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                      En aquestes sessions, es treballen emocions com l'ansietat, l'estrès, la tristesa o la inseguretat, així com situacions que generen conflicte intern o dificulten prendre decisions importants. Amb diàleg i exercicis pràctics, cada persona pot descobrir què funciona per a ella, sense presses, sense judicis i amb suport professional. No hi ha solucions màgiques, sinó un espai per entendre, explorar i transformar.
                    </p>
                    <div className="bg-rose-50 rounded-2xl p-6 border-l-4 border-rose-500">
                      <p className="text-lg text-gray-700 mb-4">
                        <strong className="text-rose-700">A qui s'adreça:</strong> Aquest servei està pensat per a adolescents i adults que volen sentir-se recolzats, comprendre millor les pròpies reaccions i construir eines que permetin afrontar els reptes del dia a dia amb més confiança i claredat.
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-lg text-gray-700">
                          <strong className="text-rose-700">Durada:</strong> Sessions d'una hora aproximadament.
                        </p>
                        <p className="text-3xl font-extrabold text-rose-600">
                          50€ la sessió
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Talleres de Psicoeducación */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-rose-600 uppercase tracking-wider">Tallers</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-rose-600 to-lilac-600 bg-clip-text text-transparent">
              Tallers de Psicoeducació
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
              Els tallers són espais vivencials i participatius que permeten aprendre, compartir i créixer en grup. Estan pensats per oferir recursos pràctics i acompanyament en diferents etapes vitals, així com per crear vincles amb altres persones que viuen experiències similars.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              En aquests espais, el coneixement professional es combina amb la calidesa del compartir col·lectiu, generant un entorn segur, enriquidor i transformador.
            </p>
            <div className="mt-8 inline-block px-6 py-3 bg-rose-100 rounded-full">
              <p className="text-lg font-semibold text-rose-700">
                Durada: 1 sessió de 90 minuts (adaptable a 60 minuts)
              </p>
            </div>
          </div>

          {/* Talleres para Niños y Adolescentes */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-extrabold mb-4 text-gray-800">
                Per a Infants i Adolescents
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Acoso Escolar */}
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800">
                  Trencar el silenci: prevenir, comprendre i aturar l'assetjament escolar
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Quan callem, l'assetjament creix. Parlar-ne és el primer pas per entendre què hi ha darrere d'aquestes conductes i descobrir com, entre tots, podem trencar el cercle i construir relacions de respecte i suport.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Aquest taller convida a mirar de prop allò que sovint es vol mirar de lluny. Parlar-ne sense por, comprendre què hi ha darrere del silenci d'una víctima o del riure d'un agressor. Descobrir que tots tenim un paper (també els qui miren i callen) i que canviar les coses és possible si trenquem el cercle de la indiferència.
                </p>
                <div className="bg-rose-50 rounded-xl p-6 border-l-4 border-rose-500">
                  <p className="font-semibold text-rose-700 mb-3">Objectius:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 mt-1">•</span>
                      <span>Comprendre què és l'assetjament escolar i les seves diferents formes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 mt-1">•</span>
                      <span>Reconèixer tant el paper de la víctima i de l'agressor com el de l'espectador</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 mt-1">•</span>
                      <span>Fomentar vincles saludables i respectuosos dins del grup classe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 mt-1">•</span>
                      <span>Desenvolupar estratègies concretes per prevenir i aturar situacions d'exclusió o violència</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-gray-600">
                    <strong>Edat recomanada:</strong> De 8 a 18 anys
                  </p>
                </div>
              </div>

              {/* Emocional */}
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-salmon-400 to-salmon-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800">
                  Em sento, m'escolto, m'entenc
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Hi ha dies en què tot sembla una muntanya russa. Un comentari pot alegrar-te el matí, una mirada pot enfonsar-te'l. I em pregunto... com pot ser que allò que sentim tingui tant poder sobre el que fem, el que diem, el que som?
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A l'escola aprenem matemàtiques, llengües, història… però, qui ens ensenya a llegir-nos per dins? Aquest taller és un espai per posar paraules al que costa expressar, per entendre d'on surten les emocions i com conviure-hi sense deixar que ens dominin.
                </p>
                <div className="bg-salmon-50 rounded-xl p-6 border-l-4 border-salmon-500">
                  <p className="font-semibold text-salmon-700 mb-3">Objectius:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-salmon-500 mt-1">•</span>
                      <span>Identificar, expressar i comprendre les pròpies emocions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-salmon-500 mt-1">•</span>
                      <span>Desenvolupar empatia i respecte cap a les emocions dels altres</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-salmon-500 mt-1">•</span>
                      <span>Aprendre estratègies per gestionar la frustració, la ràbia o la tristesa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-salmon-500 mt-1">•</span>
                      <span>Promoure una convivència emocionalment sana dins del grup</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-gray-600">
                    <strong>Edat recomanada:</strong> De 8 a 18 anys
                  </p>
                </div>
              </div>

              {/* Sexualidad - Parte 1 */}
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-lilac-400 to-lilac-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800">
                  Sexualitat i afectivitat: parlar-ne sense vergonya (Part 1)
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <strong>Relacions, afectivitat i consentiment</strong>
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Parlem molt de sexualitat, però… què vol dir realment parlar-ne? És un tema de cos, o també de respecte, límits i emocions? Aquest taller proposa obrir un espai segur per pensar, sentir i parlar sense judicis. Per entendre que la sexualitat no és només desig, sinó també cura, respecte i llibertat compartida.
                </p>
                <div className="bg-lilac-50 rounded-xl p-6 border-l-4 border-lilac-500">
                  <p className="font-semibold text-lilac-700 mb-3">Objectius:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-lilac-500 mt-1">•</span>
                      <span>Fomentar una visió positiva, respectuosa i diversa de la sexualitat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lilac-500 mt-1">•</span>
                      <span>Reflexionar sobre els valors, els límits i el consentiment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lilac-500 mt-1">•</span>
                      <span>Desmuntar mites i estereotips presents en els models afectius i sexuals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lilac-500 mt-1">•</span>
                      <span>Promoure relacions basades en el respecte, la igualtat i la comunicació</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-gray-600">
                    <strong>Edat recomanada:</strong> De 12 a 18 anys
                  </p>
                </div>
              </div>

              {/* Sexualidad - Parte 2 */}
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-lilac-400 to-lilac-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800">
                  Sexualitat i afectivitat: parlar-ne sense vergonya (Part 2)
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <strong>Salut sexual, prevenció i responsabilitat</strong>
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Quan parlem de salut sexual, sovint pensem només en riscos, normes i protecció. Però… i si la salut també fos plaer, curiositat i respecte? En aquest taller, a través d'una conversa clara i adaptada a cada edat, revisarem què sabem realment sobre les infeccions i malalties de transmissió sexual, com prevenir-les i com afrontar la desinformació que circula.
                </p>
                <div className="bg-lilac-50 rounded-xl p-6 border-l-4 border-lilac-500">
                  <p className="font-semibold text-lilac-700 mb-3">Objectius:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-lilac-500 mt-1">•</span>
                      <span>Promoure una visió positiva, respectuosa i responsable de la sexualitat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lilac-500 mt-1">•</span>
                      <span>Donar informació veraç i actualitzada sobre prevenció d'ITS, ETS i autocura</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lilac-500 mt-1">•</span>
                      <span>Fomentar l'autoconeixement i la presa de decisions lliure de pressions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lilac-500 mt-1">•</span>
                      <span>Desmuntar mites, tabús i estereotips sobre la sexualitat i el plaer</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-gray-600">
                    <strong>Edat recomanada:</strong> A partir de 12 anys, amb adaptació segons el grup
                  </p>
                </div>
              </div>

              {/* Relaciones Sanas */}
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800">
                  Relacions sanes i prevenció de violència
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Hi ha històries d'amor que comencen amb un missatge, amb una mirada, amb una promesa. I d'altres que, sense adonar-nos-en, acaben convertint-se en un espai petit on costa respirar. Quan parlem d'amor, de vegades oblidem parlar de llibertat.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Aquest taller convida a mirar les relacions des d'un altre lloc: el de la igualtat, el respecte i l'autonomia. A qüestionar els models que hem après, les frases fetes que justifiquen el control o la gelosia, i a reconèixer les senyals que diferencien un vincle sa d'un que fa mal.
                </p>
                <div className="bg-rose-50 rounded-xl p-6 border-l-4 border-rose-500">
                  <p className="font-semibold text-rose-700 mb-3">Objectius:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 mt-1">•</span>
                      <span>Reconèixer els signes de la violència de gènere i entendre'n les causes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 mt-1">•</span>
                      <span>Desenvolupar pensament crític davant els models de relació apresos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 mt-1">•</span>
                      <span>Fomentar la igualtat, el respecte i la llibertat dins les relacions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 mt-1">•</span>
                      <span>Donar eines per identificar i prevenir conductes de control, gelosia o possessió</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-gray-600">
                    <strong>Edat recomanada:</strong> De 10 a 18 anys
                  </p>
                </div>
              </div>

              {/* Comunicación */}
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-salmon-400 to-salmon-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800">
                  Parlar i escoltar: comunicació assertiva i resolució de conflictes
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Tots parlem, però… quantes vegades ens sentim realment escoltats? I quantes vegades escoltem de veritat? Aquest taller és una invitació a descobrir que comunicar-se no és només parlar, sinó connectar. Que podem dir el que pensem sense fer mal, defensar el que sentim sense atacar.
                </p>
                <div className="bg-salmon-50 rounded-xl p-6 border-l-4 border-salmon-500">
                  <p className="font-semibold text-salmon-700 mb-3">Objectius:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-salmon-500 mt-1">•</span>
                      <span>Desenvolupar habilitats de comunicació assertiva i escolta activa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-salmon-500 mt-1">•</span>
                      <span>Aprendre estratègies per gestionar conflictes de manera positiva</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-salmon-500 mt-1">•</span>
                      <span>Reconèixer l'impacte del llenguatge verbal i no verbal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-salmon-500 mt-1">•</span>
                      <span>Fomentar el respecte, l'empatia i la cooperació dins del grup classe</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-gray-600">
                    <strong>Edat recomanada:</strong> De 12 a 17 anys
                  </p>
                </div>
              </div>

              {/* Adolescencia */}
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all lg:col-span-2">
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-lilac-400 to-lilac-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-4 text-gray-800">
                      Adolescència: identitat, canvis i límits
                    </h4>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Quan deixes de ser un nen… però encara no ets un adult, qui ets, exactament? L'adolescència és aquest espai estrany on tot canvia: el cos, la veu, els amics, els gustos, fins i tot la manera de mirar-te al mirall. De vegades et sents ple de tot, i d'altres, buit de res.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Aquest taller és un espai per aturar-se i mirar-se amb honestedat. Parlarem d'identitat, dels canvis que arriben sense permís i dels límits, els propis i els dels altres. Treballarem què vol dir créixer sense deixar de ser un mateix, i com conviure amb emocions que van i venen sense donar explicacions.
                    </p>
                    <div className="bg-lilac-50 rounded-xl p-6 border-l-4 border-lilac-500">
                      <p className="font-semibold text-lilac-700 mb-3">Objectius:</p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-lilac-500 mt-1">•</span>
                          <span>Acompanyar el procés d'identitat i autodescobriment propi de l'adolescència</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lilac-500 mt-1">•</span>
                          <span>Reflexionar sobre els canvis físics, emocionals i socials d'aquesta etapa</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lilac-500 mt-1">•</span>
                          <span>Treballar els límits personals i el respecte cap als dels altres</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lilac-500 mt-1">•</span>
                          <span>Fomentar l'autoestima, la consciència emocional i la presa de decisions responsable</span>
                        </li>
                      </ul>
                      <p className="mt-4 text-gray-600">
                        <strong>Edat recomanada:</strong> De 10 a 16 anys
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Talleres para Familias */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-extrabold mb-4 text-gray-800">
                Per a Famílies / Pares i Mares
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Comunicar con adolescentes */}
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-lilac-400 to-lilac-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800">
                  Com comunicar-te amb un adolescent
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Hi ha un moment en què la criatura que t'explicava tot de cop calla. On les converses es tornen mirades curtes, on els "no ho sé" substitueixen els "mama, papa, mira". I aleshores et preguntes… quan va començar aquest silenci?
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Aquest taller convida les famílies a mirar aquesta etapa no com una batalla, sinó com una transició compartida, un procés on l'autonomia i els límits poden conviure amb la tendresa.
                </p>
                <div className="bg-lilac-50 rounded-xl p-6 border-l-4 border-lilac-500">
                  <p className="font-semibold text-lilac-700 mb-3">Objectius:</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-lilac-500 mt-1">•</span>
                      <span>Comprendre els principals canvis emocionals i conductuals de l'adolescència</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lilac-500 mt-1">•</span>
                      <span>Aprendre estratègies de comunicació positiva amb els fills adolescents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lilac-500 mt-1">•</span>
                      <span>Reforçar el vincle familiar des del respecte i la confiança</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lilac-500 mt-1">•</span>
                      <span>Oferir eines per gestionar límits i conflictes sense trencar el diàleg</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-gray-600 text-sm">
                    <strong>Públic objectiu:</strong> Pares, mares i tutors d'adolescents
                  </p>
                </div>
              </div>

              {/* Sexualidad en familia */}
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800">
                  Parlar de sexualitat en família: confiança sense tabús
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Saps com parlar de sexualitat amb el teu fill o filla? A vegades sembla que només hi ha dues opcions: evitar el tema o parlar-ne com si fos una conversa qualsevol. Però… on és el punt entremig?
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Aquest taller és un espai per revisar com abordem la sexualitat dins la família: què transmetem, amb paraules o silencis, com podem parlar d'afectivitat, consentiment o respecte sense incomodar, i com acompanyar els fills i filles perquè visquin la seva sexualitat des de la llibertat i la responsabilitat.
                </p>
                <div className="bg-rose-50 rounded-xl p-6 border-l-4 border-rose-500">
                  <p className="font-semibold text-rose-700 mb-3">Objectius:</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 mt-1">•</span>
                      <span>Donar eines a les famílies per parlar de sexualitat i afectivitat amb fills i filles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 mt-1">•</span>
                      <span>Superar tabús i pors associats a l'educació sexual</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 mt-1">•</span>
                      <span>Promoure una comunicació oberta i respectuosa segons l'edat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 mt-1">•</span>
                      <span>Trencar mites i estereotips sobre la sexualitat i les relacions</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-gray-600 text-sm">
                    <strong>Públic objectiu:</strong> Pares, mares i tutors d'infants i adolescents
                  </p>
                </div>
              </div>

              {/* Acoso escolar desde casa */}
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-salmon-400 to-salmon-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800">
                  Entendre i afrontar l'assetjament escolar des de casa
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Com podem saber què passa realment dins l'aula, entre passadissos o a les xarxes, quan els nostres fills diuen que "tot va bé"? L'assetjament escolar és una paraula que fa por, potser perquè sabem que, quan es dona, ningú en queda del tot al marge.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Aquest taller és un espai per entendre què és realment l'assetjament i què el diferencia d'un simple conflicte. Analitzarem què sent i com canvia una víctima, però també què passa dins l'agressor i com viu l'espectador el silenci o la por.
                </p>
                <div className="bg-salmon-50 rounded-xl p-6 border-l-4 border-salmon-500">
                  <p className="font-semibold text-salmon-700 mb-3">Objectius:</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-salmon-500 mt-1">•</span>
                      <span>Comprendre què és l'assetjament escolar, com es manifesta i què el diferencia d'un conflicte puntual</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-salmon-500 mt-1">•</span>
                      <span>Analitzar els efectes emocionals i conductuals en víctimes, agressors i espectadors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-salmon-500 mt-1">•</span>
                      <span>Desenvolupar estratègies familiars per actuar davant situacions d'assetjament</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-salmon-500 mt-1">•</span>
                      <span>Promoure una educació basada en l'empatia, el respecte i la responsabilitat col·lectiva</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-gray-600 text-sm">
                    <strong>Públic objectiu:</strong> Pares, mares i tutors d'infants i adolescents
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Tarifas */}
        <section className="bg-gradient-to-br from-salmon-50 via-rose-50 to-lilac-50 rounded-3xl p-16 shadow-2xl border border-white/50">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-salmon-600 to-rose-600 bg-clip-text text-transparent">
              Tarifes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Teràpia Familiar i de Parella</h3>
              <div className="flex-grow flex flex-col justify-center">
                <p className="text-4xl font-extrabold text-salmon-600 mb-2">70€</p>
                <p className="text-gray-600">la sessió</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Sexualitat i Psicologia Perinatal</h3>
              <div className="flex-grow flex flex-col justify-center">
                <div className="mb-4">
                  <p className="text-4xl font-extrabold text-rose-600 mb-2">60€</p>
                  <p className="text-gray-600 text-sm">individual</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-rose-600 mb-2">70€</p>
                  <p className="text-gray-600 text-sm">amb parella o vincles</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Acompanyament i Assessorament</h3>
              <div className="flex-grow flex flex-col justify-center">
                <p className="text-4xl font-extrabold text-lilac-600 mb-2">50€</p>
                <p className="text-gray-600">la sessió</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Servicios;
