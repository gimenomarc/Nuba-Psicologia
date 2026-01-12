import { useTranslation } from 'react-i18next';

const PoliticaCookies = () => {
  const { t } = useTranslation();

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          {t('footer.cookies')}
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              ¿Qué son las cookies?
            </h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu
              dispositivo cuando visitas un sitio web. Estas cookies permiten
              que el sitio web recuerde tus acciones y preferencias durante un
              período de tiempo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Tipos de cookies utilizadas
            </h2>
            <p>
              Este sitio web utiliza las siguientes cookies:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Cookies técnicas:</strong> Necesarias para el
                funcionamiento del sitio web y la navegación.
              </li>
              <li>
                <strong>Cookies de preferencias:</strong> Almacenan tus
                preferencias de idioma y configuración.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Gestión de cookies
            </h2>
            <p>
              Puedes gestionar y eliminar las cookies a través de la
              configuración de tu navegador. Ten en cuenta que desactivar
              ciertas cookies puede afectar la funcionalidad del sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Cookies de terceros
            </h2>
            <p>
              Este sitio web no utiliza cookies de terceros para fines de
              publicidad o seguimiento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Más información
            </h2>
            <p>
              Para más información sobre cómo gestionar las cookies en tu
              navegador, puedes consultar la ayuda de tu navegador o visitar
              sitios web especializados.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PoliticaCookies;
