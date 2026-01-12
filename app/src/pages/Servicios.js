import { useTranslation } from 'react-i18next';

const Servicios = () => {
  const { t } = useTranslation();

  return (
    <div className="py-20 bg-gradient-to-b from-white to-salmon-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-salmon-600 to-rose-600 bg-clip-text text-transparent">
            {t('servicios.titulo')}
          </h1>
        </div>

        {/* Consulta Psicológica */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            {t('servicios.consulta.titulo')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Terapia de Pareja */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-salmon-400 to-salmon-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-salmon-700">
                {t('servicios.consulta.pareja.titulo')}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t('servicios.consulta.pareja.descripcion')}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Público:</strong> {t('servicios.consulta.pareja.publico')}
                </p>
                <p className="text-xl font-bold text-salmon-600">
                  {t('servicios.consulta.pareja.tarifa')}
                </p>
              </div>
            </div>

            {/* Terapia Familiar */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-rose-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-rose-700">
                {t('servicios.consulta.familiar.titulo')}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t('servicios.consulta.familiar.descripcion')}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Público:</strong> {t('servicios.consulta.familiar.publico')}
                </p>
                <p className="text-xl font-bold text-rose-600">
                  {t('servicios.consulta.familiar.tarifa')}
                </p>
              </div>
            </div>

            {/* Terapia Sexual */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-lilac-400 to-lilac-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-lilac-700">
                {t('servicios.consulta.sexual.titulo')}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t('servicios.consulta.sexual.descripcion')}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Público:</strong> {t('servicios.consulta.sexual.publico')}
                </p>
                <p className="text-xl font-bold text-lilac-600">
                  {t('servicios.consulta.sexual.tarifa')}
                </p>
              </div>
            </div>

            {/* Psicología Perinatal */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-salmon-300 to-salmon-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-salmon-600">
                {t('servicios.consulta.perinatal.titulo')}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t('servicios.consulta.perinatal.descripcion')}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Público:</strong> {t('servicios.consulta.perinatal.publico')}
                </p>
                <p className="text-xl font-bold text-salmon-600">
                  {t('servicios.consulta.perinatal.tarifa')}
                </p>
              </div>
            </div>

            {/* Asesoramiento */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-300 to-rose-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-rose-600">
                {t('servicios.consulta.asesoramiento.titulo')}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t('servicios.consulta.asesoramiento.descripcion')}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Público:</strong> {t('servicios.consulta.asesoramiento.publico')}
                </p>
                <p className="text-xl font-bold text-rose-600">
                  {t('servicios.consulta.asesoramiento.tarifa')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Talleres de Psicoeducación */}
        <section>
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
            {t('servicios.talleres.titulo')}
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            {t('servicios.talleres.duracion')}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Para Niños y Adolescentes */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-rose-700">
                {t('servicios.talleres.ninos.titulo')}
              </h3>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-rose-500">
                  <h4 className="text-xl font-bold mb-2 text-rose-700">
                    {t('servicios.talleres.ninos.acoso.titulo')}
                  </h4>
                  <p className="text-gray-700">{t('servicios.talleres.ninos.acoso.objetivos')}</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-salmon-500">
                  <h4 className="text-xl font-bold mb-2 text-salmon-700">
                    {t('servicios.talleres.ninos.emocional.titulo')}
                  </h4>
                  <p className="text-gray-700">{t('servicios.talleres.ninos.emocional.objetivos')}</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-lilac-500">
                  <h4 className="text-xl font-bold mb-2 text-lilac-700">
                    {t('servicios.talleres.ninos.sexualidad.titulo')}
                  </h4>
                  <p className="text-gray-700">{t('servicios.talleres.ninos.sexualidad.objetivos')}</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-rose-400">
                  <h4 className="text-xl font-bold mb-2 text-rose-600">
                    {t('servicios.talleres.ninos.relaciones.titulo')}
                  </h4>
                  <p className="text-gray-700">{t('servicios.talleres.ninos.relaciones.objetivos')}</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-salmon-400">
                  <h4 className="text-xl font-bold mb-2 text-salmon-600">
                    {t('servicios.talleres.ninos.comunicacion.titulo')}
                  </h4>
                  <p className="text-gray-700">{t('servicios.talleres.ninos.comunicacion.objetivos')}</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-lilac-400">
                  <h4 className="text-xl font-bold mb-2 text-lilac-600">
                    {t('servicios.talleres.ninos.identidad.titulo')}
                  </h4>
                  <p className="text-gray-700">{t('servicios.talleres.ninos.identidad.objetivos')}</p>
                </div>
              </div>
            </div>

            {/* Para Familias */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-lilac-700">
                {t('servicios.talleres.familias.titulo')}
              </h3>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-lilac-500">
                  <h4 className="text-xl font-bold mb-2 text-lilac-700">
                    {t('servicios.talleres.familias.comunicar.titulo')}
                  </h4>
                  <p className="text-gray-700">{t('servicios.talleres.familias.comunicar.objetivos')}</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-rose-500">
                  <h4 className="text-xl font-bold mb-2 text-rose-700">
                    {t('servicios.talleres.familias.sexualidad.titulo')}
                  </h4>
                  <p className="text-gray-700">{t('servicios.talleres.familias.sexualidad.objetivos')}</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-salmon-500">
                  <h4 className="text-xl font-bold mb-2 text-salmon-700">
                    {t('servicios.talleres.familias.acoso.titulo')}
                  </h4>
                  <p className="text-gray-700">{t('servicios.talleres.familias.acoso.objetivos')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Servicios;
