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
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-gray-800 text-center">
          {t('blog.titulo')}
        </h1>

        {articulos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">
              Próximamente publicaremos artículos sobre psicología, bienestar y
              salud mental.
            </p>
            <p className="text-gray-500">
              Vuelve pronto para leer contenido nuevo.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articulos.map((articulo) => (
              <article
                key={articulo.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={articulo.imagen}
                  alt={articulo.titulo}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(articulo.fecha).toLocaleDateString()}
                  </p>
                  <h2 className="text-xl font-bold mb-3 text-gray-800">
                    {articulo.titulo}
                  </h2>
                  <p className="text-gray-600 mb-4">{articulo.resumen}</p>
                  <Link
                    to={`/blog/${articulo.id}`}
                    className="text-salmon-600 hover:text-salmon-700 font-semibold"
                  >
                    {t('blog.leerMas')} →
                  </Link>
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
