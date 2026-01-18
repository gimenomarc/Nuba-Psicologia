import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sobreMiOpen, setSobreMiOpen] = useState(false);
  const [serveisOpen, setServeisOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navegación */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-salmon-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col items-center group">
              <img 
                src="/images/icon.png" 
                alt="NB" 
                className="h-10 md:h-12 object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-sm md:text-base font-semibold text-gray-800 mt-1">Psicologia</span>
            </Link>

            {/* Menú Desktop */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-salmon-600 transition-colors font-medium text-sm relative group"
              >
                Inici
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-salmon-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              {/* Sobre mi - Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setSobreMiOpen(true)}
                onMouseLeave={() => setSobreMiOpen(false)}
              >
                <button className="text-gray-700 hover:text-salmon-600 transition-colors font-medium text-sm relative group flex items-center gap-1">
                  Sobre mi
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-salmon-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                {sobreMiOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    <Link
                      to="/quien-soy"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-salmon-50 hover:text-salmon-600 transition-colors"
                    >
                      Qui soc
                    </Link>
                    <Link
                      to="/como-trabajo"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-salmon-50 hover:text-salmon-600 transition-colors"
                    >
                      Com treballo
                    </Link>
                  </div>
                )}
              </div>

              {/* Serveis - Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServeisOpen(true)}
                onMouseLeave={() => setServeisOpen(false)}
              >
                <button className="text-gray-700 hover:text-salmon-600 transition-colors font-medium text-sm relative group flex items-center gap-1">
                  Serveis
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-salmon-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                {serveisOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    <Link
                      to="/servicios"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-salmon-50 hover:text-salmon-600 transition-colors"
                    >
                      Consulta
                    </Link>
                    <Link
                      to="/servicios#talleres"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-salmon-50 hover:text-salmon-600 transition-colors"
                    >
                      Tallers
                    </Link>
                    <Link
                      to="/club-hipic"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-salmon-50 hover:text-salmon-600 transition-colors"
                    >
                      Club Hípic Julivert
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/blog"
                className="text-gray-700 hover:text-salmon-600 transition-colors font-medium text-sm relative group"
              >
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-salmon-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/contacto"
                className="bg-gradient-to-r from-salmon-500 to-rose-500 text-white px-6 py-2.5 rounded-full hover:from-salmon-600 hover:to-rose-600 transition-all shadow-lg hover:shadow-xl font-semibold text-sm hover:scale-105"
              >
                Contacte
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
                Inici
              </Link>
              <div className="space-y-2 pl-4">
                <div className="text-gray-700 font-semibold text-sm mb-2">Sobre mi</div>
                <Link
                  to="/quien-soy"
                  className="block text-gray-600 hover:text-salmon-600 text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  - Qui soc
                </Link>
                <Link
                  to="/como-trabajo"
                  className="block text-gray-600 hover:text-salmon-600 text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  - Com treballo
                </Link>
              </div>
              <div className="space-y-2 pl-4">
                <div className="text-gray-700 font-semibold text-sm mb-2">Serveis</div>
                <Link
                  to="/servicios"
                  className="block text-gray-600 hover:text-salmon-600 text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  - Consulta
                </Link>
                <Link
                  to="/servicios#talleres"
                  className="block text-gray-600 hover:text-salmon-600 text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  - Tallers
                </Link>
                <Link
                  to="/club-hipic"
                  className="block text-gray-600 hover:text-salmon-600 text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  - Club Hípic Julivert
                </Link>
              </div>
              <Link
                to="/blog"
                className="block text-gray-700 hover:text-salmon-600"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contacto"
                className="block bg-salmon-500 text-white px-4 py-2 rounded-lg text-center"
                onClick={() => setMenuOpen(false)}
              >
                Contacte
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
