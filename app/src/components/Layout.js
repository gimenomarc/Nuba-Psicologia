import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navegación */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="text-2xl font-bold bg-gradient-to-r from-salmon-600 to-rose-600 bg-clip-text text-transparent group-hover:from-salmon-700 group-hover:to-rose-700 transition-all">
                Núria Llurba
              </div>
            </Link>

            {/* Menú Desktop */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-salmon-600 transition-colors font-medium text-sm relative group"
              >
                {t('nav.inicio')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-salmon-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/quien-soy"
                className="text-gray-700 hover:text-salmon-600 transition-colors font-medium text-sm relative group"
              >
                {t('nav.quienSoy')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-salmon-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/como-trabajo"
                className="text-gray-700 hover:text-salmon-600 transition-colors font-medium text-sm relative group"
              >
                {t('nav.comoTrabajo')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-salmon-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/servicios"
                className="text-gray-700 hover:text-salmon-600 transition-colors font-medium text-sm relative group"
              >
                {t('nav.servicios')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-salmon-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/club-hipic"
                className="text-gray-700 hover:text-salmon-600 transition-colors font-medium text-sm relative group"
              >
                {t('nav.clubHipic')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-salmon-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-salmon-600 transition-colors font-medium text-sm relative group"
              >
                {t('nav.blog')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-salmon-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/contacto"
                className="bg-gradient-to-r from-salmon-500 to-rose-500 text-white px-5 py-2.5 rounded-full hover:from-salmon-600 hover:to-rose-600 transition-all shadow-lg hover:shadow-xl font-medium text-sm"
              >
                {t('nav.contacto')}
              </Link>
              
              {/* Selector de idioma */}
              <div className="flex items-center space-x-2 border-l pl-4 ml-4">
                <button
                  onClick={() => changeLanguage('es')}
                  className={`px-2 py-1 rounded ${
                    i18n.language === 'es'
                      ? 'bg-salmon-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => changeLanguage('ca')}
                  className={`px-2 py-1 rounded ${
                    i18n.language === 'ca'
                      ? 'bg-salmon-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  CA
                </button>
              </div>
            </div>

            {/* Botón menú móvil */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menú móvil */}
          {menuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <Link
                to="/"
                className="block text-gray-700 hover:text-salmon-600"
                onClick={() => setMenuOpen(false)}
              >
                {t('nav.inicio')}
              </Link>
              <Link
                to="/quien-soy"
                className="block text-gray-700 hover:text-salmon-600"
                onClick={() => setMenuOpen(false)}
              >
                {t('nav.quienSoy')}
              </Link>
              <Link
                to="/como-trabajo"
                className="block text-gray-700 hover:text-salmon-600"
                onClick={() => setMenuOpen(false)}
              >
                {t('nav.comoTrabajo')}
              </Link>
              <Link
                to="/servicios"
                className="block text-gray-700 hover:text-salmon-600"
                onClick={() => setMenuOpen(false)}
              >
                {t('nav.servicios')}
              </Link>
              <Link
                to="/club-hipic"
                className="block text-gray-700 hover:text-salmon-600"
                onClick={() => setMenuOpen(false)}
              >
                {t('nav.clubHipic')}
              </Link>
              <Link
                to="/blog"
                className="block text-gray-700 hover:text-salmon-600"
                onClick={() => setMenuOpen(false)}
              >
                {t('nav.blog')}
              </Link>
              <Link
                to="/contacto"
                className="block bg-salmon-500 text-white px-4 py-2 rounded-lg text-center"
                onClick={() => setMenuOpen(false)}
              >
                {t('nav.contacto')}
              </Link>
              <div className="flex items-center space-x-2 pt-4 border-t">
                <button
                  onClick={() => changeLanguage('es')}
                  className={`px-3 py-1 rounded ${
                    i18n.language === 'es'
                      ? 'bg-salmon-500 text-white'
                      : 'text-gray-600 bg-gray-100'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => changeLanguage('ca')}
                  className={`px-3 py-1 rounded ${
                    i18n.language === 'ca'
                      ? 'bg-salmon-500 text-white'
                      : 'text-gray-600 bg-gray-100'
                  }`}
                >
                  CA
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="flex-grow overflow-x-hidden">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
