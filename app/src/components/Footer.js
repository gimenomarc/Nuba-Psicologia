import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-br from-lilac-800 via-lilac-900 to-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Información de contacto */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-salmon-300 to-rose-300 bg-clip-text text-transparent">
              Núria Llurba Puig
            </h3>
            <p className="text-lilac-200 mb-4 leading-relaxed">
              Psicóloga colegiada nº 33667
            </p>
            <p className="text-lilac-200 mb-4">
              <span className="font-semibold">{t('footer.email')}:</span>{' '}
              <a
                href="mailto:nuriallurba@nubapsicologia.com"
                className="hover:text-salmon-300 transition-colors underline decoration-2 underline-offset-2"
              >
                nuriallurba@nubapsicologia.com
              </a>
            </p>
            <p className="text-lilac-200 mb-4">
              <span className="font-semibold">Telèfon:</span>{' '}
              <a
                href="tel:699611264"
                className="hover:text-salmon-300 transition-colors underline decoration-2 underline-offset-2"
              >
                699 611 264
              </a>
            </p>
            <div className="mt-6">
              <p className="text-lilac-200 mb-3 font-semibold">{t('footer.rrss')}:</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/nubapsicologia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@nubapsicologia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Enlaces legales */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/politica-privacidad"
                  className="text-lilac-200 hover:text-salmon-300 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-salmon-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('footer.privacidad')}
                </Link>
              </li>
              <li>
                <Link
                  to="/politica-cookies"
                  className="text-lilac-200 hover:text-salmon-300 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-salmon-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('footer.cookies')}
                </Link>
              </li>
              <li>
                <Link
                  to="/aviso-legal"
                  className="text-lilac-200 hover:text-salmon-300 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-salmon-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('footer.avisoLegal')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Información adicional */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Información</h3>
            <p className="text-lilac-200 mb-3 leading-relaxed">
              Psicóloga colegiada nº 33667
            </p>
            <p className="text-lilac-200 leading-relaxed">
              Terapia sistémica adaptada a cada persona
            </p>
            <p className="text-lilac-200 mt-4 leading-relaxed">
              Modalidad online
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-lilac-300">{t('footer.derechos')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
