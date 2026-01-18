import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const { t } = useTranslation();

  // Ejemplo de artículos - en producción vendrían de una API o base de datos
  const articulos = [
    {
      id: 1,
      titulo: 'Bienvenida al blog',
      resumen: 'Primer artículo del blog sobre psicología y bienestar...',
      fecha: '2025-01-12',
      imagen: 'https://via.placeholder.com/400x250',
    },
    // Se pueden agregar más artículos aquí
  ];

  return (
    <div className="py-32 bg-gradient-to-b from-rose-50/20 via-white to-lilac-50/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-rose-600 uppercase tracking-wider">Blog</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-salmon-600 via-rose-600 to-lilac-600 bg-clip-text text-transparent">
            {t('blog.titulo')}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Articles sobre psicologia, benestar i salut mental
          </p>
        </div>

        {articulos.length === 0 ? (
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 to-transparent rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
            <div className="relative bg-gradient-to-br from-white via-rose-50/20 to-white rounded-3xl p-16 shadow-2xl border border-rose-100/50 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-rose-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="text-2xl text-gray-700 mb-4 font-semibold">
                Properament publicarem articles sobre psicologia, benestar i salut mental.
              </p>
              <p className="text-lg text-gray-600">
                Torna aviat per llegir contingut nou.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articulos.map((articulo) => (
              <article
                key={articulo.id}
                className="group relative flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 to-transparent rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform"></div>
                <div className="relative bg-gradient-to-br from-white via-rose-50/20 to-white rounded-3xl shadow-xl overflow-hidden border border-rose-100/50 hover:shadow-2xl transition-all flex flex-col h-full">
                  <div className="h-64 bg-gradient-to-br from-salmon-200 to-rose-200 overflow-hidden">
                    <img
                      src={articulo.imagen}
                      alt={articulo.titulo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <p className="text-sm text-gray-500 mb-3 font-medium">
                      {new Date(articulo.fecha).toLocaleDateString('ca-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <h2 className="text-2xl font-extrabold mb-4 text-gray-800">
                      {articulo.titulo}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{articulo.resumen}</p>
                    <Link
                      to={`/blog/${articulo.id}`}
                      className="inline-flex items-center gap-2 text-salmon-600 hover:text-salmon-700 font-bold group-hover:gap-3 transition-all"
                    >
                      {t('blog.leerMas')}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
