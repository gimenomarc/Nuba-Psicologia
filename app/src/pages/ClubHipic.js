import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ClubHipic = () => {
  const { t } = useTranslation();

  return (
    <div className="py-20 bg-gradient-to-b from-white to-lilac-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-lilac-600 to-salmon-600 bg-clip-text text-transparent">
            {t('clubHipic.titulo')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('clubHipic.subtitulo')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mindfulness con Caballos */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-salmon-400 to-salmon-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-salmon-700">
              {t('clubHipic.actividades.mindfulness.titulo')}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t('clubHipic.actividades.mindfulness.descripcion')}
            </p>
          </div>

          {/* Superar Miedos y Traumas */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-rose-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-rose-700">
              {t('clubHipic.actividades.miedos.titulo')}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t('clubHipic.actividades.miedos.descripcion')}
            </p>
          </div>

          {/* Refuerzo Emocional */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-lilac-400 to-lilac-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-lilac-700">
              {t('clubHipic.actividades.refuerzo.titulo')}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t('clubHipic.actividades.refuerzo.descripcion')}
            </p>
          </div>

          {/* Team Building */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-salmon-300 to-salmon-500 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-salmon-600">
              {t('clubHipic.actividades.teambuilding.titulo')}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t('clubHipic.actividades.teambuilding.descripcion')}
            </p>
          </div>

          {/* Hípic Clínic */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 bg-gradient-to-br from-rose-300 to-rose-500 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-rose-600">
              {t('clubHipic.actividades.clinic.titulo')}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t('clubHipic.actividades.clinic.descripcion')}
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-lilac-100 to-salmon-100 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            ¿Interesado en nuestras actividades?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Contacta con nosotros para más información sobre horarios, precios y disponibilidad.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-gradient-to-r from-salmon-500 to-rose-500 text-white px-10 py-4 rounded-full font-semibold hover:from-salmon-600 hover:to-rose-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Contactar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClubHipic;
